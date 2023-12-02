import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private nextId: number = 1;
  todos: Todo[] = [];
  completed: Todo[] = [];

  constructor() {}

  addTask(title: string): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTodo: Todo = {
          id: this.getTaskId(),
          title,
          completed: false,
        };
        this.todos.push(newTodo);
        resolve(this.todos);
      }, 2000);
    });
  }

  completeTask(todoId: number): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.todos.findIndex((todo) => todo.id === todoId);
        if (index !== -1) {
          const completedTodo = this.todos.splice(index, 1)[0];
          completedTodo.completed = true;
          this.completed.push(completedTodo);
        }
        resolve(this.todos);
      }, 2000);
    });
  }

  deleteTask(todoId: number, fromCompleted: boolean): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const targetList = fromCompleted ? this.completed : this.todos;
        const index = targetList.findIndex((todo) => todo.id === todoId);
        if (index !== -1) {
          targetList.splice(index, 1);
        }
        resolve(targetList);
      }, 2000);
    });
  }

  private getTaskId(): number {
    return this.nextId++;
  }
}
