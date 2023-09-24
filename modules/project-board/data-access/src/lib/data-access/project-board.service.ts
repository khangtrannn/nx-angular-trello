import { Injectable } from '@angular/core';
import { ListContent, ListOrder, Task } from 'api-interfaces';
import { Observable, combineLatest, map } from 'rxjs';
import { ListApiService, TaskApiService, ListOrderApiService } from 'shared/data-access/api';

@Injectable({ providedIn: 'root' })
export class ProjectBoardService {
  constructor(
    private taskApiService: TaskApiService,
    private listApiService: ListApiService,
    private listOrderApiService: ListOrderApiService,
  ) {}

  getListContents(): Observable<ListContent[]> {
    return combineLatest([
      this.listApiService.getAll(),
      this.taskApiService.getGroupedByList(),
      this.listOrderApiService.getAll(),
    ]).pipe(
      map(([lists, tasks, listOrder]) => {
        return lists.map(
          (list) =>
            ({
              id: list.$id,
              name: list.name,
              tasks: this.applyListOrder(tasks.get(list.$id) || [], listOrder[0], list.$id), // TODO: refactor, just get first project for testing
            } as ListContent)
        );
      })
    );
  }

  getUpdatedListOrder(tasks: Task[]): string[] {
    return tasks.reduce((acc: string[], task: Task) => {
      acc.push(task.$id);
      return acc;
    }, []);
  }

  private applyListOrder(tasks: Task[], listOrder: ListOrder, listId: string): Task[] {
    tasks.forEach((task) => task.order = listOrder.orders[listId].indexOf(task.$id));
    return tasks.sort((prev, next) => prev.order - next.order);
  }
}
