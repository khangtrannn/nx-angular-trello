import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TaskList } from 'api-interfaces';
import { TaskCardComponent } from 'project-board/ui/task-card';
import { TaskCreatorComponent } from 'project-board/ui/task-creator';

import {
  CdkDrag
} from '@angular/cdk/drag-drop';


@Component({
  selector: 'trello-task-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, CdkDrag, TaskCardComponent, TaskCreatorComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() taskList!: TaskList;
}
