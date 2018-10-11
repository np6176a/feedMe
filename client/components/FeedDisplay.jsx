import React, { Component } from 'react'
import { findRandomRestaurant, retrieveLocationParams } from '../utlitlies/gmap'
import _JSXStyle from 'styled-jsx/style'
// import posed from 'react-pose'

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
        this.setState({place: data})
      })
  }


  render () {
    const {place} = this.state
    return (
      <div className='container row center-xs'>
        <h2 className='col-xs-12'>Get Your Lunch @:</h2>
        <h1 className='col-xs-12'>{place.name}</h1>
        <div className='yay-feeme col-xs-12'>
          <p>YAY, FOOD!</p>
          <img src='/static/yay.svg' />
        </div>


        <style jsx>{`
        h2 {
          color:#AB4E68;
          font-weight: 400;
          margin-bottom: 0;
        }
        .yay-feeme p{
          color: #BCABAE;
        }
        .yay-feeme img{
          max-width: 200px;
          max-height: 200px;
          object-fit: contain;
          object-position: center;
        }
        `}</style>
      </div>
    )

  }
}

export default FeedDisplay