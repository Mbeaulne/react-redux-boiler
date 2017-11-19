import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'

import { selectUserName } from '../selectors'
import { login } from '../actions'
import Component from '../components'

const mapStateToProps = state => ({
  name: selectUserName(state)
})

const mapDispatchToProps = {
  onLoginClick: login
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('email', 'setEmail', ''),
    withHandlers({
      handleChange: ({setEmail}) => e => setEmail(e.target.value),
      handleClick: ({email, onLoginClick}) => () => onLoginClick(email)
    })
)(Component)
