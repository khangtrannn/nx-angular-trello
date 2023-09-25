import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ListOrder, Task } from 'api-interfaces';
import { ProjectBoardService } from 'project-board/data-access';
import { ProjectBoardCanvasComponent } from 'project-board/ui/project-board-canvas';
import { ProjectHeaderComponent } from 'project-board/ui/project-header';
import { shareReplay, switchMap } from 'rxjs';
import { ListOrderApiService, TaskApiService } from 'shared/data-access/api';

@Component({
  selector: 'trello-project-board',
  standalone: true,
  imports: [CommonModule, ProjectHeaderComponent, ProjectBoardCanvasComponent],
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss'],
})
export class ProjectBoardComponent {
  #destroyRef = inject(DestroyRef);
  listContents$ = this.projectBoardService.getListContents();
  listOrder$ = this.listOrderApiService.getSelectedProjectListOrder().pipe(shareReplay(1));

  constructor(
    private projectBoardService: ProjectBoardService, 
    private taskApiService: TaskApiService, 
    private listOrderApiService: ListOrderApiService
  ) {}

  onTaskTransferred(event: CdkDragDrop<Task[]>): void {
    const transferredTask = event.container.data[event.currentIndex];
    const transferredList = event.container.id;
    this.taskApiService.updateTask({ ...transferredTask, listId: transferredList }).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
    this.persistListOrder(event);
  }

  onTaskOrdered(event: CdkDragDrop<Task[]>): void {
    this.persistListOrder(event);
  }

  private persistListOrder(event: CdkDragDrop<Task[]>): void {
    this.listOrder$.pipe(switchMap((listOrder) => this.listOrderApiService.update(this.getUpdatedListOrderPayload(listOrder, event))), takeUntilDestroyed(this.#destroyRef)).subscribe();
  }

  private getUpdatedListOrderPayload(currentListOrder: ListOrder, event: CdkDragDrop<Task[]>): ListOrder {
    const updatedListOrder = { ...currentListOrder };
    updatedListOrder.orders[event.container.id] = this.projectBoardService.getUpdatedListOrder(event.container.data);
    updatedListOrder.orders[event.previousContainer.id] = this.projectBoardService.getUpdatedListOrder(event.previousContainer.data);
    return updatedListOrder;
  }
}
