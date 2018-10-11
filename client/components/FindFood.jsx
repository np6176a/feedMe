import React, { Component } from 'react'
import { getLocation } from '../utlitlies/geolocation'
import _JSXStyle from 'styled-jsx/style'
import posed from 'react-pose'


const Pop = posed.span({
  hidden: {opacity: 0},
  visible: {opacity: 1},
  hoverable: {
    initialPose: 'hidden'
  }
})


class FindFood extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isVisible: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 2000);
  }

  handleClick (error) {
    getLocation()
  }

  render () {

    return (
      <div className='row center-xs middle-xs container'>
        <h1 className='col-xs-12'>Trouble Deciding On Lunch?</h1>
        <p className='col-xs-12'>Click FEEME here <i className="fas fa-arrow-down"></i> to find food NOW </p>

        <div className='col-xs-12'>
          <button className='btn' onClick={this.handleClick}>
            <Pop className='pop' pose={this.state.isVisible ? 'visible' : 'hidden'}>rumble</Pop>
            <Pop className='pop' pose={this.state.isVisible ? 'visible' : 'hidden'}>rumble</Pop>
            <Pop className='pop' pose={this.state.isVisible ? 'visible' : 'hidden'}>growl</Pop>
            <Pop className='pop' pose={this.state.isVisible ? 'hidden' : 'visible'}>growl</Pop>
            <Pop className='pop' pose={this.state.isVisible ? 'hidden' : 'visible'}>rumble</Pop>
            <Pop className='pop' pose={this.state.isVisible ? 'hidden' : 'visible'}>growl</Pop>
            <span>Sooo Hungry!</span>
            <img src='/static/hungry.svg'/>
          </button>
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