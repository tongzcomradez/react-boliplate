import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={(node) => {
            input = node
            return true
          }}
        />
        <Button htmlType="submit" type="primary">
          Add Todo
        </Button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
