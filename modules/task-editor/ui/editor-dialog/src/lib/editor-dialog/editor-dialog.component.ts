import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'trello-editor-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editor-dialog.component.html',
  styleUrls: ['./editor-dialog.component.scss'],
})
export class EditorDialogComponent implements OnInit {
  #destroyRef = inject(DestroyRef);
  constructor(private dialogRef: MatDialogRef<EditorDialogComponent>, private router: Router) {}

  ngOnInit(): void {
    this.dialogRef.beforeClosed().pipe(takeUntilDestroyed(this.#destroyRef)).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
