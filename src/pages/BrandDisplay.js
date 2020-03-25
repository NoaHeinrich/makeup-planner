import React, { useState, useEffect } from 'react'
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
      return <ProductCard key={index} product={product}/>
    })
  }

  return(
    <div>
      {renderCards()}
    </div>
  )
}

export default BrandDisplay