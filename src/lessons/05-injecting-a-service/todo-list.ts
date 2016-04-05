import {Component} from 'angular2/core';
import {TodoService} from "./todo-service";
import {TodoItemRenderer} from "./todo-item-renderer";
import {SearchPipe} from './search-pipe';
import {StartedPipe} from './started-pipe';

@Component({
  selector: 'todo-list',
  directives: [TodoItemRenderer],
  pipes: [SearchPipe, StartedPipe],
  template: `<div>{{ label }}
               <ul>
                 <li *ngFor="#todo of todoService.todos | started ">
                   <todo-item-renderer [todo]="todo"
                   (toggle)="todoService.toggleTodo($event)"
                   ></todo-item-renderer>
                 </li>
               </ul>
             </div>`
})

export class TodoList{
  label = 'Todo:';
  constructor(public todoService: TodoService) {

  }
}
