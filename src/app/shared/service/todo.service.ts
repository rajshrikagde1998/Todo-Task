import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnacBarService } from './snac-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

    todoList: string[]=["HTML","CSS","JS","BOOTSRAP"]
  constructor(private _snackBar: SnacBarService) { }



  getAllTodos():string[]{
  return this.todoList
  }

  addTodoItem(todo:string){
    this.todoList.push(todo)
    this._snackBar.OnopenSnackBar(`${todo} is added successfully`)
  }
}
