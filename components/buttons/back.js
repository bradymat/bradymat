import React from 'react'
import handler from '../handlers/back'

export default (dispatch) => <button onClick={() => handler(dispatch)}>Back</button>
