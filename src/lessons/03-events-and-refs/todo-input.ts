import {Component} from "angular2/core";

@Component({
    selector: 'todo-input',
    template: `<div>
    <div #myInput>Test</div>
    <button (click)="onClick(myInput, $event)">Click me</button>
    </div>`
})
export class TodoInput{
    onClick(elem, evt){
        console.log(elem);
        console.log(evt);

    }
}
