import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class TodoService {
  // Empty for now to match initial state
  taskNameModal = ''
  taskPriorityModal = ''
  taskRepeatEveryMonthModal = false
  taskDetailModal = ''

  isCreateModalOpen = false;
  isEditModalOpen = false;
  currentEditingId: string | null = null;

  updateTodo: TodoObjectType | null = null;
  todos: Array<TodoObjectType> = [];

  search: string = ''

  create() {
    this.todos.push({
      id: (this.todos.length + 1).toString(),
      name: this.taskNameModal,
      detail: this.taskDetailModal,
      repeatEveryMonth: this.taskRepeatEveryMonthModal,
      priority: this.taskPriorityModal as 'high' | 'medium' | 'low',
      status: 'pending',
    });

    // Reset fields
    this.resetModalFields();
    this.isCreateModalOpen = false;
  }

  delete(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  openEditModal(todo: any) {
    this.currentEditingId = todo.id;
    this.taskNameModal = todo.name;
    this.taskDetailModal = todo.detail;
    this.taskPriorityModal = todo.priority;
    this.taskRepeatEveryMonthModal = todo.repeatEveryMonth;
    this.isEditModalOpen = true;
  }

  update() {
    if (!this.currentEditingId) return;

    this.todos = this.todos.map((todo) =>
      todo.id === this.currentEditingId
        ? {
          ...todo,
          name: this.taskNameModal,
          detail: this.taskDetailModal,
          priority: this.taskPriorityModal as 'high' | 'medium' | 'low',
          repeatEveryMonth: this.taskRepeatEveryMonthModal,
        }
        : todo
    );

    this.resetModalFields();
    this.isEditModalOpen = false;
    this.currentEditingId = null;
  }

  private resetModalFields() {
    this.taskNameModal = '';
    this.taskDetailModal = '';
    this.taskPriorityModal = '';
    this.taskRepeatEveryMonthModal = false;
  }
}
