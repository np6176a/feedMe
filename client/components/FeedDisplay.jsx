import React, { Component } from 'react'
import { findRandomRestaurant } from '../utlitlies/gmap'
import _JSXStyle from 'styled-jsx/style' // eslint-disable-line

class FeedDisplay extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      place: {},
      hasError: false
    }
  }

  handleClick () {
    findRandomRestaurant()
      .then(data => {
        this.setState({ place: data })
      })
      .catch(() => {
        this.setState({
          hasError: true
        })
      })
  }

  componentDidMount () {
    this.handleClick()
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className='container row center-xs'>
          <h2 className='col-xs-12'>Oops Feeme Got Lost, Please Refresh</h2>
          <div className='yay-feeme col-xs-12'>
            <p>So Lost!</p>
            <img src='/static/femee-load.gif'/>
          </div>
          <style jsx>{`
        h2 {
          color:#AB4E68;
          font-weight: 400;
          margin-bottom: 50px;
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
    const { place } = this.state
    return (
      <section className='row center-xs'>
        <div className='col-xs-12 grayGrad'>
          <div className='box'>
            <h1>{place.name}</h1>
            <p>{place.vicinity}</p>
          </div>
        </div>
        <div className='col-xs-12 yellow'>
          <div className='badge-wrap'>
            <div className='badge'>
              <img src='/static/yay.svg'/>
            </div>
            <h3>YAY FOOD!</h3>
            <button className='btn-secondary' onClick={this.handleClick}>
              Or Try Something Else
            </button>
          </div>
        </div>
        <style jsx>{`
        .grayGrad{
          height: 70vh;
        }
        .box{
          margin: 60px auto 0;
        }
        .yellow{
          position: relative;
          min-height: 30vh;
        }
        .yellow:before{
          content:'';
          display: block;
          background:url('/static/horizontalBottom.svg') no-repeat;
          background-size: cover;
          background-position: center top;
          width: 100vw;
          height: 160px;
          position: absolute;
          top: -120px;
          left: 0;
        }
        `}</style>
      </section>
    )
  }
}

export default FeedDisplay
