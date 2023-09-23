import { Injectable } from '@angular/core';
import { List } from 'api-interfaces';
import { appwriteConfig, databases } from 'appwrite';
import { Observable, from, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListApiService {
  getAll(): Observable<List[]> {
    return from(
      databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.listsCollectionId,
      )
    ).pipe(map((data) => data.documents as unknown as List[]));
  }
}
