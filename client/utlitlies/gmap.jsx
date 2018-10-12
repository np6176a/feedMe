import axios from 'axios'

export const findRandomRestaurant = () => {
  const loc = retrieveLocationParams()
  // Retrieve Restaurants from Google
  return retrieveRestaurantsFromGoogle(loc)
    .then(data => {
      return pickRandomRestaurant(data)
    })
}

export const retrieveLocationParams = () => {
  const urlString = window.location.href
  const url = new URL(urlString)
  const lat = url.searchParams.get('latitude')
  const lon = url.searchParams.get('longitude')
  return { lat, lon }
}

export const retrieveRestaurantsFromGoogle = ({ lat, lon }) => {
  return axios.post('http://localhost:5000/find-food', { lat, lon })
}

export const pickRandomRestaurant = (data) => {
  return data.data.results[Math.floor(Math.random() * data.data.results.length)]
}
