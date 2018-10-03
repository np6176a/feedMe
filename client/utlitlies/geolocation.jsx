import React, { Component } from 'react'
import { showPosition } from './showPosition'

export const getLocation = ()=> {
    if (navigator.geolocation) {
      let post = navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      return("Geolocation is not supported by this browser.");
    }
};