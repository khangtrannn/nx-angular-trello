import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { EditorDialogComponent } from 'task-editor/feature/editor-dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'trello-task-editor',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss'],
})
export class TaskEditorComponent implements OnInit {
  #destroyRef = inject(DestroyRef);

  constructor(private dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe(() => {
      this.dialog.open(EditorDialogComponent, {
        panelClass: 'task-editor-dialog',
        autoFocus: false,
      });
    });
  }
}
