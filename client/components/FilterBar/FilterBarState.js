// @flow

import {observable, computed, observer} from 'mobx'
import appState from '../PhotoOrganizer/PhotoOrganizerState'

console.log(appState)

@observer
class FilterBarState {

  @observable filterBar: Object = {}

  

  constructor(){ setDefaultFilterBar()}

  @action setDefaultFilterBar = () => {
    const filterOptions = this.distinctFilterOptions();
    let filterBar = - this.filterBar;

    Object.keys(filterOptions).forEach(f => {
      filterBar[f] = filterOptions[f].map(fo => {
        const notSelected = {option: fo, isSelected: false}
        const selected = {option: fo, isSelected: true}
        return fo.length > 0 ? notSelected : selected
      })
    })
  }

}

module.exports = new FilterBarState();
