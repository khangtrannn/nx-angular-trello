import { Route } from "@angular/router";

export const projectBoardRoutes: Route[] = [
  {
    path: '',
    loadComponent: async () => (await import('./project-board.component')).ProjectBoardComponent,
    children: [
      {
        path: 'c/:taskId/:taskSlug',
        loadComponent: async () => (await import('task-editor/feature/task-editor')).TaskEditorComponent,
      }
    ]
  },
];