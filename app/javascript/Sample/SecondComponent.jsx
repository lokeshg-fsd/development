import React from 'react';
import { connect } from 'react-redux';
import {ageUp , ageDown } from './Actions';

class ReduxConcepts extends React.Component {
    render() {
        return (
                <div>
                    <h3> Component Two Rendered from Component One with Actions </h3>
                    <input value={this.props.age} /> <br />
                    <input type='button' onClick={this.props.AgeUp} value="increment" />
                    <input type='button' onClick={this.props.AgeDown} value="decrement" />
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
export default connect(MapStateToProps, MapDispatchToProps)(ReduxConcepts);