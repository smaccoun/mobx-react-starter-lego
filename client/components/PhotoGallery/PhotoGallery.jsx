import React from 'react';
import style from './style.css'

import PhotoNail from '../PhotoNail/PhotoNail'


export default class PhotoGallery extends React.Component {

  render(){
    const {photos} = this.props;

    return(
      <div className={style.container}>
        <PhotoList photos={photos} />
      </div>
    )
  }
}

const PhotoList = ({photos, store}) => {
  return(
    <div>
    {
       photos.map((photo, i) => {
         return(<PhotoNail photo={photo} store={store}/>)
        })
     }
   </div>
 )
}
