export const AppwriteConfig = {
  endpoint: process.env['NX_APPWRITE_ENDPOINT'],
  projectId: process.env['NX_APPWRITE_PROJECT_ID'],
  databaseId: process.env['NX_DATABASE_ID'],
  todosCollectionId: process.env['NX_TODOS_COLLECTION_ID'],
}