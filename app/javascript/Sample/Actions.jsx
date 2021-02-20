// @flow

import {connect} from 'react-redux';

export const ageUp = () => {
    return {type : 'ageincrement'}
}
export const ageDown = () => {
    return {type : 'agedecrement'}
}

export const ageDownDispatch = (props) => {
    props.AgeDown();
}

export const ageUpDispatch = (props) => {
    props.AgeUp();
}

const MapDispatchToProps = (dispatch) => {
    return {
        AgeUp: () => dispatch(ageUp),
        AgeDown: () => dispatch(ageDown)
    }
}

export  default connect( MapDispatchToProps)(ageDownDispatch);





