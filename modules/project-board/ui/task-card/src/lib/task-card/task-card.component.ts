import { CdkDrag, CdkDragEnd, CdkDragPlaceholder, CdkDragStart } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, Input, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Task } from 'api-interfaces';

const CDK_DRAGGING_CLASS = 'cdk-drag-dragging';

@Component({
  selector: 'trello-task-card',
  standalone: true,
  imports: [CommonModule, CdkDrag, CdkDragPlaceholder, RouterModule],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task!: Task;

  constructor(private renderer: Renderer2, private router: Router) {}

  dragStarted(event: CdkDragStart): void {
    /**
     * Adjust cdk-drag-preview transform
     * Cannot set transform directly via .cdk-drag-preview because it will override existing translate3d
     * 
     * TODO: investigate the possibility of setting _initialTransform once
     */ 
    (event.source._dragRef as any)._initialTransform = 'rotate(4deg)';
    this.renderer.addClass(document.body, CDK_DRAGGING_CLASS);
  }

  dragEnded(event: CdkDragEnd): void {
    this.renderer.removeClass(document.body, CDK_DRAGGING_CLASS);
  }

  onTaskOpened(): void {
    this.router.navigate([`/c/${this.task.$id}/${this.task.slug}`]);
  }
}
