import React, { Component } from 'react'
import Router from 'next/router'



export const showPostion = (position) => {
  let la = position.coords.latitude
  let lo = position.coords.longitude

  Router.push({
    pathname: '/food',
    query: {
      lat: la,
      lon: lo,
    }
  })

}
