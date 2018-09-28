import React, { Component } from 'react'

export const showPostion = (position) => {
  let lat = position.coords.latitude
  let long = position.coords.longitude
  console.log(lat, long);
}
