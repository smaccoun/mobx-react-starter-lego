import React from 'react';
import {observer} from 'mobx-react'
import {toJS} from 'mobx'
import {store} from './PhotoOrganizerState'

import style from './style.css'

import FilterBar from '../FilterBar/FilterBar'
import PhotoGallery from '../PhotoGallery/PhotoGallery'

@observer
export default class PhotoOrganizer extends React.Component {

  setSelectFilter(filterName, filterValue){
    store.setSelectFilter(filterName, filterValue);
  }

  render(){

    return(
      <div className={style.container}>
        <div className={style.head}>
          <h1>Inner Space Photo Gallery</h1>
          <input type="file" onChange={store.loadBaseFile} />
        </div>
        <FilterBar
          filterBar={store.filterBar}
          setSelectFilter={this.setSelectFilter}
        />
        <div>
          <h3>Results: </h3>
          <PhotoGallery photos={store.filteredPhotos} />
        </div>
      </div>
    )
  }
}
