import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { TodosComponent } from './components/todos/todos.component';
import { CompletedComponent } from './components/completed/completed.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NavbarComponent,
    FormComponent,
    TodosComponent,
    CompletedComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
