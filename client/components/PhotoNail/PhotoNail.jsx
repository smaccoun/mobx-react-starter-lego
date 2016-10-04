import React from 'react';
import style from './style.css'

const PhotoNail = ({photo}) => {
  console.log(photo);
  return(
    <div className={style.container}>
      <div className={style.container__img}>
        {photo['File Name']}
      </div>
      <div className={style.metaContainer}>
        {photo.Description.substring(0,60)}
      </div>
    </div>
  )
}

export default PhotoNail;
