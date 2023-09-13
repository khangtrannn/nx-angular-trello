import { State } from "./state";

export interface Todo {
  title: string;
  state: State;
  image?: string;
}