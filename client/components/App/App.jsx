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
          <button onClick={appState.incCount}>+ count</button>
          <h3>{appState.count}</h3>
          <DevTools />
        </div>
    );
  }
}

export default App;
