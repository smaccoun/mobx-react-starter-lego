// @flow

import { observable, action, computed } from 'mobx';
import {map, toJS} from 'mobx'

class AppState {
  @observable count: number = 0;

  constructor() {}

  @action
  incCount = () => {
    this.count += 1;
  }

}

const appState = new AppState();

export {appState};
