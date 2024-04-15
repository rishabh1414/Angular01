import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todo: Array<string> = ['todo 1', 'todo 2'];

  getAllTodo() {
    return this.todo;
  }

  addTodo(val: string) {
    this.todo.push(val);
  }
}
