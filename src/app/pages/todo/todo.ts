import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TodoService } from "../../services/todo.service";
import { TodoComponent } from "../../components/todo/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.html',
  standalone: true,
  imports: [FormsModule, CommonModule, TodoComponent, CommonModule]
})
export class Todo {
  constructor(public todoService: TodoService) { }
  today = new Date()
}