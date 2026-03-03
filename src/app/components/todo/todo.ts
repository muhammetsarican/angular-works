import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoPipe } from '../../pipe/todo-pipe';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'todo-component',
  imports: [TodoPipe, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class TodoComponent {
  constructor(
    public todoService: TodoService,
    public transService: TranslationService
  ) { }
}
