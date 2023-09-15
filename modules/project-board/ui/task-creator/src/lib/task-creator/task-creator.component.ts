import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'trello-task-creator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss'],
})
export class TaskCreatorComponent {}
