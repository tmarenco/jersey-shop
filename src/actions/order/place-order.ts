'use server';

import { auth } from "@/auth.config";
import type { Address, Size } from "@/interfaces";
import prisma from '@/lib/prisma';


interface ProductToOrder {
    productId: string;
    quantity: number;
    size: Size
}

export const placeOrder = async(productsIds: ProductToOrder[], address: any) => {

    const session = await auth();
    const idUser = session?.user.id;

    if(!idUser){
        return {
            ok: false,
            msg: 'No user session'
        }
    }

    const products = await prisma.product.findMany({
        where: {
            id: {
                in: productsIds.map ( p => p.productId)
            }
        }
    })


    const itemsInrOrder = productsIds.reduce((count, p) => count + p.quantity ,0);
    const { subTotal, tax, total } = productsIds.reduce((totals, item) => {
        
        const productQuantity = item.quantity;
        const product = products.find(product => product.id === item.productId);
        
        if(!product) throw new Error(`${item.productId} doesn't exist - 500`);

        const subtTotalOfProduct = product.price * productQuantity;
        totals.subTotal += subtTotalOfProduct;
        totals.tax += subtTotalOfProduct * 0.15;
        totals.total += subtTotalOfProduct * 1.15;

        return totals
    }, { subTotal: 0, tax: 0, total: 0 })

    try {
        const prismaTx = await prisma.$transaction( async(tx) => {
    
    
    
            //1. Update product stock
    
            const updatedProductsPromises = products.map((product)=> {
    
    
                const productQuantity = productsIds.filter(
                    p => p.productId === product.id
                ).reduce((acc, item) => item.quantity + acc, 0);
    
                if( productQuantity === 0 ) {
                    throw new Error(`${product.id} is missing quantity`);
                }
    
    
                return tx.product.update({
                    where: {id: product.id},
                    data: {
                        inStock: {
                            decrement: productQuantity
                        }
                    }
                });
    
            })
    
            const updatedProducts = await Promise.all(updatedProductsPromises);
            
            //Verify negative values == no stock
    
            updatedProducts.forEach( product => {
                if(product.inStock < 0){
                    throw new Error(`Not enough stock of ${ product.title }`);
                }
            } )
    
    
            //2. Create order, encabezado, details
    
    
            const order = await tx.order.create({
                data: {
                    userId: idUser,
                    itemsInOrder: itemsInrOrder,
                    subTotal: subTotal,
                    tax: tax,
                    total: total,
    
                    OrderItem: {
                        createMany: {
                            data: productsIds.map( p => ({
                                quantity: p.quantity,
                                size: p.size,
                                productId: p.productId,
                                price: products.find(product => product.id === p.productId)?.price ?? 0
                            }))
                        }
                    }
    
                }
            })
    
            //3. Create address
    
    
            const { country, userId, ...restAddress } = address;
            const orderAddress = await tx.orderAddress.create({
                data: {
                    ...restAddress,
                    countryId: country,
                    orderId: order.id
                }
            })
            return {
                updatedProducts: updatedProducts,
                order: order,
                orderAddress: orderAddress
            }
            
        })
        return {
            ok: true,
            order: prismaTx.order,
            prismaTx
        }
    } catch (error: any) {

        console.log(error)
        return {
            ok: false,
            message: error?.message
        }
    }
    





}