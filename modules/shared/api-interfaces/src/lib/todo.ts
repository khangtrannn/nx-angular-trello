import { Models } from "appwrite";
import { State } from "./state";

export interface Todo extends Models.Document {
  title: string;
  state: State;
  image?: string;
}