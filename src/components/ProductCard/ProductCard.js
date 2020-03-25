import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink
} from 'reactstrap'

const ProductCard = props => {
  const {name, price, image_link, product_link, description, product_type} = props.product
  
  return(
    <div>
      <Card>
        <CardImg top width="50%" src={image_link} alt={name}></CardImg>
        <CardBody>
          <CardTitle>
            <CardLink href={product_link}>{name}</CardLink>
          </CardTitle>
          <CardSubtitle>${price}</CardSubtitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default ProductCard