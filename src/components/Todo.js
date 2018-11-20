import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'

const Todo = ({ onClick, completed, text }) => (
  <List
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    { text }
  </List>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
