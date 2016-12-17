import React from 'react'
import back from './buttons/back'

export default ({state, dispatch}) => {
  return (
    <div>
      {back(dispatch)}
      <h1>Welcome 404</h1>
    </div>
  )
}
