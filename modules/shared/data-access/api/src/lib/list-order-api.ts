import { ListOrder, Task } from 'api-interfaces';
import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { ID, Models, appwriteConfig, databases } from 'appwrite';

@Injectable({ providedIn: 'root' })
export class ListOrderApiService {
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

  update(listOrder: ListOrder): Observable<Models.Document> {
    const payload = {
      projectId: listOrder.projectId,
      orders: JSON.stringify(listOrder.orders),
    }
    return from(databases.updateDocument(appwriteConfig.databaseId, appwriteConfig.listOrdersCollectionId, listOrder.$id, payload));
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
