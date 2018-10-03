import axios from 'axios'

export const findRandomRestaurant = async () => {
  // Retrieve lat - lng from params\
  const { lat, lon } = retreiveLocationParams()
  // Retrieve Restaurants from Google
  const result = await retrieveRestaurantsFromGoogle(lat, lon)
  // Pick a random restaurnt
  return pickRandomRestaurant(result)

}

export const retrieveLocationParams = () => {
  const urlString = window.location.href
  const url = new URL(urlString)
  const lat = url.searchParams.get('lat')
  const lon = url.searchParams.get('lon')
  return { lat, lon }
}

export const retrieveRestaurantsFromGoogle = (lat, lon)=> {
  const MAP_KEY = process.env.REACT_APP_MAP_KEY
  const getURL ='https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + lon + '&radius=1500&type=restaurant&opennow=true&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=' + MAP_KEY

  return axios.get(getURL)
}

const pickRandomRestaurant = (result) => {
  console.log(result)
  return 'Still Testing'
}