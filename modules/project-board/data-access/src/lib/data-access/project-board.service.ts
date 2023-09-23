import { Injectable } from "@angular/core";
import { Task } from "api-interfaces";
import { Observable, flatMap, from, map, mergeAll, of, reduce } from "rxjs";
import { appwriteConfig, databases } from "appwrite";

@Injectable()
export class ProjectBoardService {
  getAllTasks(): Observable<Map<string, Task[]>> {
    return from(databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.todosCollectionId))
      .pipe(
        map((data) =>  data.documents as unknown as Task[]),
        mergeAll(),
        reduce((acc, task) => {
          acc.set(task.listId, (acc.get(task.listId) ?? []).concat(task));
          return acc;
        }, new Map<string, Task[]>),
      );
  }
}