import React, { Component } from 'react';
import style from './style.css'
import DevTools from 'mobx-react-devtools';
import {observer} from 'mobx-react'
import {appState} from './AppState'

@observer
class App extends Component {

  render() {
    return (
        <div className={style.container}>
          <button onClick={appState.login}>Log in</button>
          <p>Logged in dog? {appState.isLoggedIn.toString()}</p>
          <DevTools />
        </div>
    );
  }
}

export default App;
