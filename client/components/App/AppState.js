import { observable } from 'mobx';

class AppState {
  @observable isLoggedIn = false;

  constructor() {

  }
}

const appState = new AppState();

console.log(appState);

export {appState};
