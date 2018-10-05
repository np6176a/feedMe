const fetch = require('node-fetch')

module.exports = (app) => {
  app.post('/find-food', (req, res) => {
    const { lat, lon } = req.body
    const MAP_KEY = process.env.MAP_KEY
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1500&type=restaurant&opennow=true&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBH54jDX4HBGXjyMLxPwqtpajWi0vG6EBk`

    fetch(apiUrl)
      .then(data => {
        res.send({ data })
        console.log(data)
      })
      .catch(error => {
        res.send('Oops Google Error!')
      })
  })
}
