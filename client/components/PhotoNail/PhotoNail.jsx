import React from 'react';
import style from './style.css'

const PhotoNail = ({photo}) => {

  photo.meta['Label 1']

  return(
    <div className={style.container}>
      <div className={style.container__img}>
        {photo['File Name']}
      </div>
      <div className={style.metaContainer}>
        <p><b>Layer 1:</b>{photo.meta['Layer 1']}</p>
        <p><b>Layer 2:</b>{photo.meta['Layer 2']}</p>
        <p>{`${photo.meta.Description.substring(0,30)}...`}</p>
      </div>
    </div>
  )
}

export default PhotoNail;
