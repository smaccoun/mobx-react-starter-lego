// @flow

import React from 'react'
import {store} from '../PhotoOrganizer/PhotoOrganizerState.js'

export default class FilterBar extends React.Component {

  setSearchField = (e: any) => {
    let searchField: string = e.target.value;
    store.setSearchFilter(searchField);
  }


  render(){
    return(
      <div>
        <input onChange={this.setSearchField} />
      </div>
    )
  }
}
