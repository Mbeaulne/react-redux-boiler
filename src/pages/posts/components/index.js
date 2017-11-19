import React from 'react'
import styled, { css } from 'styled-components'

const Text = styled.div`
    color: red;
    font-size: 25px;
`

const App = ({state, login}) => {
  return (
    <div>
      <Text onClick={login}>
        zzzzzzzzzzzzzzzzzz
      </Text>
    </div>
  )
}

export default App
