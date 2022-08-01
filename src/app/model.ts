export type TodoID = number;

export interface Todo {
  id: TodoID;
  title: string;
  completed: boolean;
}
