import { Injectable } from "@angular/core";
import { Todo } from "api-interfaces";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectBoardService {
  constructor(private http: HttpClient) {}

  getAllTodos(): Todo[] {
    throw new Error('Not implement!');
  }
}