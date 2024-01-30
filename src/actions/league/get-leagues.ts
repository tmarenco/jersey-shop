'use server';


import prisma from '@/lib/prisma';

export const getLeagues = async()=> {
    try {

        const leagues = await prisma.league.findMany({
            orderBy: {
                name: 'asc'
            }
        })

        return leagues;
        
    } catch (error) {
        console.log(error);
        return [];
    }
}