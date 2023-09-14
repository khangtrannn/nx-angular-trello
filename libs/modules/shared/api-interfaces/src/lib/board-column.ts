import { State } from './state';
import { Todo } from './todo';

export interface BoardColumn {
  state: State;
  todos: Todo[];
}
