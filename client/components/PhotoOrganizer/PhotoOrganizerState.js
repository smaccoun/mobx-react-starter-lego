// @flow

import {observable, action} from 'mobx'
import {Photo} from '../../types/Photos/PhotoType'

const samplePhotos = [
  new Photo('meow', 'http:meow'),
  new Photo('word', 'http:word')
]

console.log(samplePhotos);

class PhotoOrganizerState {
  @observable photos: Array<Photo> = []

  constructor() {
    this.fetchPhotos().then(photos => this.setPhotos(photos))
  }

  @action
  setPhotos = (photos: Array<Photo>) => {
    this.photos = photos;
  }

  fetchPhotos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(samplePhotos), 3000)
    })
  }


}

const store = new PhotoOrganizerState();
console.log(store);

module.exports = {store}
