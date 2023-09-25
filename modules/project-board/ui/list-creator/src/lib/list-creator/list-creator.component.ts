import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'trello-list-creator',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-creator.component.html',
  styleUrls: ['./list-creator.component.scss'],
})
export class ListCreatorComponent {}
