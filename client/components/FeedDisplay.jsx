import React, { Component } from 'react'
import { findRandomRestaurant, retrieveLocationParams } from '../utlitlies/gmap'

class FeedDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      place: {}
    }
  }

  componentDidMount () {
    findRandomRestaurant()
      .then(data => {
        this.setState({ place: data })
      })
  }

  render () {
   const { place } = this.state
    return (
      <div>{ place.name }</div>
    )

  }
}

export default FeedDisplay