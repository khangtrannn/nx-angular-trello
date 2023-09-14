import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: async () =>
      (await import('project-board')).ProjectBoardComponent,
  },
];
