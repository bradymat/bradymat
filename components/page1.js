import React from 'react'
import nav from './nav'

export default ({state, dispatch}) =>
  <div>
    {nav(dispatch)}
    <h1>Welcome {state.route}</h1>
  </div>
