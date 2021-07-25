/* eslint-disable react/prop-types */
// @flow
import React from 'react'
import { connect } from 'react-redux'

function ReduxConcepts(props) {
  return (
    <div>
      <h3> Third Component Rendered from App without Actions </h3>
      <input value={props.age} /> <br />
      <input onClick={() => props.AgeUp()} type="button" value="increment" />
      <input onClick={() => props.AgeDown()} type="button" value="decrement" />
    </div>
  )
}
const MapStateToProps = (state) => ({
  age: state.age,
})
const MapDispatchToProps = (dispatch) => ({
  AgeUp: () => dispatch({ type: 'ageincrement' }),
  AgeDown: () => dispatch({ type: 'agedecrement' }),
})

export default connect(MapStateToProps, MapDispatchToProps)(ReduxConcepts)
