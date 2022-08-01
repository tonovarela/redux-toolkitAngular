import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppStore } from '../store/app.store';

@Injectable({
  providedIn: 'root'
})
export class TodoService {



  constructor(private http: HttpClient,public store: AppStore) { }

  getAll() {    
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
}
