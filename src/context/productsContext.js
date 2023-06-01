import React from "react";
import { useState } from "react";

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

]

export const ProductsContext = React.createContext({
    products: [],
    toggleFav: () => {}
});

export default props => {
    const [products, setProducts] = useState(PRODUCTS);

    const toggleFav = productId => {
        setProducts(curProducts => {
            const prodIndex = curProducts.findIndex(
                p => p.id === productId
            );
            const toggledFavStatus = !curProducts[prodIndex].isFavorite;
            const updatedProducts = [...curProducts];
            updatedProducts[prodIndex] = {
                ...curProducts[prodIndex],
                isFavorite: toggledFavStatus
            };
            return updatedProducts;
        });
    };

    return (
        <ProductsContext.Provider value={
            { 
                products,
                toggleFav
            }
        }>
            {props.children}
        </ProductsContext.Provider>
    )
}