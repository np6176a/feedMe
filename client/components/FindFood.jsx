import React, { Component } from 'react'
import { getLocation } from '../utlitlies/geolocation'
import _JSXStyle from 'styled-jsx/style' // eslint-disable-line

class FindFood extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      loading: false
    }
  }

  handleClick () {
    this.setState({ loading: true })
    setTimeout(() => {
      getLocation()
      // this.setState({ loading: false })
    }, 1000)
  }

  render () {
    return (
      <div className='row center-xs middle-xs container'>
        <h1 className='col-xs-12'>Trouble Deciding On Lunch?</h1>
        <p className='col-xs-12'>
          {'Click FEEME here '}
          <i className='fas fa-arrow-down' />
          {' to find food NOW'}
        </p>

        <div className='col-xs-12'>
          <button className='btn' onClick={this.handleClick}>
            <img src='/static/hungry.svg' />
          </button>
          {this.state.loading && <div className='loadImg'>
            <div className='loadWrap'>
              <img src='/static/femee-load.gif' />
            </div>
          </div>}
        </div>

        <style jsx>{`
        .btn {
          margin: 60px auto 0;
          width: 300px;
          background:transparent;
          border: none;
          position: relative;
        }
        .btn img{
          max-width: 100px;
          max-height: 200px;
          object-fit: contain;
          margin: 0 auto;
          display: block;
          margin-top: 10px
        }
        .btn span{
        display: block;
        font-weight: 700;
        font-size: 120%;
        color:#AB4E68;
        text-align: center;
        }

       `}</style>
      </div>
    )
  }
}

export default FindFood
