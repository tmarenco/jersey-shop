'use server';

import { Address } from "@/interfaces";
import prisma from '@/lib/prisma';


export const setUserAddress = async(address: Address, userId: string) => {

    try {

        const newAddress = await createOrReplaceAddress(address, userId);
    
        return {
            ok: true,
            address: newAddress
        }
    } catch (error) {
        console.log(error);

        return {
            ok: false,
            msg: 'The address could not be saved'
        }
    }

}


const createOrReplaceAddress = async(address: Address, userId: string) => {

try {

    const storedAddress = await prisma.userAddress.findUnique({
        where: { userId }
    })

    const addressToSave = {
        userId: userId,
        address: address.address,
        address2: address.address2,
        countryId: address.country,
        firstName: address.firstName,
        lastName: address.lastName,
        phone: address.phone,
        zipCode: address.zipCode,
        city: address.city
    }

    if(!storedAddress){
        const newAddress = await prisma.userAddress.create({
            data: addressToSave
        })

        return newAddress;
    }

    const updatedAddress = await prisma.userAddress.update({
        where: { userId },
        data: addressToSave
    })

    return updatedAddress
    
} catch (error) {
    console.log(error);
    throw new Error('The address could not be saved')
}


}