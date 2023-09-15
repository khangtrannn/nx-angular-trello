import { Injectable } from "@angular/core";
import { Task } from "api-interfaces";
import { Observable, from, map, of } from "rxjs";
import { appwriteConfig, databases } from "appwrite";

@Injectable()
export class ProjectBoardService {
  getAllTodos(): Observable<Task[]> {
    return from(databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.todosCollectionId))
      .pipe(map((data) => data.documents as unknown as Task[]));
  }
}