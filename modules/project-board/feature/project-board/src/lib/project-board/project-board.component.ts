import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectBoardService } from 'project-board/data-access';
import { TaskListComponent } from 'project-board/ui/task-list';
import { ProjectHeaderComponent } from 'project-board/ui/project-header';
import { ProjectBoardCanvasComponent } from 'project-board/ui/project-board-canvas';
import { TaskList } from 'api-interfaces';

@Component({
  selector: 'trello-project-board',
  standalone: true,
  imports: [CommonModule, TaskListComponent, ProjectHeaderComponent, ProjectBoardCanvasComponent],
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss'],
  providers: [ProjectBoardService],
})
export class ProjectBoardComponent {
  taskLists: TaskList[] = [
    { name: 'To Do', tasks: [{ title: '' }] },
    { name: 'Idea', tasks: [{ title: '' }] },
  ];

  constructor(private projectBoardService: ProjectBoardService) {}
}
