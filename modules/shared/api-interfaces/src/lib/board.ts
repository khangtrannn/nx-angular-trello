import { Task } from "./task";

export interface Board {
  taskLists: Map<string, Task[]>;
}