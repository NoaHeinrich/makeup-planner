const URL = "http://makeup-api.herokuapp.com/api/v1/products.json"

const fetchMakeupByBrandName = brandName => {
  return fetch(URL + "?brand=" + brandName)
  .then(resp => resp.json())
}