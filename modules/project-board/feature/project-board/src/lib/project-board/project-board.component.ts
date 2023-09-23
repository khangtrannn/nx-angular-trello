import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectBoardService } from 'project-board/data-access';
import { ProjectBoardCanvasComponent } from 'project-board/ui/project-board-canvas';
import { ProjectHeaderComponent } from 'project-board/ui/project-header';


@Component({
  selector: 'trello-project-board',
  standalone: true,
  imports: [CommonModule, ProjectHeaderComponent, ProjectBoardCanvasComponent],
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss'],
  providers: [ProjectBoardService],
})
export class ProjectBoardComponent {
  taskLists$ = this.projectBoardService.getAllTasks();
  constructor(private projectBoardService: ProjectBoardService) {}
}
