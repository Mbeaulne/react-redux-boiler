import React from 'react'
import styled, { css } from 'styled-components'

const Text = styled.div`
    color: red;
    font-size: 25px;
`

const App = ({name, login}) => {
  return (
    <div>
      <Text onClick={login}>
        click me to log in {name}
      </Text>
    </div>
  )
}

export default App
