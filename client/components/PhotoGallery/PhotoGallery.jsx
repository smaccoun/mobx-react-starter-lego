import React from 'react';
import style from './style.css'

import PhotoNail from '../PhotoNail/PhotoNail'

export default class PhotoGallery extends React.Component {
  render(){
    let {photos} = this.props;

    return(
      <div className={style.container}>
      {
        photos.map((photo, i) => {
          return(<PhotoNail photo={photo} />)
        })
      }
      </div>
    )
  }
}
