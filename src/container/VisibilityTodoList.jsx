import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { TodoList } from '../components/FnComponent'
import { visibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case visibilityFilters.SHOW_ALL:
      return todos
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter(item => item.completed)
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter(item => !item.completed)
    default:
      throw new Error(`Unkonw filter: ${filter}`)
  }
}

const mapStateToProps = state => ({
  todo: getVisibleTodos(state.todo, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)