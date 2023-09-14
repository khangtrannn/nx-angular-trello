import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { TaskCardComponent } from 'project-board/ui/task-card';

@Component({
  selector: 'trello-task-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  title: string = 'To Do';
}
