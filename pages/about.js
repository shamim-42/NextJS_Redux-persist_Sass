import React from 'react'
import { connect } from 'react-redux'


function about (props) {
  return (
    <>
    <div>About</div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user : state.user
  }
}

export default  connect(mapStateToProps)(about)
