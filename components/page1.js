import React from 'react'
import back from './buttons/back'

export default ({state, dispatch}) => {
  return (
    <div>
      {back(dispatch)}
      <h1>Welcome {state.route}</h1>
      <button onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/page2'})}>Next</button>
    </div>
  )
}
