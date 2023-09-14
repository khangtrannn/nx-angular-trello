import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'trello-task-creator',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss'],
})
export class TaskCreatorComponent {}
