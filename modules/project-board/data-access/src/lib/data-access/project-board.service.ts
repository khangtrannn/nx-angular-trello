import { Injectable } from '@angular/core';
import { ListContent } from 'api-interfaces';
import { Observable, combineLatest, map } from 'rxjs';
import { ListApiService, TaskApiService } from 'shared/data-access/api';

@Injectable({ providedIn: 'root' })
export class ProjectBoardService {
  constructor(
    private taskApiService: TaskApiService,
    private listApiService: ListApiService
  ) {}

  getListContents(): Observable<ListContent[]> {
    return combineLatest([
      this.listApiService.getAll(),
      this.taskApiService.getGroupedByList(),
    ]).pipe(
      map(([lists, tasks]) => {
        return lists.map(
          (list) =>
            ({
              id: list.$id,
              name: list.name,
              tasks: tasks.get(list.$id) || [],
            } as ListContent)
        );
      })
    );
  }
}
