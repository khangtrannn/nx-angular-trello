import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppwriteConfig } from 'appwrite';

@Component({
  selector: 'trello-project-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss'],
})
export class ProjectBoardComponent {
  constructor() {
    console.log(AppwriteConfig);
  }
}
