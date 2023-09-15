import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Task, TaskList } from 'api-interfaces';
import { TaskCardComponent } from 'project-board/ui/task-card';
import { TaskCreatorComponent } from 'project-board/ui/task-creator';

import {
  CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';


@Component({
  selector: 'trello-task-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, CdkDropList, CdkDrag, TaskCardComponent, TaskCreatorComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() taskList!: TaskList;
  @Input() listIds!: string[];

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
