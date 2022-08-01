import todosSlice from "./todos/todo.slice";
import autenticacionSlice from './autenticacion/autentication.slice'
import { combineReducers } from "redux";


const reducers = combineReducers(
    {
        todo: todosSlice.reducer,
        autenticacion: autenticacionSlice.reducer
    });

export type RootState = ReturnType<typeof reducers>;

export default reducers;
