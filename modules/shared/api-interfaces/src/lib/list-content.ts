import { Task } from "./task";

export interface ListContent {
  id: string;
  name: string;
  tasks: Task[];
}