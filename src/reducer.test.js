import reducer from "./reducer";
import * as actions from "./actions";



describe("CREATE_TODO", function () {
  const initialState = {todos: [], nextId: 1}
    test("creates a new todo", function () {
        const state = reducer(initialState, actions.createTodo("Test"));
        expect(state.todos).toHaveLength(1);
        expect(state.todos[0]).toEqual({id: 1, done: false, text: "Test"});
    })

    test("updates nextId", function () {
        const state = reducer(initialState, actions.createTodo("Test"));
        expect(state.nextId).toEqual(2);
    })
})

// still not working
describe("TOGGLE_TODO", function () {
  test('toggles a todo.cone (true/false)', function () {
    const initialState = {todos: [{id: 1, done: false, text: "Test"}]};
    const state = reducer(initialState, actions.toggleTodo(1));
    expect(state.todos[0].done).toEqual(true);



  })
})

describe("FILTER_TODOS", function () {
  test('filters todo', function () {
    const initialState = {filter:'all'}
    const state = reducer(initialState, actions.filterTodos('completed'));
    expect(state.filter).toEqual('completed');
  })
})
