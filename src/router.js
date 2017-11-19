import { connect } from 'react-redux'
import { compose, branch, renderComponent } from 'recompose'

import { selectUserIsAuthed } from './selectors/userSelector'
import AuthedRoutes from './components/authedRoutes'
import UnauthedRoutes from './components/unauthedRoutes'


const mapStateToProps = state => ({
  isAuthed: selectUserIsAuthed(state)
})

export default compose(
  connect(mapStateToProps),
  branch(
    ({isAuthed}) => isAuthed,
    renderComponent(AuthedRoutes)
  )
)(UnauthedRoutes)
