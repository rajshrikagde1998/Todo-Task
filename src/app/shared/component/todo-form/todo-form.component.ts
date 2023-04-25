import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor( private _todoService :TodoService) { }

  ngOnInit(): void {
  }
  OnClick(items : HTMLInputElement){
   let val = items.value
   if(val.length > 0){
    this._todoService.addTodoItem(val)
   }
    items.value =""
  }
}
