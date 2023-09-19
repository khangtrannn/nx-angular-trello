import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskList } from 'api-interfaces';
import { TaskListComponent } from 'project-board/ui/task-list';
import { ListCreatorComponent } from 'modules/project-board/ui/list-creator/src';
import { CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'trello-project-board-canvas',
  standalone: true,
  imports: [CommonModule, CdkDropListGroup, CdkDropList, TaskListComponent, ListCreatorComponent],
  templateUrl: './project-board-canvas.component.html',
  styleUrls: ['./project-board-canvas.component.scss'],
})
export class ProjectBoardCanvasComponent {
  @Input() taskLists!: TaskList[];

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
