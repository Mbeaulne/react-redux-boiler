import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

const Text = styled.div`
    color: red;
    font-size: 25px;
`;

const App = ({state, login}) => {
  return (
    <div>
      <Text onClick={login}>
        zzzzzzzzzzzzzzzzzz
      </Text>
    </div>
  );

}

const mapStateToProps = state => ({
    state: state
  });
   
  export default connect(mapStateToProps)(App);
  

