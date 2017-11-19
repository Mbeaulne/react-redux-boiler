import React from 'react'
import styled, { css } from 'styled-components'

const Text = styled.div`
    color: red;
    font-size: 25px;
`

const App = ({email, handleClick, handleChange}) => {
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <Text onClick={handleClick}>
        click me to log in with: {email}
      </Text>
    </div>
  )
}

export default App
