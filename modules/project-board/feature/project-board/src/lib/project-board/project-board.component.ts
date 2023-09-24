import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ListOrder, Task } from 'api-interfaces';
import { ProjectBoardService } from 'project-board/data-access';
import { ProjectBoardCanvasComponent } from 'project-board/ui/project-board-canvas';
import { ProjectHeaderComponent } from 'project-board/ui/project-header';
import { filter, mergeAll, switchMap } from 'rxjs';
import { TaskApiService, ListOrderApiService } from 'shared/data-access/api';

@Component({
  selector: 'trello-project-board',
  standalone: true,
  imports: [CommonModule, ProjectHeaderComponent, ProjectBoardCanvasComponent],
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss'],
})
export class ProjectBoardComponent {
  // TODO: just for test
  readonly PROJECT_ID = 'demo';

  #destroyRef = inject(DestroyRef);
  listContents$ = this.projectBoardService.getListContents();
  listOrders$ = this.listOrderApiService.getAll();

  constructor(
    private projectBoardService: ProjectBoardService, 
    private taskApiService: TaskApiService, 
    private listOrderApiService: ListOrderApiService
  ) {}

  onTaskTransferred(event: CdkDragDrop<Task[]>): void {
    const transferredTask = event.container.data[event.currentIndex];
    const transferredList = event.container.id;
    this.taskApiService.updateTask({ ...transferredTask, listId: transferredList }).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
  }

  onTaskOrdered(event: CdkDragDrop<Task[]>): void {
    const newListOrder = this.projectBoardService.getUpdatedListOrder(event.container.data);

    this.listOrders$
      .pipe(
        mergeAll(),
        filter((listOrder) => listOrder.projectId === this.PROJECT_ID),
        switchMap((listOrder) => {
          listOrder.orders[event.container.id] = newListOrder;
          return this.listOrderApiService.update(listOrder);
        })
      )
      .subscribe();
  }
}
