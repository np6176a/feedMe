import React, { Component } from 'react'
import Router from 'next/router'



export const showPosition = (position) => {

  const { latitude, longitude } = position.coords

  Router.push({
    pathname: '/food',
    query: {
      latitude,
      longitude,
    }
  })

}
