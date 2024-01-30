'use server';

import { auth } from "@/auth.config";


export const getOrdersByUser = async() => {

    const session = await auth();

    if(!session?.user){
        return {
            ok: false,
            message: 'Not authenticated'
        }
    }

    const orders = await prisma?.order.findMany({
        where: {
            userId: session?.user.id
        },
        include: {
            OrderAddress: {
                select: {
                    firstName: true,
                    lastName: true
                }
            }
        }
    })


    return {
        ok: true,
        orders: orders
    }


}