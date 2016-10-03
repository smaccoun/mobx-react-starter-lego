// @flow

import {observable, action, computed} from 'mobx'
import {Photo} from '../../types/Photos/PhotoType'

const samplePhotos = [
  new Photo('meow', 'http:meow'),
  new Photo('word', 'http:word')
]


class PhotoOrganizerState {
  @observable photos: Array<Photo> = []
  @observable filters: {search: string} = {search: ''}

  @computed get filteredPhotos(): Array<Photo> {
    let filters = this.filters;
    let filteredPhotos: Array<Photo> = this.photos.filter(photo => {
      return filters.search == photo.label;
    })

    return filteredPhotos;
  }

  constructor() {
    this.fetchPhotos().then(photos => this.setPhotos(photos))
  }

  @action setSearchFilter = (sFilter: string) => {
    this.filters.search = sFilter;
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
