import { connect } from 'react-redux';

import { selectUserName } from '../selectors';
import { login } from '../actions';
import Component from '../components';

const mapStateToProps = state => ({
    name: selectUserName(state)
  });
  
  const mapDispatchToProps = {
    login
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Component);
