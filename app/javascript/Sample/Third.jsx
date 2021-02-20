import React from 'react';
import { connect } from 'react-redux';

class ReduxConcepts extends React.Component {
    render() {
        return (
                <div>
                    <h3>  Third Component Rendered from App without Actions </h3>
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
        AgeUp: () => dispatch({ type: 'ageincrement' }),
        AgeDown: () => dispatch({ type: 'agedecrement' })
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(ReduxConcepts);