import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from './components/todos/todos.component';
import { CompletedComponent } from './components/completed/completed.component';

const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'completed', component: CompletedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
