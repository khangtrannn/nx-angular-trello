import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskList } from 'api-interfaces';

@Component({
  selector: 'trello-project-board-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-board-canvas.component.html',
  styleUrls: ['./project-board-canvas.component.scss'],
})
export class ProjectBoardCanvasComponent {
  @Input() taskLists!: TaskList[];
}
