import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TaskApiService } from 'shared/data-access/api';
import { TaskCreatorTextareaComponent } from '../task-creator-textarea/task-creator-textarea.component';

@Component({
  selector: 'trello-task-creator',
  standalone: true,
  imports: [CommonModule, TaskCreatorTextareaComponent],
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss'],
})
export class TaskCreatorComponent {
  #destroyRef = inject(DestroyRef);
  @Input() listId!: string;
  textareaMode = false;

  constructor(private taskApiService: TaskApiService) {}

  toggleTextareaMode(): void {
    this.textareaMode = !this.textareaMode;
  }

  handleCreateTask(title: string): void {
    this.taskApiService
      .createTask(title, this.listId)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {
        this.toggleTextareaMode();
      });
  }
}
