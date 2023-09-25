import { Injectable } from '@angular/core';
import { ListOrder } from 'api-interfaces';
import { appwriteConfig, databases, ID, Models } from 'appwrite';
import { filter, from, map, mergeAll, Observable } from 'rxjs';

// TODO: just for test
const CURRENT_PROJECT_ID = 'demo';

@Injectable({ providedIn: 'root' })
export class ListOrderApiService {
  // TODO: apply caching
  getAll(): Observable<ListOrder[]> {
    return from(
      databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.listOrdersCollectionId
      )
    ).pipe(
      map((data) => data.documents as unknown as ListOrder[]),
      map((listOrders) =>
        listOrders.map((listOrder) => ({
          ...listOrder,
          orders: JSON.parse(listOrder.orders as unknown as string),
        }))
      )
    );
  }

  getSelectedProjectListOrder(): Observable<ListOrder> {
    return this.getAll().pipe(
      mergeAll(),
      filter((listOrder) => listOrder.projectId === CURRENT_PROJECT_ID)
    );
  }

  update(listOrder: ListOrder): Observable<Models.Document> {
    const payload = {
      projectId: listOrder.projectId,
      orders: JSON.stringify(listOrder.orders),
    };
    return from(
      databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.listOrdersCollectionId,
        listOrder.$id,
        payload
      )
    );
  }

  create(listOrder: ListOrder): Observable<Models.Document> {
    const payload = {
      projectId: listOrder.projectId,
      orders: JSON.stringify(listOrder.orders),
    };

    return from(
      databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.listOrdersCollectionId,
        ID.unique(),
        payload
      )
    );
  }
}
