import {
  Component,
  EnvironmentInjector,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskList } from 'api-interfaces';
import { TaskListComponent } from 'project-board/ui/task-list';
import { ListCreatorComponent } from 'modules/project-board/ui/list-creator/src';
import {
  CdkDragDrop,
  CdkDragEnter,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { TaskCreatorComponent } from 'project-board/ui/task-creator';

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
  @Input() taskLists: Map<string, Task[]> | null | undefined;

  constructor(private renderer: Renderer2) {}

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const transferredTask = event.container.data[event.currentIndex];
    }
  }

  enter(event: CdkDragEnter<Task[]>): void {
    // const dragPlaceholder = event.container.element.nativeElement.querySelector('.cdk-drag-placeholder');
    // const listCards = event.container.element.nativeElement.querySelector('trello-task-card');
    // this.renderer.appendChild(listCards, dragPlaceholder);
  }
}
