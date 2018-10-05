import React, { Component } from 'react'
import { findRandomRestaurant, retrieveLocationParams } from '../utlitlies/gmap'

class FeedDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      place: []
    }
  }
  componentDidMount () {

    findRandomRestaurant()
      .then(result => {
        this.setState({place: result})
      })
  }

  render () {

    return (
      <div>{ this.place }</div>
    )

  }
}

export default FeedDisplay