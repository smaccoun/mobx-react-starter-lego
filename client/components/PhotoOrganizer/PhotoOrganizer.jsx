import React from 'react';
import {observer} from 'mobx-react'
import {store} from './PhotoOrganizerState'

import FilterBar from '../FilterBar/FilterBar'

@observer
export default class PhotoOrganizer extends React.Component {

  render(){
    console.log(store.photos);
    console.log(store.filters);

    return(
      <div>
        <h1>Photo organizer!</h1>
        <div>
          <FilterBar />
          <p>Filters: {store.filters.search}</p>
          {store.filteredPhotos.map(photo => {
              console.log(photo);
              return(photo.label)})
          }
        </div>
      </div>
    )
  }
}
