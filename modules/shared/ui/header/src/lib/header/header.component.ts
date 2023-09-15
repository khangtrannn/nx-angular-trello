import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { AvatarComponent } from './components/avatar/avatar.component';

@Component({
  selector: 'trello-header',
  standalone: true,
  imports: [CommonModule, SearchComponent, AvatarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
