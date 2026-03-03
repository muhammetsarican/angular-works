import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { TranslationService } from '../../services/translation.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todo-detail.html',
})
export class TodoDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  public todoService = inject(TodoService);
  public transService = inject(TranslationService);
  private http = inject(HttpClient);

  todo: TodoObjectType | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/${id}`).subscribe({
        next: (res) => {
          this.todo = {
            id: res.id.toString(),
            name: res.title,
            detail: 'Auto-imported from JSONPlaceholder',
            priority: res.id % 3 === 0 ? 'high' : (res.id % 2 === 0 ? 'medium' : 'low'),
            status: res.completed ? 'done' : 'active',
            repeatEveryMonth: false
          };
        }
      })
    }
  }

  getPriorityColor() {
    if (!this.todo) return 'text-slate-500';
    switch (this.todo.priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-amber-500';
      case 'low': return 'text-emerald-500';
      default: return 'text-slate-500';
    }
  }

  deleteTodo(id: string) {
    this.todoService.delete(id);
    this.router.navigate(['/todo']);
  }
}
