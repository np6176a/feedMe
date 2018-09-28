import React, { Component } from 'react'
import {getLocation} from '../utlitlies/geolocation'
import {showPostion} from '../utlitlies/showPosition'

class FindFood extends Component {
  constructor(props) {
    super(props);
    this.handleClick =  this.handleClick.bind(this);
  }

  handleClick() {
    getLocation();
  }

  render () {
    return (
      <div>
        <h1>Have Trouble Deciding On Lunch</h1>
        <h3>Click the Cookie and have the super duper Feed Me App tell you where to eat!</h3>

        {/*figure out how to show error mssg*/
        /*<p className="error"></p>*/}

        <button onClick={this.handleClick}><i className="fas fa-cookie-bite"></i></button>
      </div>
    );
  }
}

export default FindFood