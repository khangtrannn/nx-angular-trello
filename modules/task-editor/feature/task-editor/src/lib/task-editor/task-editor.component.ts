import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trello-task-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss'],
})
export class TaskEditorComponent {}
