import React, { Component } from 'react'
import { feedMap } from '../utlitlies/gmap'

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
        this.setState({place: res})
      })

  }

  render () {
    const {place} = this.state

    if (!place) {
      return <div>Loading Place...</div>
    }
    return (
      <div>{place}</div>
    )

  }
}

export default FeedDisplay