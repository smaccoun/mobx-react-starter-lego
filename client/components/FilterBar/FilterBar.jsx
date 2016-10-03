// @flow
import React from 'react'
import style from './style.css'
import {store} from '../PhotoOrganizer/PhotoOrganizerState.js'

import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

export default class FilterBar extends React.Component {

  setSearchField = (e: any) => {
    let searchField: string = e.target.value;
    store.setSearchFilter(searchField);
  }

  setLabelFilter = (e: any) => {
    let labelFilter = e.target.value;
    console.log(labelFilter);
    store.setLabelFilter(labelFilter)
  }

  render(){
    return(
      <div className={style.container}>
        <input onChange={this.setSearchField} />
        <label> label
          <select value={store.filters.label} onChange={this.setLabelFilter}>
            <option></option>
            <option>meow</option>
            <option>word</option>
          </select>
        </label>
      </div>
    )
  }
}
