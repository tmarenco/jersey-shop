import type { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
    cart: CartProduct[],
    getTotalItems: ()=> number,

    getSummaryInformation: () => {
        subTotal: number;
        tax: number;
        total: number;
        itemsInCart: number;
    },

    addProductToCart: ( product: CartProduct ) => void;
    updateProductQuantity: (product: CartProduct, quantity: number) => void;
    removeProduct: (product: CartProduct) => void;
    clearCart: () => void;
}


export const useCartStore = create<State>()(

    persist(
        (set, get) => ({
            cart: [],


            getTotalItems: () => {
                const { cart } = get();
                return cart.reduce( ( total, item ) => total + item.quantity, 0);
            },


            getSummaryInformation: () => {
                const { cart } = get()
                const subTotal = cart.reduce((subTotal, product)=> (product.quantity * product.price) + subTotal, 0);
                const tax = subTotal * 0.15;
                const total = subTotal + tax;
                const itemsInCart = cart.reduce( ( total, item ) => total + item.quantity, 0);

                return {
                    subTotal, tax, total, itemsInCart
                }
            },

            addProductToCart: (product: CartProduct) => {
                const {cart } = get();    
    
                //Check if there is already a product with the same id and size in the cart
                const productInCart = cart.some(
                    (item) => (item.id === product.id && item.size === product.size)
                );
    
                //If there is no product, add it
                if( !productInCart ){
                    set({cart: [ ...cart, product ]});
                    return;
                }
    
                //There is already a product with that same size so i just change the quantity
                const updatedCartProducts = cart.map((item) => {
                    if(item.id === product.id && item.size === product.size){
                        return {...item, quantity: item.quantity + product.quantity}
                    }
    
                    return item;
                })
    
                set({cart: updatedCartProducts });
    
    
            },

            updateProductQuantity:(product: CartProduct, quantity: number) => {

                const { cart } = get();

                const updatedCartProducts = cart.map( item => {
                    if( item.id === product.id && item.size === product.size ){
                        return {...item, quantity: quantity};
                    }
                    return item
                }) 
                set({cart: updatedCartProducts});
            },

            removeProduct: (product: CartProduct) => {
                const { cart } = get();
                const updatedCartProducts = cart.filter(item => item.id !== product.id || item.size !== product.size);
                set({cart: updatedCartProducts});
            },

            clearCart: () => {
                set({cart: []})
            },
        }),{
            name: 'shopping-cart'
        }
    )

)