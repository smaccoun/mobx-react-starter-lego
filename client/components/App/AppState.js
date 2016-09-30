import { observable, action } from 'mobx';

class AppState {
  @observable isLoggedIn = false;

  constructor() {}

  @action
  login = () => {
    this.isLoggedIn = !this.isLoggedIn
  }
}

const appState = new AppState();

export {appState};
