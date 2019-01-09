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
    }, 2000)
  }

  render () {
    return (
      <div>
        <section className='row middle-xs'>
          <div className='col-xs-10 grayGrad'>
            <div className='box'>
              <h1>Too Hungry To Think?</h1>
              <p>Feeme will help you find food nearby without the need to make hard choices. With just one click Feeme
                will
                quickly scour your area and point you to a food source.</p>
              <p>No more crippling choices between pizza or tacos, Feeme will decide. Give your hungry brain a
                break!</p>
              <p style={{ color: '#0d0d0d' }}>Just click on the hungry Feeme to get eating.</p>
            </div>
          </div>
          <div className='col-xs-2 center-xs yellow'>
            <div className='btn-wrap'>
              <button className='btn' onClick={this.handleClick}>
                <img src='/static/hungry.svg' />
              </button>
              <h3>Soo Hungry</h3>
            </div>
            {this.state.loading &&
            <div className='loadImg'>
              <div className='loadWrap'>
                <div className='loadContent'>
                  <h3>Searching...</h3>
                  <img src='/static/femee-load.gif' />
                </div>
              </div>
            </div>
            }
          </div>

          <style jsx>{`
        .grayGrad, .yellow{
          height: calc(100vh - 80px);
        }
        .yellow{
          position: relative;
        }
        .yellow:before{
          content:'';
          display: block;
          background:url('/static/verticalWave.svg') no-repeat;
          background-size: cover;
          background-position: left top;
          width: 100px;
          height: calc(100vh - 80px);
          position: absolute;
          top: 0;
          left: -80px;
        }
        .box{
          margin: 100px auto 0 50px;
        }
       `}</style>
        </section>
        <footer className='row end-xs'>
          <p className='col-xs-12'>
            A Find Niya App
          </p>
        </footer>
      </div>
    )
  }
}

export default FindFood
