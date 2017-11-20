import { connect } from 'react-redux'

import { signOut } from '../actions'
import Nav from '../components/nav'

const mapStateToProps = state => ({
  company: state.user.company.name,
  url: state.user.website,
  username: state.user.username,
  state
})

const mapDispatchToProps = {
  onSignOutClick: signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
