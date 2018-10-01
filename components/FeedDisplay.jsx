import React, { Component } from 'react'
import { feedMap } from '../utlitlies/gmap'

class FeedDisplay extends Component {
  constructor (props) {
    super (props);
    this.resultFeed = this.resultFeed.bind(this);
  }

  resultFeed(){
    feedMap();
  }

  render () {
    return (
      <div>{this.resultFeed()}</div>
    );
  }
}

export default FeedDisplay