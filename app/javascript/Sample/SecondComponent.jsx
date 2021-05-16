// @flow
import React from 'react'
import { connect } from 'react-redux'
import { ageUp, ageDown } from './Actions'

class ReduxConcepts extends React.Component {
  render() {
    return (
      <div>
        <h3> Component Two Rendered from Component One with Actions </h3>
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
    AgeUp: () => dispatch(ageUp()),
    AgeDown: () => dispatch(ageDown()),
  })

export default connect(MapStateToProps, MapDispatchToProps)(ReduxConcepts)
