import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(public todoService: TodoService) {}

  async completeTask(task: string) {
    await this.completeTask(task);
  }

  async deleteTask(task: string) {
    await this.deleteTask(task);
  }

  ngOnInit(): void {}
}
