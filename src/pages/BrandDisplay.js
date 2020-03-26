import React, { useState, useEffect } from 'react'
import {Row, Col} from 'reactstrap'

import MakeupApi from '../api/MakeupApi'
import ProductCard from '../components/ProductCard/ProductCard'

const BrandDisplay = (props) => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    MakeupApi.fetchMakeupByBrandName(props.match.params.brandName)
    .then(jsonResp => setProducts(jsonResp))
  }, [])

  const renderCards = () => {
    return products.map((product, index) => {
      return <Col sm="3"><ProductCard key={index} product={product}/></Col>
    })
  }

  return(
    <div> 
      <Row>{renderCards()}</Row>
    </div>
  )
}

export default BrandDisplay