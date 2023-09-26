import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskCreatorTextareaComponent } from '../task-creator-textarea/task-creator-textarea.component';

@Component({
  selector: 'trello-task-creator',
  standalone: true,
  imports: [CommonModule, TaskCreatorTextareaComponent],
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss'],
})
export class TaskCreatorComponent {
  textareaMode = false;

  toggleTextareaMode(): void {
    this.textareaMode = !this.textareaMode;
  }
}
