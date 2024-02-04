'use server';

import prisma from '@/lib/prisma';


export const getProductsWithImages = async() => {


    try {
        

        //1. Get products

        const products = prisma.product.findMany({
            include: {
                ProductImage: {
                    take: 2,
                    select: {
                        url: true
                    }
                }
            }
        })

        //2. Get total of pages

        const totalCount = prisma.product.count();
        const [productsResponse, totalCountResponse] = await Promise.all([products, totalCount])

        const totalPages = Math.ceil(totalCountResponse / 12)

        return {
            totalPages: totalPages,
            products: productsResponse.map( product => ({
                ...product,
                images: product.ProductImage.map( image => image.url)
            }))
        }
    } catch (error) {
        throw new Error('Could not load products')
    }

}