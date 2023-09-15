import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'trello-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [MatIconModule],
  standalone: true,
})
export class SearchComponent {}