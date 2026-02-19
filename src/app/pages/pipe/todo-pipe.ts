import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo',
})
export class TodoPipe implements PipeTransform {

  transform(todos: TodoObjectType[], search: string): TodoObjectType[] {
    if (!search) {
      return todos;
    }
    return todos.filter((todo) => todo.name.toLowerCase().includes(search.toLowerCase()));
  }

}
