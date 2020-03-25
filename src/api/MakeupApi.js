const URL = `http://makeup-api.herokuapp.com/api/v1/products.json`

const fetchMakeupByBrandName = brandName => {
  return fetch(`${URL}?brand=${brandName}`)
  .then(resp => resp.json())
}

const fetchMakeupByCategory = category => {
  return fetch(`${URL}?brand=${category}`)
  .then(resp => resp.json())
}

export default {
  fetchMakeupByBrandName,
  fetchMakeupByCategory
}