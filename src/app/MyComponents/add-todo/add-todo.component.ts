import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
 ngOnInit(): void {}

 @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

 todo: Todo;
  
 onSubmit(){
  console.log("Added a todo");  
  this.todoAdd.emit(this.todo);

 }
}
