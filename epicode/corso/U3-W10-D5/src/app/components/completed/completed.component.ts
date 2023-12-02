import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {}
}
