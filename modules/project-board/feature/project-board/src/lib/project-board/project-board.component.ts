import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectBoardService } from 'project-board/data-access';
import { TaskListComponent } from 'project-board/ui/task-list';

@Component({
  selector: 'trello-project-board',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss'],
  providers: [ProjectBoardService],
})
export class ProjectBoardComponent {
  todo$ = this.projectBoardService.getAllTodos();

  constructor(private projectBoardService: ProjectBoardService) {}
}
