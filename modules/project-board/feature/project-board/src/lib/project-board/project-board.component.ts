import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskList } from 'api-interfaces';
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
  taskLists: TaskList[] = [
    { id: 'todo', name: 'To Do', tasks: [{ title: 'YEP singing' }, { title: 'Khang Tran' }] },
    { id: 'idea', name: 'Idea', tasks: [{ title: 'Personal growth management project, make your rest 2023 shine. Try your best!' }, { title: 'Go Abroad' }, { title: 'NX Workspace' }] },
  ];
}
