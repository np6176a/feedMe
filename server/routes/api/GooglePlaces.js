const axios = require('axios')
require('dotenv').config()

module.exports = (app) => {
  app.post('/find-food', (req, res) => {
    const { lat, lon } = req.body
    const MAP_KEY = process.env.MAP_KEY
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1500&type=restaurant&opennow=true&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${MAP_KEY}`
    axios.get(apiUrl)
      .then(data => {
        res.send(data.data)
        console.log(data)
      })
      .catch(error => {
        res.send('Oops Google Error!')
      })
  })
}
