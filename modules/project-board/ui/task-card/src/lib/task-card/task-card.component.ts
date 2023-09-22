import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'api-interfaces';
import { CdkDrag, CdkDragPlaceholder, CdkDragStart, DragRef } from '@angular/cdk/drag-drop';

@Component({
  selector: 'trello-task-card',
  standalone: true,
  imports: [CommonModule, CdkDrag, CdkDragPlaceholder],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task!: Task;

  height: string | number = 'auto';

  dragStarted(event: CdkDragStart): void {
    /**
     * Adjust cdk-drag-preview transform
     * Cannot set transform directly via .cdk-drag-preview because it will override existing translate3d
     * 
     * TODO: investigate the possibility of setting _intialTransform once
     */ 
    (event.source._dragRef as any)._initialTransform = 'rotate(4deg)';
  }
}
