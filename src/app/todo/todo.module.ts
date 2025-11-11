import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from '../components/todo/todo.component';
import { SearchComponent } from '../components/search/search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodoComponent,SearchComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule
  ]
})
export class TodoModule { }
