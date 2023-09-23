import { Models } from "appwrite";

export interface Task extends Models.Document {
  title: string;
  cover?: string;
  listId: string;
}