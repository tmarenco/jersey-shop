import { initialData } from "./seed";
import prisma from '../lib/prisma';
import { countries } from "./seed-countries";


async function main(){


    // 1. Delete previous registries
        await prisma.orderAddress.deleteMany();
        await prisma.orderItem.deleteMany();
        await prisma.order.deleteMany();
        await prisma.userAddress.deleteMany();
        await prisma.user.deleteMany();
        await prisma.country.deleteMany()
        await prisma.productImage.deleteMany();
        await prisma.product.deleteMany();
        await prisma.league.deleteMany();


    // 2. Obtains initialData
    const {leagues, products, users } = initialData;

    // 3. Inserts initial users
    await prisma.user.createMany({
        data: users
    })

    // 4. Inserts initial countries
    await prisma.country.createMany({
        data: countries
    });

    // 5. Inserts intiial leagues 
    const leaguesData = leagues.map( league => ({
        name: league
    }))
    
    await prisma.league.createMany({
        data: leaguesData
    });


    const leaguesDB = await prisma.league.findMany();

    const leaguesMap = leaguesDB.reduce( (map, league) => {
        map[league.name.toLowerCase()] = league.id;
        return map;
    }, {} as Record<string, string>)


    // 6. Inserts products associating them with the league

    products.forEach( async(product) => {

        const { league, images, ...rest } = product;

        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                leagueId: leaguesMap[league]
            }
        })

        // 7. Inserts products images

        const imagesData = images.map( image => ({
            url: image,
            productId: dbProduct.id
        }))

        await prisma.productImage.createMany({
            data: imagesData
        })

    })


    console.log('Seed excecuted')
}



(() => {
    if (process.env.NODE_ENV === 'production') return;
    main();
})();