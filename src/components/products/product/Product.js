import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import useStyle from './style'

function Product({item}) {  
  const newclass = useStyle();
  return (
    <Card className={newclass.root} >
    <CardMedia className={newclass.media} image='' title={item.name}></CardMedia>
      <CardContent>
        <div className={newclass.cardContent}>
          <Typography varient='h5' gutterBottom >
          {item.name}
          </Typography>
          <Typography varient='h5'>
          {item.price}
          </Typography>
        </div>
        <Typography varient="h2" color="textSecondary">{item.describe}</Typography>
      </CardContent>
      <CardActions disableSpacing className={newclass.cardActions} >
      <IconButton aria-label='Add to Cart'>
      <AddShoppingCart />
      </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product