import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoPipe } from '../../pages/pipe/todo-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-component',
  imports: [TodoPipe, CommonModule],
  standalone: true,
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class TodoComponent {
  constructor(public todoService: TodoService) { }
}
