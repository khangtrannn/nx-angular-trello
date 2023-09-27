import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'trello-task-creator-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-creator-textarea.component.html',
  styleUrls: ['./task-creator-textarea.component.scss'],
})
export class TaskCreatorTextareaComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<string>();

  @ViewChild('taskCreator', { static: true }) taskCreatorElement!: ElementRef<HTMLTextAreaElement>;
  newTaskInput = '';

  ngOnInit(): void {
    this.focusTaskCreator();
  }

  onBlur(): void {
    if (this.newTaskInput === '') {
      this.close.emit();
    }
  }

  onSubmit(): void {
    this.handleOnSubmit();
  }

  onEnter(event: Event): void {
    event.preventDefault();
    this.handleOnSubmit();
  }

  private handleOnSubmit(): void {
    if (this.newTaskInput) {
      this.blurTaskCreator();
      this.submit.emit(this.newTaskInput);
    }
  }

  private focusTaskCreator(): void {
    this.taskCreatorElement.nativeElement.focus();
  }

  private blurTaskCreator(): void {
    this.taskCreatorElement.nativeElement.blur();
  }
}
