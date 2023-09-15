import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TaskCardComponent } from 'project-board/ui/task-card';
import { TaskCreatorComponent } from 'project-board/ui/task-creator';
import { TaskList } from 'api-interfaces';

@Component({
  selector: 'trello-task-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, TaskCardComponent, TaskCreatorComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() taskList!: TaskList;
}
