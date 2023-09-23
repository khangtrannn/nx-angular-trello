import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Task } from 'api-interfaces';
import { ProjectBoardService } from 'project-board/data-access';
import { ProjectBoardCanvasComponent } from 'project-board/ui/project-board-canvas';
import { ProjectHeaderComponent } from 'project-board/ui/project-header';
import { TaskApiService } from 'shared/data-access/api';

@Component({
  selector: 'trello-project-board',
  standalone: true,
  imports: [CommonModule, ProjectHeaderComponent, ProjectBoardCanvasComponent],
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss'],
})
export class ProjectBoardComponent {
  listContents$ = this.projectBoardService.getListContents();
  #destroyRef = inject(DestroyRef);

  constructor(private projectBoardService: ProjectBoardService, private taskApiService: TaskApiService) {}

  onTaskChanged(task: Task): void {
    this.taskApiService.updateTask(task).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
  }
}
