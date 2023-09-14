import { Client, Account, Databases, ID, Models } from 'node_modules/appwrite';
import { appwriteConfig } from './appwrite-config';

const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

const account = new Account(client);
const databases = new Databases(client);

export { account, databases, ID, Models };
