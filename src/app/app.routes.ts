import { Route } from '@angular/router';
import { projectBoardRoutes } from 'project-board/feature/project-board';

export const appRoutes: Route[] = [
  {
    path: '',
    children: projectBoardRoutes,
  },
];
