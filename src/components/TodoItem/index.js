import React, { PropTypes } from 'react'
import style from './style.css'

const TodoItem = ({ text, complete }) => (
  <li className={complete ? style.complete : ''}>{text}</li>
)
TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool,
}
export default TodoItem
