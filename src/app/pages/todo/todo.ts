import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TodoService } from "../../services/todo.service";
import { TodoComponent } from "../../components/todo/todo";
import { TranslationService } from "../../services/translation.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.html',
  standalone: true,
  imports: [FormsModule, CommonModule, TodoComponent]
})
export class Todo {
  constructor(
    public todoService: TodoService,
    public transService: TranslationService
  ) { }
  today = new Date()
}