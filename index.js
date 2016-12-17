import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Router from 'sheet-router'

import reducer from './reducer'
import Home from './components'
import Header from './components/page1'
import Page from './components/page2'
import FourOhFour from './components/404'

const initialState = {
  name: 'Brady Gillies',
  route: '/',
  routeHistory: []
}

const { getState, dispatch, subscribe } = createStore(reducer, initialState)

const route = Router({ default: '/404' }, [
  ['/', (params) => Home],
  ['/page1', (params) => Header],
  ['/page2', (params) => Page],
  ['/404', (params) => FourOhFour]
])

subscribe(() => {
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, document.querySelector('main'))
})

dispatch({type: 'INIT'})
