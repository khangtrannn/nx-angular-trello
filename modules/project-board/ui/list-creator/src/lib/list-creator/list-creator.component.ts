import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'trello-list-creator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-creator.component.html',
  styleUrls: ['./list-creator.component.scss'],
})
export class ListCreatorComponent {}
