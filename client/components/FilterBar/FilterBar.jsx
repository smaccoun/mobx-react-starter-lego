// @flow
import React from 'react'
import style from './style.css'
import {store} from '../PhotoOrganizer/PhotoOrganizerState.js'

import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class FilterBar extends React.Component {

  setSearchField = (e: any) => {
    let searchField: string = e.target.value;
    store.setSearchFilter(searchField);
  }


  setFilter = (val: {label: string, value: string}, fName: string) => {
    console.log(val);
    console.log(`${val.label} ${fName}`);
  }

  render(){
    let {filterBar} = this.props;
    return(
      <div className={style.container}>
        <h3>Filters: </h3>
        <input onChange={this.setSearchField} />
        <div className={style.filterSelects}>
          {filterBar.map((filter, key) => {
              return(
                <label key={key}> {filter.name}
                  <Select
                      name={filter.name}
                      value={filter.selectedValue}
                      options={filter.options}
                      onChange={(val) => this.setFilter(val, filter.name)}
                  />
                </label>
              )
            })
          }
        </div>
      </div>
    )
  }
}
