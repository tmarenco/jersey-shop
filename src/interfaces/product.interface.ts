export interface Product {
    id: string
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    // league: League;
    gender: Gender
}


export interface CartProduct {
    id: string;
    slug: string;
    title: string;
    price: number;
    quantity: number;
    size: Size;
    image: string;
}

export interface ProductImage {
    id: number;
    url: string;
    productId: string;
}

export type Gender = 'men'|'women'|'kid';
export type Size = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type League = 'Premier League'|'Serie A'|'La Liga'|'Bundesliga'|'Ligue One'|'Rest of the World'|'National Teams';