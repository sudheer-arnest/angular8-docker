import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Custumvalidator } from 'src/app/validators/custum.validator';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, AfterViewInit {
  todos: any = [{ id: 1, todo: "sudheer", isCompleted: true, date: new Date() }, { id: 2, todo: "wash clothes", isCompleted: false, date: new Date() }, { id: 3, todo: "lokesh", isCompleted: true, date: new Date() }, { id: 4, todo: "play cricket", isCompleted: false, date: new Date() }];
  isEditing: boolean = false;
  searchItems = [];
  editId = null
  todoForm = new FormGroup({
    todo: new FormControl('', [Validators.required, Validators.minLength(3),Custumvalidator]),
  })
  constructor() { }

  @ViewChild('todoInput', { static: false }) todoInputRef!: ElementRef;

  ngOnInit() {
    this.searchItems = this.todos
  }
  // ngDoCheck(): void {
  //   console.log('someThing is Changed in compoent')
  // }
  ngAfterViewInit(): void {
    this.todoInputRef.nativeElement.focus()
  }
  onAddOrEditTodo() {
    if (this.todoForm.valid) {
      if (this.isEditing && this.editId != null) {
        const index = this.todos.findIndex((todo: any) => todo.id === this.editId)
        if (index > -1) {
          this.todos[index].todo = this.todoForm.value.todo;
          this.editId = null;
          this.isEditing = false
          this.todoForm.reset();
        }
      } else {
        this.todos.push({ id: Date.now(), todo: this.todoForm.value.todo, isCompleted: false, date: new Date() })
        this.todoForm.reset();
      }
    } else {
      console.log("Invalid Form data")
    }
  }
  handleDelete(id: any) {
    this.searchItems = this.searchItems.filter((todo: any) => todo.id != id)
  }
  handleTodoStatus(todo: any) {
    todo.isCompleted = !todo.isCompleted
  }
  handleEdit(todo: any) {
    this.todoForm.setValue({ todo: todo.todo })
    this.isEditing = true
    this.editId = todo.id
  }
  handleSearch(value: string): void {
    if (!value) {
      this.searchItems = this.todos
      return
    }
    this.searchItems = this.todos.filter(todo =>
      todo.todo.toLowerCase().includes(value)
    );
  }

}
