import React from 'react'
import { visibilityFilters } from '../actions'
import FilterLink from '../container/FilterLink'

export const Todo = ({ text, completed, onClick }) => (
  <li
    style = {{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    onClick={onClick}
  >
    {text}
  </li>
)

export const TodoList = ({ todo, onClick }) => {
  return todo.map((item, index) => {
    return <Todo key={index} {...item} onClick={() => {onClick(index)}} />
  })
}

export const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={visibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)
