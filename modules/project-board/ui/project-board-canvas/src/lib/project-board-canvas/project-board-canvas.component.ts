import {
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  Output,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ProjectBoardService } from 'project-board/data-access';

import {
  CdkDragDrop,
  CdkDragEnter,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ListContent, Task } from 'api-interfaces';
import { ListCreatorComponent } from 'modules/project-board/ui/list-creator/src';
import { TaskCreatorComponent } from 'project-board/ui/task-creator';
import { TaskListComponent } from 'project-board/ui/task-list';

@Component({
  selector: 'trello-project-board-canvas',
  standalone: true,
  imports: [
    CommonModule,
    CdkDropListGroup,
    CdkDropList,
    MatIconModule,
    TaskListComponent,
    ListCreatorComponent,
    TaskCreatorComponent,
  ],
  templateUrl: './project-board-canvas.component.html',
  styleUrls: ['./project-board-canvas.component.scss'],
})
export class ProjectBoardCanvasComponent {
  @Input() listContents: ListContent[] | undefined | null;
  @Output() taskTransferred = new EventEmitter<CdkDragDrop<Task[]>>();
  @Output() taskOrdered = new EventEmitter<CdkDragDrop<Task[]>>();

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.taskOrdered.emit(event);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.taskTransferred.emit(event);
    }
  }

  enter(event: CdkDragEnter<Task[]>): void {
    // const dragPlaceholder = event.container.element.nativeElement.querySelector('.cdk-drag-placeholder');
    // const listCards = event.container.element.nativeElement.querySelector('trello-task-card');
    // this.renderer.appendChild(listCards, dragPlaceholder);
  }
}
