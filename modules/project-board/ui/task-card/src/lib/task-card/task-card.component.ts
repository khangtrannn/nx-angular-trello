import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'api-interfaces';

@Component({
  selector: 'trello-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task!: Task;
}
