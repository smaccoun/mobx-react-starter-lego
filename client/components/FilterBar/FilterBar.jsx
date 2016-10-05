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


  selectFilter = (val: {label: string, value: string}, fName: string) => {
    val = val || {label: '', value: ''}
    this.props.setSelectFilter(fName, val.label)
  }

  render(){
    let {filterBar} = this.props;
    return(
      <div className={style.container}>
        <div className={`${style.innerAddon}`}>
          <span className={`glyphicon glyphicon-search ${style.searchIcon}`}></span>
          <input type="text" className="form-control" onChange={this.setSearchField} />
        </div>
        <div className={style.filterSelects}>
          {filterBar.map((filter, key) => {
              return(
                <label key={key} className={style.filterSelect}> {filter.name}
                  <Select
                      name={filter.name}
                      value={filter.selectedValue}
                      options={filter.options}
                      onChange={(val) => this.selectFilter(val, filter.name)}
                  />
                </label>
              )
            })
          }
          <button className='btn btn-primary' style={{marginLeft: '15px'}}
            onClick={this.props.clearAllFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    )
  }
}
