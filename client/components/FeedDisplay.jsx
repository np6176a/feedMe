import React, { Component } from 'react'
import { findRandomRestaurant, retrieveLocationParams, retrieveRestaurantsFromGoogle } from '../utlitlies/gmap'

class FeedDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      place: ''
    }
  }
  componentDidMount () {
    // findRandomRestaurant()
    //   .then(restaurant => {
    //     this.setState({place: restaurant})
    //   })
    this.callApi()
      .then(res => this.setState({ place: res.express }))
      .catch(err => console.log(err))
  }

  callApi =  async () => {
    const place = await fetch('http://localhost:5000/api/hello')
    const body = await place.json()

    if (place.status !== 200) throw Error(body.message)

    return body
  }

  render () {

    return (
      <div>{ this.state.place }</div>
    )

  }
}

export default FeedDisplay