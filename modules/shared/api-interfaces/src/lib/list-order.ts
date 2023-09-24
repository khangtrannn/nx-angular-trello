import { Models } from "appwrite";

export interface ListOrder extends Models.Document {
  projectId: string;
  orders: Record<string, string[]>;
}