import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Array<string> = [];
  constructor(public todoSer: TodoService) {
    this.todos = todoSer.getAllTodo();
  }

  addTodo(e: any) {
    this.todoSer.addTodo(e.target.value);
    console.log(e);
  }
}
