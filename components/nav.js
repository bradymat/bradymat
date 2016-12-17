import React from 'react'

export default (dispatch) => {
  return (
    <nav className="menu">
      <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
      <label className="menu-open-button" htmlFor="menu-open">
        <span className="hamburger hamburger-1"></span>
        <span className="hamburger hamburger-2"></span>
        <span className="hamburger hamburger-3"></span>
      </label>
      <a onClick={() => changePage('/')} className="menu-item"> Home </a>
      <a onClick={() => changePage('/page1')} className="menu-item"> Projects </a>
      <a onClick={() => changePage('/page2')} className="menu-item"> Contact </a>
    </nav>
  )

  function changePage (route) {
    dispatch({type: 'CHANGE_ROUTE', payload: route})
  }
}
