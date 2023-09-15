import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskList } from 'api-interfaces';
import { TaskListComponent } from 'project-board/ui/task-list';
import { ListCreatorComponent } from 'modules/project-board/ui/list-creator/src';

@Component({
  selector: 'trello-project-board-canvas',
  standalone: true,
  imports: [CommonModule, TaskListComponent, ListCreatorComponent],
  templateUrl: './project-board-canvas.component.html',
  styleUrls: ['./project-board-canvas.component.scss'],
})
export class ProjectBoardCanvasComponent {
  @Input() taskLists!: TaskList[];
}
