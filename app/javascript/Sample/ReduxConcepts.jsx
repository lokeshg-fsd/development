// @flow
import React from 'react'
import { connect } from 'react-redux'
import SecondComponent from './SecondComponent'
import { ageUpDispatch, ageDownDispatch, ageDown, ageUp } from './Actions'

class ReduxConcepts extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3> Component One Rendered From App with ActionDispatcher </h3>
          <input value={this.props.age} /> <br />
          <input onClick={this.props.AgeUp} type="button" value="increment" />
          <input onClick={this.props.AgeDown} type="button" value="decrement" />
        </div>
        <div>
          <SecondComponent />
        </div>
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
