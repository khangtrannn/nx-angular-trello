export const appwriteConfig = {
  endpoint: process.env['NX_APPWRITE_ENDPOINT']!,
  projectId: process.env['NX_APPWRITE_PROJECT_ID']!,
  databaseId: process.env['NX_DATABASE_ID']!,
  tasksCollectionId: process.env['NX_TASKS_COLLECTION_ID']!,
  listsCollectionId: process.env['NX_LISTS_COLLECTION_ID']!,
  listOrdersCollectionId: process.env['NX_LIST_ORDERS_COLLECTION_ID']!,
};