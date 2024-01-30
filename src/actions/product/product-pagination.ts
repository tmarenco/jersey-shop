'use server';

import prisma from '@/lib/prisma';
import { Gender } from '@prisma/client';

interface PaginationOptions {
    page?: number;
    take?: number;
    gender?: Gender;

}

export const getPaginatedProductsWithImages = async({
    page = 1,
    take = 12,
    gender
}: PaginationOptions) => {

    if(isNaN(Number(page))) page = 1;
    if(page < 1) page = 1;


    try {
        

        //1. Get products

        const products = prisma.product.findMany({
            take: take,
            skip: ( page - 1 ) * take,
            include: {
                ProductImage: {
                    take: 2,
                    select: {
                        url: true
                    }
                }
            },
            where: {
                gender: gender
            }
        })

        //2. Get total of pages

        const totalCount = prisma.product.count({
            where: {
                gender: gender
            },
        });
        const [productsResponse, totalCountResponse] = await Promise.all([products, totalCount])

        const totalPages = Math.ceil(totalCountResponse / take)

        return {
            currentPage: page,
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