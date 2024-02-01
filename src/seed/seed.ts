import bcryptjs from 'bcryptjs';

interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    league: string;
    gender: 'men'|'women'|'kid';
}


interface SeedUser {
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'user'
}

type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type ValidLeagues = 'Premier League'|'Serie A'|'La Liga'|'Bundesliga'|'Ligue One'|'Rest of the World'|'National Teams';


interface SeedData {
    users: SeedUser[]
    leagues: string[],
    products: SeedProduct[],
}




export const initialData: SeedData = {


    users: [
        {
            email: 'prueba@gmail.com',
            name: 'Prueba',
            password: bcryptjs.hashSync('123456'),
            role: 'user'
        },
        {
            email: 'leomessi@gmail.com',
            name: 'Leo Messi',
            password: bcryptjs.hashSync('123456'),
            role: 'admin'
        }
    ],

    leagues: [
        'Premier League',
        'Serie A',
        'La Liga',
        'Bundesliga',
        'Ligue One',
        'Rest of the World',
        'National Teams'
    ],
    products: [
        {
            description: "When darkness descends, Miami lights up. Inspired by Magic City's glittering waterfront, this Inter Miami CF away authentic jersey from adidas enchants with pink details and an undulating graphic.",
            images: [
                '1740176-00-A_0_2000.avif',
                '1740176-00-A_1.avif',
            ],
            inStock: 7,
            price: 180,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "mens_inter_miami_away",
            league: 'rest of the world',
            tags: ['jersey', 'messi', 'mls'],
            title: "Men’s Inter Miami Away Authentic Jersey",
            gender: 'men'
        },
        {
            description: "Proud. Passionate. Pink. Showing off a new shade for a new season, this adidas Inter Miami CF authentic jersey stands out in the club's signature home colors. Contributing to the clean, classy design, the team badge and 3 Bar Logo move to the center, while Messi's name and number ooze star quality on the back. Behind those superstar looks, AEROREADY manages moisture for fast-moving soccer.",
            images: [
                '1740507-00-A_0_2000.avif',
                '1740507-00-A_1.avif',
            ],
            inStock: 5,
            price: 180,
            sizes: ['XS','S','M','XL','XXL'],
            slug: "mens_inter_miami_home",
            league: 'rest of the world',
            tags: ['jersey', 'messi', 'mls'],
            title: "Men’s Inter Miami Home Authentic Jersey",
            gender: 'men'
        },
        
        {
            description: "Sometimes the past just nails it. Bringing back the Argentina 1994 Away Jersey, one of soccer history's most recognizable looks. Inspired by the away jersey that Argentina's legends wore in the 1994 World Cup, this soccer jersey has an unmistakable 90s vibe. Its loose fit, engineered 3-Stripes and the flock-printed number 10 recreate a classic down to the smallest details. The vibrant blue backdrop of Argentina's away kits captivates the hearts of soccer fans and retro-style seekers.",
            images: [
                '1740250-00-A_0_2000.avif',
                '1740250-00-A_1.avif'
            ],
            inStock: 10,
            price: 110,
            sizes: ['S','M','L','XL','XXL'],
            slug: "mens_argentina_1994_away",
            league: 'national teams',
            tags: ['jersey', 'argentina'],
            title: "Men's Argentina 1994 Away Jersey",
            gender: 'men'
        },

        {
            description: "They say lightning never strikes twice. And 20 years on, the Gunners remain the only club to finish an English top-flight soccer season undefeated. The Arsenal 23/24 Home Jersey celebrates the team's unique anniversary with lightning bolts and gold details. Created for loyal club supporters, the jersey features sweat-wicking AEROREADY technology to keep you feeling dry, while a woven badge shows off your team pride. Made with 100% recycled materials, this product represents just one of our solutions to help end plastic waste.",
            images: [
                '1740280-00-A_0_2000.avif',
                '1740280-00-A_1.avif',
            ],
            inStock: 50,
            price: 100,
            sizes: ['XS','S','M','L'],
            slug: "men_arsenal_home_jersey",
            league: 'premier league',
            tags: ['jersey', 'premier-league', 'arsenal'],
            title: "Men's Arsenal Home Jersey",
            gender: 'men'
        },
        {
            description: "Tradition gets a golden touch in the Real Madrid 23/24 Home Jersey. Keeping a crisp all-white base, the striking kit continues the thread of powerful design, delivering a sleek jersey steeped in legendary football history. With a nod to older kits, gold details are re-introduced and emphasized by elegant navy framing. An allover print is a subtle update to the classic white color, complemented by a 'designed-for-fans' approach that keeps the fit and feel ready for stylish everyday wear. Sweat-wicking AEROREADY helps you feel comfortable on the field or in the crowd — while the embroidered crest and '¡Hala Madrid!' on the neck brings the club's winning mentality to life.",
            images: [
                '1741416-00-A_0_2000.avif',
                '1741416-00-A_1.avif',
            ],
            inStock: 50,
            price: 100,
            sizes: ['M','L','XL','XXL'],
            slug: "men_real_madrid_home_jersey",
            league: 'la liga',
            tags: ['jersey', 'real-madrid', 'la-liga'],
            title: "Men's Real Madrid Home Jersey",
            gender: 'men'
        },
        {
            description: "Like club, like city. Show your team's colors with pride in the Manchester United 23/24 Home Jersey. The jersey forms a cast iron link to Manchester's enduring influence around the globe. Taking design elements from a nearby Industrial Revolution-era bridge, it displays a repeating Lancashire Rose-inspired geometric pattern on the front. Sweat-wicking AEROREADY and lightweight team details make it ideal for the pitch — whether you're gearing up for an international match or your local 5-a-side.",
            images: [
                '7654393-00-A_2_2000.avif',
                '7654393-00-A_3.avif',
            ],
            inStock: 0,
            price: 100,
            sizes: ['M','L','XL','XXL'],
            slug: "men_manchester_united_home_jersey",
            league: 'premier league',
            tags: ['jersey', 'manchester-united', 'premier-league'],
            title: "Men's Manchester United Home Jersey",
            gender: 'men'
        },
        {
            description: "A century ago, vertical stripes were a familiar addition to Manchester United away shirts. For the 23/24 season, adidas dipped into the club's DNA to produce an authentic soccer jersey with a design that looks the part. The Manchester United 23/24 Away Authentic Jersey was created to perform. The lightweight shirt features HEAT.RDY that maximizes airflow so you can feel cool.. Standing out over those stripes, a heat-applied club badge signals your support for the legendary team. This garment is made with a yarn which contains 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines — preventing it from polluting our ocean",
            images: [
                '1703767-00-A_0_2000.avif',
                '1703767-00-A_1.avif',
            ],
            inStock: 15,
            price: 150,
            sizes: ['S','M','L','XL'],
            slug: "men_manchester_united_away_jersey",
            league: 'premier league',
            tags: ['jersey', 'manchester-united', 'premier-league'],
            title: "Men's Manchester United Away Authentic Jersey",
            gender: 'men'
        },
        {
            description: "A modern reinterpretation of the legendary club's first kit, the FC Bayern Home Authentic Jersey pays tribute to the great players of the past. The first full red and white kit for 30 years, it brings a nostalgic yet fresh twist to a team famed for its football consistency. Cut for a close fit, the jersey is crafted entirely from 100% recycled polyester jacquard and finished with a premium ribbed crewneck. Behind the scenes, HEAT.RDY maximizes airflow so you can feel cool — whether you're headed for the grandstands or the pitch. Flash your homegrown pride thanks to the embossed 'FC Bayern München' on ribbed cuffs and back, and the heat-applied crest.",
            images: [
                '1700280-00-A_0_2000.avif',
                '1700280-00-A_1.avif',
            ],
            inStock: 17,
            price: 150,
            sizes: ['XS','S','XL','XXL'],
            slug: "men_bayern_munich_home_jersey",
            league: 'bundesliga',
            tags: ['jersey', 'bundesliga', 'bayern-munich'],
            title: "Men's Bayern Munich Home Authentic Jersey",
            gender: 'men'
        },
        {
            description: "Community. Loyalty. Innovation. The legendary Ajax team began their march towards greatness in the '70s with a revolutionary style of football that still influences the sport five decades on. Inspired by the fluid, geometric architecture of the legendary club's neighborhood, the Ajax Amsterdam 23/24 Away Jersey is a reminder of home on away days. Behind the eye-catching design, marshmallow-soft fabric and sweat-wicking AEROREADY ensure ultimate comfort both on the pitch and in the stands. Show love for your city thanks to the subtle 'XXX' sign off at the back, and pride in your team with the Ajax woven crest.",
            images: [
                '8764734-00-A_0_2000.avif',
                '8764734-00-A_1.avif',
            ],
            inStock: 12,
            price: 100,
            sizes: ['XS','S','M'],
            slug: "men_ajax_away_jersey",
            league: 'rest of the world',
            tags: ['jersey', 'ajax'],
            title: "Men's Ajax Away Jersey",
            gender: 'men'
        },
        {
            description: "Calling all Juve fans. Nostalgic style meets modern sports technology in the Juventus 23/24 Home Jersey. Rooted in club heritage, the jersey takes its inspiration from vintage black and white kits. An embroidered club badge and flashes of yellow complete the standout look. Crafted from lightweight recycled polyester, the jersey features sweat-wicking AEROREADY fabric and mesh inserts at the side for ultimate comfort on-and-off the pitch. The result? Over 120 years of team pride for one of the world's greatest teams stitched into an authentic, high-performance jersey.",
            images: [
                '7652426-00-A_0_2000.avif',
                '7652426-00-A_1.avif',
            ],
            inStock: 5,
            price: 100,
            sizes: ['XS','S'],
            slug: "men_juventus_home_jersey",
            league: 'serie a',
            tags: ['jersey', 'juventus', 'serie-a'],
            title: "Men's Juventus Home Jersey",
            gender: 'men'
        },
        {
            description: "Saluting Los Millonarios' soccer fortress on its 85th anniversary. Mimicking the skewed dimensions of the red sashes visible when El Monumental lies empty, this adidas River Plate home jersey pays tribute to the club's beloved stadium. Created for comfort, it combines moisture-wicking AEROREADY and breathable mesh panels. A woven badge and 'Grandeza' signoff build on that club pride. Made with 100% recycled materials, this product represents just one of our solutions to help end plastic waste.",
            images: [
                '8528839-00-A_0_2000.avif',
                '8528839-00-A_2.avif',
            ],
            inStock: 2,
            price: 100,
            sizes: ['XS','S','M'],
            slug: "men_river_plate_home_jersey",
            league: 'rest of the world',
            tags: ['jersey', 'river-plate'],
            title: "Men’s River Plate Home Jersey",
            gender: 'men'
        },
        {
            description: "The F.C. Barcelona 2023/24 Home kit honours the 30-year journey of the Women's squad being incorporated into the club. The crest has a hidden diamond shape that was historically used by the Women's team, and the classic stripes have a diamond pattern along the edges. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team.",
            images: [
                '1549268-00-A_0_2000.png',
                '1549268-00-A_2.png',
            ],
            inStock: 82,
            price: 79.95,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_barcelona_home_jersey",
            league: 'la liga',
            tags: ['jersey', 'barcelona', 'la-liga'],
            title: "Men's Barcelona Home Jersey",
            gender: 'men'
        },
        {
            description: "Packed with details, the Liverpool F.C. 2023/24 shirt remembers the 97 people who tragically died in the Hillsborough Disaster. A 97 set between two eternal flames resides on the inner pride, while white accents on the collar and sleeves nod to a shirt worn by the legendary '74 squad. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team.",
            images: [
                '9877034-00-A_0_2000.png',
                '9877034-00-A_2.png',
            ],
            inStock: 24,
            price: 79.95,
            sizes: ['XL','XXL'],
            slug: "men_liverpool_home_jersey",
            league: 'premier league',
            tags: ['jersey', 'liverpool', 'premier-league'],
            title: "Men's Liverpool Home Jersey",
            gender: 'men'
        },
        {
            description: "Who doesn't love an early 2000s throwback? Coming to you all the way from 2002, the 2023/24 Chelsea Away kit mixes classic colours and an all-over digital graphic with blue accents on the collar and sleeves. Inside, you will find a hidden London Chelsea F.C. design on the inner pride. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team.",
            images: [
                '1633802-00-A_0_2000.jpg',
                '1633802-00-A_2.jpg',
            ],
            inStock: 5,
            price: 79.95,
            sizes: ['XS','S','XXL'],
            slug: "men_chelsea_away_jersey",
            league: 'premier league',
            tags: ['jersey', 'chelsea', 'premier-league'],
            title: "Men's Chelsea Away Jersey",
            gender: 'men'
        },
        {
            description: "The 2023/24 Chelsea Home kit brings the glamour of King's Road onto the pitch with an all-over blue base and luxurious gold accents. Inside, you will find a hidden London Chelsea F.C. design on the inner pride. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team.",
            images: [
                '7654399-00-A_0_2000.png',
                '7654399-00-A_1.png',
            ],
            inStock: 150,
            price: 79.95,
            sizes: ['M','L'],
            slug: "men_chelsea_home_jersey",
            league: 'premier league',
            tags: ['jersey', 'chelsea', 'premier-league'],
            title: "Men's Chelsea Home Jersey",
            gender: 'men'
        },
        {
            description: "Using natural tones, 100% recycled polyester and a new pattern designed to help reduce material waste, the Chelsea F.C. 2023/24 Third shirt was created with sustainability in mind. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by the Blues.",
            images: [
                '7652410-00-A_0.png',
                '7652410-00-A_1_2000.png',
            ],
            inStock: 10,
            price: 79.95,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_chelsea_third_jersey",
            league: 'premier league',
            tags: ['jersey', 'chelsea', 'premier-league'],
            title: "Men's Chelsea Third Jersey",
            gender: 'men'
        },
        {
            description: "The inspiration for the PSG 2023/24 Home kit comes from La Ville Lumiere (City of Light). The mostly blue shirt has an off-centre red graphic fading to blue, mimicking the way the iconic lights of Paris fade into the night sky. The inner pride features the team name, while the outer pride features the French flag. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team.",
            images: [
                '8764600-00-A_0_2000.png',
                '8764600-00-A_2.png',
            ],
            inStock: 34,
            price: 79.95,
            sizes: ['XS','S','M','L'],
            slug: "men_psg_home_jersey",
            league: 'ligue one',
            tags: ['jersey', 'psg', 'ligue-one'],
            title: "Men's Paris Saint-Germain Home Jersey",
            gender: 'men'
        },
        {
            description: "Using natural tones, 100% recycled polyester and a new pattern designed to help reduce material waste, the Liverpool F.C. 2023/24 Third shirt was created with sustainability in mind. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by the Reds.",
            images: [
                '8764813-00-A_0_2000.jpg',
                '8764813-00-A_1.jpg',
            ],
            inStock: 15,
            price: 79.95,
            sizes: ['XL','XXL'],
            slug: "men_liverpool_third_jersey",
            league: 'premier league',
            tags: ['jersey', 'liverpool', 'premier-league'],
            title: "Men's Liverpool Third Jersey",
            gender: 'men'
        },
        {
            description: "The black and blue stripes of Inter Milan get an update for the 2023/24 Home Shirt. The iconic stripes have a digital mosaic pattern, celebrating both the classic feel and modern architecture of the ancient city. Hidden inner details commemorate the connection between Inter Milan and the city they call home. Our Match collection pairs authentic design details with lightweight, quick-drying technology to help keep the world's biggest football stars cool and comfortable on the pitch.",
            images: [
                '8529198-00-A_0_2000.png',
                '8529198-00-A_1.png',
            ],
            inStock: 12,
            price: 124.99,
            sizes: ['XS','XXL'],
            slug: "men_inter_milan_home_jersey",
            league: 'serie a',
            tags: ['jersey', 'inter-milan', 'serie-a'],
            title: "Men's Inter Milan Home Authentic Jersey",
            gender: 'men'
        },
        {
            description: "The Tottenham Hotspur 2023/24 Home shirt builds on more than a century of tradition to update the iconic kit that helped this team earn the nickname the Lilywhites. An all-over line-work pattern inspired by the borough's vibrant music scene and streetwear culture adds fresh energy to the Spurs' classic white. (Of course, we kept the white.) Because even after 128 years, some things just don't need changing. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team.",
            images: [
                '1740245-00-A_0_2000.png',
                '1740245-00-A_1.png',
            ],
            inStock: 10,
            price: 79.95,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_tottenham_home_jersey",
            league: 'premier league',
            tags: ['jersey', 'tottenham', 'premier-league'],
            title: "Men's Tottenham Home Jersey",
            gender: 'men'
        },
        {
            description: "Celebrating 120 years of Atlético Madrid. The 2023/24 Home shirt uses the classic red and white stripes meshed with an upwards-pointing chevron, as well as a red overall pattern fading from dark to light as you move up the shirt, celebrating the growth of both the city and the club over the last 120 years. The inner pride reads '120', honouring the long and legendary history of Atléti. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team.",
            images: [
                '1740051-00-A_0_2000.png',
                '1740051-00-A_1.png',
            ],
            inStock: 10,
            price: 79.95,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_atletico_madrid_home_jersey",
            league: 'la liga',
            tags: ['jersey', 'atletico-madrid', 'la-liga'],
            title: "Men's Atletico Madrid Home Jersey",
            gender: 'men'
        },
        {
            description: "Welcome to Ashton New Road, where we put the City in Manchester. With the 2023/24 Home Kit, we celebrate the Etihad Stadium and all those who call it home. The graphics are drawn from the iconic features of the stadium and inspired by the jersey worn during the inaugural season at the new ground, with accents and details that mark the 20th anniversary of City at the Etihad. ",
            images: [
                '1741111-00-A_0_2000.avif',
                '1741111-00-A_1.avif',
            ],
            inStock: 100,
            price: 95,
            sizes: ['XS','L','XL','XXL'],
            slug: "men_manchester_city_home_jersey",
            league: 'premier league',
            tags: ['jersey', 'manchester-city', 'premier-league'],
            title: "Men's Manchester City Home Jersey",
            gender: 'men'
        },
        {
            description: "M is for Milan, the club and the city. You can’t separate AC Milan from Milan. So, with the 2023/24 Home Jersey, we bring the two even closer together. The signature red and black stripes are transformed into a completely new repeat graphic drawn from the letter M to celebrate the club, the city, and their role at the heart of a community that’s constantly evolving, constantly moving things on.",
            images: [
                '1740140-00-A_0_2000.avif',
                '1740140-00-A_1.avif',
            ],
            inStock: 7,
            price: 95,
            sizes: ['XS','S','M'],
            slug: "men_milan_home_jersey",
            league: 'serie a',
            tags: ['jersey', 'ac-milan', 'serie-a'],
            title: "Men's AC Milan Home Jersey",
            gender: 'men'
        },
        {
            description: "BVB fans, this one's for you – and by you. The 2023/24 Home Jersey is the result of a fan design contest organized by PUMA and BVB, our way of showing love to the most passionate fans in football. After receiving more than 15,000 submissions from all over the world, a panel around team captain Marco Reus and club legend Dedê shortlisted nine designs. Finally, the winner was chosen by fans through a public vote. The jersey features a silhouette of the club’s home, the famed SIGNAL IDUNA PARK, in classic black and yellow, taking the idea of a home jersey to a whole new level.",
            images: [
                '1740145-00-A_2_2000.avif',
                '1740145-00-A_1.avif',
            ],
            inStock: 15,
            price: 95,
            sizes: ['XS','S','M','L'],
            slug: "men_borussia_dortmund_home_jersey",
            league: 'bundesliga',
            tags: ['jersey', 'bundesliga', 'borussia-dortmund'],
            title: "Men's Borusia Dortmund Home Jersey",
            gender: 'men'
        },
        {
            description: "Proud. Passionate. Pink. Showing off a new shade for a new season, this adidas Inter Miami CF jersey stands out in the club's signature home colors. Contributing to the clean, classy design, the team badge and 3 Bar Logo move to the center, while Messi's name and number ooze star quality on the back. Behind those superstar looks, AEROREADY wicks moisture to keep soccer fans comfortable.",
            images: [
                '1740535-00-A_0_2000.avif',
                '1740535-00-A_1.avif',
            ],
            inStock: 85,
            price: 130,
            sizes: ['XS','S','M'],
            slug: "women_inter_miami_home_jersey",
            league: 'rest of the world',
            tags: ['jersey', 'inter-miami', 'mls', 'messi'],
            title: "Women's Inter Miami Messi Home Jersey",
            gender: 'women'
        },
        {
            description: "When darkness descends, Miami lights up. Inspired by Magic City's glittering waterfront, this adidas Inter Miami CF away jersey enchants with pink details and an undulating graphic. Created to keep fans comfortable, it combines smooth fabric and moisture-wicking AEROREADY. On the back, Messi's name and famous number conjure images of spellbinding soccer.",
            images: [
                '1740226-00-A_0_2000.avif',
                '1740226-00-A_1.avif',
            ],
            inStock: 10,
            price: 120,
            sizes: ['XS','S','M','XXL'],
            slug: "women_inter_miami_away_jersey",
            league: 'rest of the world',
            tags: ['jersey', 'inter-miami', 'mls', 'messi'],
            title: "Women's Inter Miami Messi Away Jersey",
            gender: 'women'
        },
        {
            description: "Los Blancos sophistication. Soccer elegance. It's hard to describe, but you know it when you see it. And Real Madrid supporters will be more familiar with it than most. A stylish look for the road. A complement to the club's sparkling away performances, this adidas third jersey keeps things classy with a black base, carbon 3-Stripes and a golden 'RMCF' embroidered into the collar.",
            images: [
                '1740260-00-A_0_2000.avif',
                '1740260-00-A_1.avif',
            ],
            inStock: 9,
            price: 100,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_real_madrid_third_jersey",
            league: 'la liga',
            tags: ['jersey', 'la-liga', 'real-madrid'],
            title: "Women's Real Madrid Third Jersey",
            gender: 'women'
        },
        {
            description: "From its sun-soaked north to its ice-cold south, Argentina is a nation flowing with natural beauty. Reflecting the country's wide array of rugged landscapes and vibrant vistas, the colors on this adidas away jersey ensure it catches the eye when you're supporting your team. Created to keep soccer fans comfortable and proud, it includes moisture-wicking AEROREADY and a woven team badge.",
            images: [
                '1740290-00-A_0_2000.avif',
                '1740290-00-A_1.avif',
            ],
            inStock: 10,
            price: 63,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_argentina_away_jersey",
            league: 'national teams',
            tags: ['jersey', 'argentina'],
            title: "Women's Argentina Away Jersey",
            gender: 'women'
        },
        {
            description: "Cheer on the Giallorossi in true Roman style. This AS Roma home jersey is made to move with you. AEROREADY fabric keeps you dry through the most heart-pounding moments of the match. Embroidered club badge and laid-on 3-Stripes on display your allegiance. Comfortable tricot and ribbed cuffs ensure you'll stay focused on the pitch, not your clothes.",
            images: [
                '1741441-00-A_0_2000.avif',
                '1741441-00-A_1.avif',
            ],
            inStock: 0,
            price: 100,
            sizes: ['XS','S'],
            slug: "women_roma_home_jersey",
            league: 'serie a',
            tags: ['jersey', 'as-roma', 'serie-a'],
            title: "Women's AS Roma Home Jersey",
            gender: 'women'
        },
        {
            description: "Using natural tones, 100% recycled polyester and a new pattern designed to help reduce material waste, the F.C. Barcelona 2023/24 Third shirt was created with sustainability in mind. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by Barça.",
            images: [
                '8765090-00-A_0_2000.png',
                '8765090-00-A_1.png',
            ],
            inStock: 30,
            price: 79.95,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_barcelona_third_jersey",
            league: 'la liga',
            tags: ['jersey', 'barcelona', 'la-liga'],
            title: "Women's Barcelona Third Jersey",
            gender: 'women'
        },
        {
            description: "Our designers reached into the archives to design the Liverpool F.C. 2023/24 Away shirt, drawing inspiration from a colour-blocked kit first released in '95. Digitised green graphics add a modern look, while a graphic on the inner pride pays tribute to the 97 people who tragically died in the Hillsborough Disaster. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team.",
            images: [
                '8765100-00-A_0_2000.png',
                '8765100-00-A_1.png',
            ],
            inStock: 16,
            price: 63.99,
            sizes: ['XS','S','L','XL','XXL'],
            slug: "women_liverpool_away_jersey",
            league: 'premier league',
            tags: ['jersey', 'liverpool', 'premier-league'],
            title: "Women's Liverpool Away Jersey",
            gender: 'women'
        },
        {
            description: "Using natural tones, 100% recycled polyester fibres and a new pattern designed to help reduce material waste, the Tottenham 2023/24 Third shirt was created with sustainability in mind. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by the Spurs.",
            images: [
                '8765120-00-A_0_2000.png',
                '8765120-00-A_1.jpg',
            ],
            inStock: 18,
            price: 84.99,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_tottenham_third_jersey",
            league: 'premier league',
            tags: ['jersey', 'tottenham', 'jersey'],
            title: "Women's Tottenham Third Jersey",
            gender: 'women'
        },
        {
            description: "The inspiration for the PSG 2023/24 Away kit comes from La Ville Lumiere (City of Light). The white shirt features a graphic fading from red to blue, mimicking the way the iconic lights of Paris fade into the night sky. The inner pride features the team name, while the outer pride features the French flag. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team.",
            images: [
                '8765115-00-A_0_2000.png',
                '8765115-00-A_1.png',
            ],
            inStock: 5,
            price: 63.99,
            sizes: ['XL','XXL'],
            slug: "women_psg_away_jersey",
            league: 'ligue one',
            tags: ['jersey', 'ligue-one', 'psg'],
            title: "Women's Paris Saint-Germain Away Jersey",
            gender: 'women'
        },
        {
            description: "Yes, Barcelona has a white kit. No, this isn't a mistake. The 2023/24 Away shirt is inspired by the 1978 white kit used by the club and pays homage to greats of the game. The crest on the shirt is the same as the one used in '78, and the ribbed sleeve details honour the legendary captain of that squad. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team.",
            images: [
                '1549275-00-A_0_2000.png',
                '1549275-00-A_1.png',
            ],
            inStock: 16,
            price: 79.95,
            sizes: ['S','M'],
            slug: "women_barcelona_away_jersey",
            league: 'la liga',
            tags: ['jersey', 'la-liga', 'barcelona'],
            title: "Women's Barcelona Away Jersey",
            gender: 'women'
        },
        {
            description: "Celebrating 120 years of Atlético Madrid. The 2023/24 Away kit takes inspiration from their 1st-ever squad and their 1/2-blue/1/2-white shirt, even featuring the original club badge used from 1903–1911. The inner pride reads '120', honouring the long and legendary history of Atléti. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team.",
            images: [
                '9877040-00-A_0_2000.png',
                '9877040-00-A_1.png',
            ],
            inStock: 10,
            price: 84.99,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_atletico_madrid_away_jersey",
            league: 'la liga',
            tags: ['jersey', 'la-liga', 'atletico-madrid'],
            title: "Women’s Atletico Madrid Away Jersey",
            gender: 'women'
        },
        {
            description: "Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team.",
            images: [
                '5645680-00-A_0_2000.png',
                '5645680-00-A_3.png',
            ],
            inStock: 3,
            price: 79.95,
            sizes: ['M','L','XL','XXL'],
            slug: "women_eintracht_frankfurt_home_jersey",
            league: 'bundesliga',
            tags: ['jersey', 'eintracht-frankfurt', 'bundesliga'],
            title: "Women's Eintracht Frankfurt Home Jersey",
            gender: 'women'
        },
        {
            description: "There's no place like home, but Gooners will travel far and wide to follow the Arsenal to glory — and whether it's a pilgrimage to the Emirates Stadium or an away overseas, match days are as much about the journey as they are about the beautiful game.",
            images: [
                '1740270-00-A_0_2000.avif',
                '1740270-00-A_1.avif',
            ],
            inStock: 162,
            price: 100,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_arsenal_away_jersey",
            league: 'premier league',
            tags: ['jersey', 'arsenal', 'premier-league'],
            title: "Women's Arsenal Away Jersey",
            gender: 'women'
        },
        {
            description: "Proud. Passionate. Pink. Showing off a new shade for a new season, this juniors' adidas Inter Miami CF jersey stands out in the club's signature home colors. Contributing to the clean, classy design, the team badge and 3 Bar Logo move to the center, while Messi's name and number ooze star quality on the back. Behind those superstar looks, AEROREADY wicks moisture to keep soccer fans comfortable",
            images: [
                '1742694-00-A_1_2000.avif',
                '1742694-00-A_3.avif',
            ],
            inStock: 110,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_inter_miami_home_jersey",
            league: 'rest of the world',
            tags: ['jersey', 'inter-miami', 'messi'],
            title: "Kids Inter Miami Messi Home Jersey",
            gender: 'kid'
        },
        {
            description: "Celebrate 50 years of iconic Red Devil style. This Manchester United juniors' jersey is built for the next generation of champions. Blaze down the pitch in a design inspired by the latest streetwear trends. An iconic silhouette, blocking details and framing lines pay homage to the club's iconic style. Stay dry through extra time and penalties thanks to moisture-wicking AEROREADY. An embroidered logo and laid-on stripes highlight your allegiance to one of the world's most successful soccer clubs. Play like the greats in a jersey fit for future legends.",
            images: [
                '8529312-00-A_0_2000.avif',
                '8529312-00-A_1.avif',
            ],
            inStock: 0,
            price: 80,
            sizes: ['XS','S','M'],
            slug: "kids_manchester_united_third_jersey",
            league: 'premier league',
            tags: ['jersey', 'manchester-united', 'premier-league'],
            title: "Kids Manchester United Third Jersey",
            gender: 'kid'
        },
        {
            description: "The pride of North London, now for your wardrobe. This Arsenal third jersey is made to move with die-hard Gunners during intense play. Stay comfortable yet styled for the streets with laid-on 3-Stripes and an embroidered team crest. Display your passion for the club that lives and breathes football.",
            images: [
                '8529342-00-A_0_2000.avif',
                '8529342-00-A_1.avif',
            ],
            inStock: 10,
            price: 80,
            sizes: ['XS','S','M'],
            slug: "kids_arsenal_third_jersey",
            league: 'premier league',
            tags: ['jersey', 'arsenal', 'premier-league'],
            title: "Kids Arsenal Third Jersey",
            gender: 'kid'
        },
        {
            description: "Forged from the DNA of Juventus and the club's home city. This juniors' adidas soccer jersey is dressed in the grey tones made famous by the club's greatest keeper and created with structured doubleknit fabric inspired by Turin's industrial architecture. Working tirelessly in the background, AEROREADY wicks moisture to keep you comfortable off the pitch.",
            images: [
                '8529354-00-A_0_2000.avif',
                '8529354-00-A_1.avif',
            ],
            inStock: 10,
            price: 80,
            sizes: ['XS','S','M'],
            slug: "kids_juventus_third_jersey",
            league: 'serie a',
            tags: ['jersey', 'serie-a', 'juventus'],
            title: "Kids Juventus Third Jersey",
            gender: 'kid'
        },
        {
            description: "A tribute to the Amstergems. Ajax Amsterdam's youth academy is renowned for unearthing diamonds on an annual basis. Celebrating the beautiful game's finest producers of soccer talent, this juniors' adidas third jersey stands out with a repeating jewel-inspired graphic and woven badge. Hidden beneath the surface, moisture-wicking AEROREADY ensures you sparkle on and off the pitch.",
            images: [
                '7652465-00-A_0_2000.avif',
                '7652465-00-A_1.avif',
            ],
            inStock: 10,
            price: 80,
            sizes: ['XS','S','M'],
            slug: "kids_ajax_third_jersey",
            league: 'rest of the world',
            tags: ['jersey', 'ajax'],
            title: "Kids Ajax Third Jersey",
            gender: 'kid'
        },
        {
            description: "A monument to the Eternal City. When designing AS Roma's away kit, adidas took inspiration from the earthy tones and intricate patterning of the ancient Roman architecture that makes the city so unique. Created for young fans, this juniors' jersey includes moisture-wicking AEROREADY for comfort. An embroidered crest shows your soccer pride will stand the test of time.",
            images: [
                '100042307_0_2000.avif',
                '100042307_alt_2000.avif',
            ],
            inStock: 10,
            price: 80,
            sizes: ['XS','S','M'],
            slug: "kids_roma_away_jersey",
            league: 'serie a',
            tags: ['jersey', 'serie-a', 'roma'],
            title: "Kids AS Roma Away Jersey",
            gender: 'kid'
        },
        {
            description: "Icons collide with the PSG 2023/24 Fourth Shirt. One of the most iconic clubs in the world meets one of the most recognisable patterns in streetwear—Jordan elephant print—to create a shirt that transcends the game. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by Les Parisiens.",
            images: [
                '1473809-00-A_1_2000.png',
                '1473809-00-A_alt.png',
            ],
            inStock: 16,
            price: 59.99,
            sizes: ['XS','S'],
            slug: "kids_psg_fourth_jersey",
            league: 'ligue one',
            tags: ['jersey', 'ligue-one', 'psg'],
            title: "Kids Paris Saint-Germain Fourth Jersey",
            gender: 'kid'
        },
        {
            description: "Icons collide with the 2023/24 PSG Third Shirt. One of the most iconic clubs in the world meets one of the most recognisable patterns in streetwear—Jordan elephant print—to create a shirt that transcends the game. On the inside, you'll find a hidden Paris logo with the Jumpman design included in the middle. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by Les Parisiens.",
            images: [
                '8529387-00-A_0_2000.png',
                '8529387-00-A_1.png',
            ],
            inStock: 0,
            price: 59.95,
            sizes: ['XS','S'],
            slug: "kids_psg_third_jersey",
            league: 'ligue one',
            tags: ['jersey', 'psg', 'ligue-one'],
            title: "Kids Paris Saint-Germain Third Jersey",
            gender: 'kid'
        },
        {
            description: "The 2023/24 Chelsea Home Shirt brings the glamour of King's Road onto the pitch with an all-over blue base and luxurious gold accents. On the inside of the shirt, you'll find a hidden London Chelsea F.C. design. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team.",
            images: [
                '1473834-00-A_2_2000.png',
                '1473829-00-A_2_2000.png',
            ],
            inStock: 10,
            price: 59.95,
            sizes: ['XS','S'],
            slug: "kids_chelsea-home_jersey",
            league: 'premier league',
            tags: ['jersey', 'chelsea', 'premier-league'],
            title: "Kids Chelsea Home Jersey",
            gender: 'kid'
        },
        {
            description: "Inspired by Tottenham's vibrant music scene and streetwear culture, the Tottenham Hotspur 2023/24 Away Shirt pairs a classic polo style with modern details. A dark blue base is energised with purple accents and a holographic club crest. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a match-ready look inspired by your favourite team.",
            images: [
                '1742702-00-A_0_2000.png',
                '1742702-00-A_1.png',
            ],
            inStock: 10,
            price: 59.95,
            sizes: ['XS','S','M'],
            slug: "kids_tottenham_away_jersey",
            league: 'premier league',
            tags: ['jersey', 'tottenham', 'premier-league'],
            title: "Kids Tottenham Away Jersey",
            gender: 'kid'
        },
        {
            description: "Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by your favourite team.",
            images: [
                '1506211-00-A_0_2000.png',
                '1506211-00-A_1_2000.png',
            ],
            inStock: 10,
            price: 59.95,
            sizes: ['XS','S','M'],
            slug: "kids_wolfsburg_home_jersey",
            league: 'bundesliga',
            tags: ['jersey', 'bundesliga', 'wolfsburg'],
            title: "Kids VfL Wolfsburg Home Jersey",
            gender: 'kid'
        },
    ]
}