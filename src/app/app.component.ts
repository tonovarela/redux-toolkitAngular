import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AppStore } from "./store/app.store";
import { Todo } from "./model";
import { addTodo, toggleTodo, deleteTodo, setTodos } from "./store/todos/todo.slice";
import { TodoService } from "./services/todo.service";

@Component({
  selector: "app-root",
  template: `
    <h2>Redux toolkit</h2>

    <input #todoText />
    <button
      type="submit"
      (click)="addTodo(todoText.value); todoText.value = ''"
    >
      add Todo
    </button>

    <div *ngFor="let item of todoList$ | async">
      <input
        type="checkbox"
        [checked]="item.completed"
        (click)="toggleTodo(item)"
      />
      <span>ID {{ item.id }}: {{ item.title }}</span>
      <button (click)="borrar(item)">Borrar</button>
    </div>
  `
})
export class AppComponent {
  readonly todoList$: Observable<Todo[]>;


  constructor(readonly store: AppStore, public todoService: TodoService) {
    this.todoList$ = this.store.select(state => state.todo.todos);
    todoService.getAll().subscribe(todos => this.store.dispatch(setTodos(todos)));
  }
  borrar(item: Todo) {
    this.store.dispatch(deleteTodo(item.id));
  }
  addTodo(text: string) {
    const { todos } = this.store.getState(state => state.todo);
    const { estaAutenticando, nombre } = this.store.getState(state => state.autenticacion);
    console.log({ estaAutenticando, nombre });
    this.store.dispatch(addTodo({ id: todos.length + 1, title: text }));
  }
  toggleTodo(item: Todo) {
    this.store.dispatch(toggleTodo(item.id));
  }
}
