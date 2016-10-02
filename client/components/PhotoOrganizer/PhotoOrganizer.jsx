import React from 'react';
import {observer} from 'mobx-react'
import {store} from './PhotoOrganizerState'

@observer
export default class PhotoOrganizer extends React.Component {

  render(){
    console.log(store.photos);

    return(
      <div>
        <h1>Photo organizer!</h1>
        <div>
          {store.photos.map(photo => {
              console.log(photo);
              return(photo.meta.label)})
          }
        </div>
      </div>
    )
  }
}
