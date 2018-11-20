import React from 'react'
import Footer from 'components/Footer'
import AddTodo from 'containers/AddTodo'
import VisibleTodoList from 'containers/VisibleTodoList'
import styled from 'styled-components'

const WrapperContainer = styled.div`
  background-color: ${props => props.bgColor};
`

const App = () => (
  <WrapperContainer bgColor="red">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </WrapperContainer>
)

export default App
