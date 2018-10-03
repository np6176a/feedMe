import React, { Component } from 'react'
import { findRandomRestaurant, retrieveLocationParams, retrieveRestaurantsFromGoogle } from '../utlitlies/gmap'

class FeedDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      place: null
    }
  }

  componentDidMount () {
    findRandomRestaurant()
      .then(restaurant => {
        this.setState({place: restaurant})
      })

  }

  render () {
    const { place } = this.state



    if (!place) {
      return <div>Loading Place...</div>
    }
    return (
      <div>{ place }</div>
    )

  }
}

export default FeedDisplay