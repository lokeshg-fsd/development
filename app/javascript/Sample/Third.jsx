// @flow
import React from 'react'
import { connect } from 'react-redux'

class ReduxConcepts extends React.Component {
  render() {
    return (
      <div>
        <h3> Third Component Rendered from App without Actions </h3>
        <input value={this.props.age} /> <br />
        <input onClick={this.props.AgeUp} type="button" value="increment" />
        <input onClick={this.props.AgeDown} type="button" value="decrement" />
      </div>
    )
  }
}
const MapStateToProps = (state) => ({
  age: state.age,
})
const MapDispatchToProps = (dispatch) => ({
  AgeUp: () => dispatch({ type: 'ageincrement' }),
  AgeDown: () => dispatch({ type: 'agedecrement' }),
})

export default connect(MapStateToProps, MapDispatchToProps)(ReduxConcepts)
