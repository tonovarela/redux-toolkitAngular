import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoID } from "../../model";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [] as Todo[]
  },
  reducers: {
    setTodos(state,action){
      state.todos=action.payload;
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(t => t.id != action.payload);
    },
    addTodo(state, action: PayloadAction<{ id: TodoID; title: string }>) {
      const { id, title } = action.payload;      
      state.todos.push({ id, title, completed: false });
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});
export const { addTodo, toggleTodo,deleteTodo,setTodos } = todosSlice.actions;
export default todosSlice;
