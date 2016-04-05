import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ViewEncapsulation} from 'angular2/core';

@Component({
  selector: 'todo-item-renderer',
  encapsulation: ViewEncapsulation.Native,
  template: `<style>
                .completed {
                    text-decoration: line-through;
                }
             </style>
            <div>
                <span [ngClass]="todo.status">{{todo.title | uppercase}}</span>
                <button (click)='toggle.emit(todo)'>Toggle status</button>
            </div>`
})

export class TodoItemRenderer{
  @Input() todo;
  @Output() toggle = new EventEmitter();
}
