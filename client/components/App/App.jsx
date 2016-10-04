import React, { Component } from 'react';
import style from './style.css'
import DevTools from 'mobx-react-devtools';
import {observer} from 'mobx-react'
import {appState} from './AppState'

import PhotoOrganizer from '../PhotoOrganizer/PhotoOrganizer'

@observer
class App extends Component {

  render() {

    return (
        <div>
          <PhotoOrganizer />
          <DevTools />
        </div>
    );
  }
}

export default App;
