import React, { Component } from 'react'

export const feedMap = ()=> {
  let map;
  let service;
  let infowindow;

  let urlString = window.location.href;
  let url = new URL(urlString);
  let lat = url.searchParams.get('lat');
  let lon = url.searchParams.get('lon');

  function initialize() {
    let currentLoc = new google.maps.LatLng(lat,lon);

    map = new google.maps.Map(document.getElementById('map'), {
      center: currentLoc,
      zoom: 15
    });

    let request = {
      location: currentLoc,
      radius: '500',
      type: ['restaurant']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        createMarker(results[i]);
      }
    }
  }
}