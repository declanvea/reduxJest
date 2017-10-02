import * as actions from './actions';



describe('actions', () => {
  it('should create an action to add a todo', () => {
    const payload = 'Finish docs'
    const expectedAction = {
      type: actions.CREATE_TODO,
      payload
    }
    expect(actions.createTodo(payload)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should toggle an action', () => {
    const payload = 'Finish docs'
    const expectedAction = {
      type: actions.TOGGLE_TODO,
      payload
    }
    expect(actions.toggleTodo(payload)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should filter an action', () => {
    const payload = 'Finish docs'
    const expectedAction = {
      type: actions.FILTER_TODOS,
      payload
    }
    expect(actions.filterTodos(payload)).toEqual(expectedAction)
  })
})
