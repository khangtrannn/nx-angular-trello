import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trello-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {}
