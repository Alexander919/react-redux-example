import { initStore } from "./store";

const PRODUCTS = [
    {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
    },
    {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
    },
    {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
    },
    {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
    }
];

export const configureProductsStore = () => {
    const action = {
        TOGGLE_FAV: (curState, productId) => {
            const prodIndex = curState.products.findIndex(
                p => p.id === productId
            );
            const toggledFavStatus = !curState.products[prodIndex].isFavorite;
            const updatedProducts = [...curState.products];
            updatedProducts[prodIndex] = {
                ...curState.products[prodIndex],
                isFavorite: toggledFavStatus
            };
            return { 
                products: updatedProducts,
            }
        }
    };
    initStore(action, { products: PRODUCTS });
};