import reducer from "./reducer";
import { createTodo, toggleTodo, filterTodos } from "./actions";

describe("CREATE_TODO", function () {
    test("creates a new todo", function () {
        const initialState = {todos: [], nextId: 1}
        const state = reducer(initialState, createTodo("Test"));
        expect(state.todos).toHaveLength(1);
        expect(state.todos[0]).toEqual({id: 1, done: false, text: "Test"});
    })

    test("updates nextId", function () {
        const initialState = {todos: [], nextId: 1}
        const state = reducer(initialState, createTodo("Test"));
        expect(state.nextId).toEqual(2);
    })
})

// still not working
describe("TOGGLE_TODO", function () {
  test('toggles a new todo', function () {
    const initialState = {todos: [], nextId: 1}
    const state = reducer(initialState, toggleTodo("Test"));



  })
})

describe("FILTER_TODOS", function () {
  test('filters todo', function () {
    const initialState = {todos: [], nextId: 1}
    const state = reducer(initialState, filterTodos("Test"));
  })
})
