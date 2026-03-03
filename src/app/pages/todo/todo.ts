import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TodoService } from "../../services/todo.service";
import { TodoComponent } from "../../components/todo/todo";
import { TranslationService } from "../../services/translation.service";
import { HttpClient } from "@angular/common/http";

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
  ) {
    this.getTodos()
  }

  readonly #http: HttpClient = inject(HttpClient)

  getTodos() {
    this.#http.get<any[]>('https://jsonplaceholder.typicode.com/todos').subscribe({
      next: (res) => {
        this.todoService.todos = res.map(item => ({
          id: item.id.toString(),
          name: item.title,
          detail: 'Auto-imported from JSONPlaceholder',
          priority: item.id % 3 === 0 ? 'high' : (item.id % 2 === 0 ? 'medium' : 'low'),
          status: item.completed ? 'done' : 'active',
          repeatEveryMonth: false
        }));
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  today = new Date()
}