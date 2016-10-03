import React from 'react';
import {observer} from 'mobx-react'
import {toJS} from 'mobx'
import {store} from './PhotoOrganizerState'

import FilterBar from '../FilterBar/FilterBar'

@observer
export default class PhotoOrganizer extends React.Component {

  render(){
    console.log(toJS(store.photos));
    console.log(toJS(store.filters));
    console.log(toJS(store.filteredPhotos));

    return(
      <div>
        <h1>Photo organizer!</h1>
        <div>
          <input type="file" onChange={store.loadBaseFile} />
          <FilterBar />
          <p>Filters: {store.filterString}</p>
          <div>
            <h3>Results: </h3>
            <ul>
            {store.filteredPhotos.map(photo => {
                console.log(toJS(photo));
                console.log(photo.Description);
                return(<li>{photo.Description}</li>)
              })
            }
          </ul>
          </div>
        </div>
      </div>
    )
  }
}
