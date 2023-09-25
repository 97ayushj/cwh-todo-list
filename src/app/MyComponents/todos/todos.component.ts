import { Component ,Input,OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  todos:Todo[] ;
  //@Input() todo!: Todo;
  constructor(private httpclient: HttpClient){

    
    //this.todos = [
      //{sno:1,title:"This is title",desc:"Description",active:true},
      //{sno:2,title:"This is title2",desc:"Description",active:true},
      //{sno:3,title:"This is title3",desc:"Description",active:true}
    //]
  }
  ngOnInit(): void {}

  postAddTodo(todo: Todo): Observable<any>{
    return this.httpclient.post("http://localhost:8089/add-todo",todo);
    console.log("Making Post request for Add Todo" + todo);
  }

  postDeleteTodo(todo: Todo): Observable<any>{
    return this.httpclient.post("http://localhost:8089/delete-todo",todo);
    console.log("Making Post request for delete Todo" + todo);
  }

  get(): Observable<any>{
    return this.httpclient.get("http://localhost:8089/get-todos");
    console.log("Making Post request" );
    
  }


  deleteTodo(todo: Todo){
    console.log("delete Todo is triggered" + todo)

    this.postDeleteTodo(todo);
    this.get().subscribe(data =>{
      this.todos = data;
    })
    //const index = this.todos.indexOf(todo);
    //this.todos.splice(index,1);
  }

  addTodo(todo: Todo){
    console.log(todo);
    this.postAddTodo(todo);
    this.get().subscribe(data =>{
      this.todos = data;
    })
    
    //this.todos.push(todo);
  }
}
