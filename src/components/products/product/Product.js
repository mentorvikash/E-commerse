import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { ClassNames } from '@emotion/react'

function Product({item}) {
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
      </CardContent>
    </Card>
  )
}

export default Product