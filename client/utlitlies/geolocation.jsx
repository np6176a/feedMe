import { showPosition } from './showPosition'

export const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    return ('Geolocation is not supported by this browser.')
  }
}
