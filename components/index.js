import React from 'react'
import back from './buttons/back'
import nav from './nav'

export default ({state, dispatch}) =>
  <div>
    {nav(dispatch)}
    <h1>Home</h1>
  </div>
