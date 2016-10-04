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

  setLayer1Filter = (e: any) => {
    let layer1Filter = e.target.value;
    console.log(layer1Filter);
    store.setLayer1Filter(layer1Filter)
  }

  render(){
    let {distinctFilterOptions} = this.props;
    return(
      <div className={style.container}>
        <h3>Filters: </h3>
        <input onChange={this.setSearchField} />
        <div>
          {Object.keys(distinctFilterOptions)
                .filter(f => (f == 'Layer 1' || f== 'Layer 2'))
                .map(fName => {
            let optionStr = Array.from(distinctFilterOptions[fName]).join(',')
            let optionsArr = Array.from(distinctFilterOptions[fName]);
            return(
              <div className={style.filterFields}>
                <label> {fName}
                  <select>
                    {optionsArr.map(option => {
                      return(<option>{option}</option>)
                    })}
                  </select>
                </label>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
