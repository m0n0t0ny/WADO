import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  task: string = '';

  constructor(private todoService: TodoService) {}

  async addTask(task: string) {
    if (task.trim() !== '') {
      await this.todoService.addTask(task);
    }
  }
}
