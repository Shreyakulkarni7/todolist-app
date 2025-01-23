import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: { text: string; isEditing: boolean }[] = [];
  newTodo = '';

  // Add a new task
  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo.trim(), isEditing: false });
      this.newTodo = '';
    }
  }

  // Enable editing mode for a task
  editTodo(index: number) {
    this.todos[index].isEditing = true;
  }

  // Save the edited task
  saveTodo(index: number) {
    if (this.todos[index].text.trim()) {
      this.todos[index].isEditing = false;
    } else {
      alert('Task cannot be empty!');
    }
  }

  // Cancel editing
  cancelEdit(index: number) {
    this.todos[index].isEditing = false;
  }

  // Remove a task
  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
