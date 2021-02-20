import React from 'react';
import { connect } from 'react-redux';
import SecondComponent from './SecondComponent';
import {ageUpDispatch , ageDownDispatch , ageDown , ageUp } from './Actions';

class ReduxConcepts extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h3> Component One Rendered From  App  with ActionDispatcher </h3>
                    <input value={this.props.age} /> <br />
                    <input type='button' onClick={this.props.AgeUp} value="increment" />
                    <input type='button' onClick={this.props.AgeDown}  value="decrement" />
                </div>
                <div>
                    <SecondComponent />
                </div>
            </div>
        )
    }
}
const MapStateToProps = (state) => {
    return {
        age: state.age
    }
} 

const MapDispatchToProps = (dispatch) => {
    return {
        AgeUp: () => dispatch(ageUp()),
        AgeDown: () => dispatch(ageDown())
    }
} 
export default connect(MapStateToProps , MapDispatchToProps)(ReduxConcepts);