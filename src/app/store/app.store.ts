import { Selector } from 'reselect';
import { Observable } from 'rxjs';
import { Store, Action } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Injectable } from '@angular/core';
import reducers, { RootState } from './reducers';

@Injectable({ providedIn: 'root' })
export class AppStore {
  private readonly storeInstance: Store;

  constructor() {
    this.storeInstance = configureStore({
      reducer: reducers
    });
    
    
    
  }

  select<T>(selector: Selector<RootState, T>) {
    return new Observable<T>(subscriber => {
      subscriber.next(selector(this.storeInstance.getState()));
      const unsubscribe = this.storeInstance.subscribe(() => {
        subscriber.next(selector(this.storeInstance.getState()));
      });
      return unsubscribe;
    });
  }

  getState<T>(selector: Selector<RootState, T>) {
    return selector(this.storeInstance.getState());
  }
  

  dispatch(action: Action) {
    this.storeInstance.dispatch(action);
  }
}
