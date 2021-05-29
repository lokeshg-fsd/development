// @flow

import { connect } from 'react-redux'

export const ageUp = () => ({ type: 'ageincrement' })
export const ageDown = () => ({ type: 'agedecrement' })

export const ageDownDispatch = (props) => {
  props.AgeDown()
}

export const ageUpDispatch = (props) => {
  props.AgeUp()
}

const MapDispatchToProps = (dispatch) => ({
  AgeUp: () => dispatch(ageUp),
  AgeDown: () => dispatch(ageDown),
})

export default connect(MapDispatchToProps)(ageDownDispatch)
