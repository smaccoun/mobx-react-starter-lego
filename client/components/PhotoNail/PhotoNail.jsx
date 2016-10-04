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
        <p><b>Layer 1:</b> {photo['Layer 1']}</p>
        <p>{photo.Description.substring(0,60)}</p>
      </div>
    </div>
  )
}

export default PhotoNail;
