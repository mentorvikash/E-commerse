import React from 'react'
import Grid from '@mui/material/Grid';
import Product from './product/Product';

const products = [
    { id: 1, name: "Nike Shose", describe: "One of the most popular shose used by runner.", price: "$5" },
    { id: 2, name: "Jack T-Shirt", describe: "Most Comfortable cotton t-shirt that you can use.", price: "$10" },
]

function Products() {
    return (
        <main>
            <Grid container spacing={2}>
                {products.map(item => (
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <Product item={item} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
