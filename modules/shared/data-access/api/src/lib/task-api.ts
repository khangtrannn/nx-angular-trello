import { ListOrderApiService } from 'shared/data-access/api';
import { Injectable } from '@angular/core';
import { Task } from 'api-interfaces';
import { Models, appwriteConfig, databases, ID } from 'appwrite';
import { Observable, from, map, mergeAll, reduce, tap } from 'rxjs';
import { Slugify } from 'modules/shared/util/src';

@Injectable({ providedIn: 'root' })
export class TaskApiService {
  getGroupedByList(): Observable<Map<string, Task[]>> {
    return this.getAllTasks().pipe(
      mergeAll(),
      reduce((acc, task) => {
        acc.set(task.listId, (acc.get(task.listId) ?? []).concat(task));
        return acc;
      }, new Map<string, Task[]>())
    );
  }

  updateTask(task: Task): Observable<Models.Document> {
    const payload: Partial<Task> = {
      listId: task.listId,
    };

    return from(
      databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.tasksCollectionId,
        task.$id,
        payload
      )
    );
  }

  createTask(title: string, listId: string): Observable<Models.Document> {
    const payload = {
      title,
      listId,
      slug: Slugify.transform(title),
    };

    return from(
      databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.tasksCollectionId,
        ID.unique(),
        payload
      )
    );
  }

  private getAllTasks(): Observable<Task[]> {
    return from(
      databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.tasksCollectionId
      )
    ).pipe(map((data) => data.documents as unknown as Task[]));
  }
}
