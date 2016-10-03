// @flow

import {observable, action, computed, toJS} from 'mobx'
import {Photo} from '../../types/Photos/PhotoType'

const samplePhotos = [
  new Photo('meow', 'http:meow'),
  new Photo('word', 'http:word')
]


class PhotoOrganizerState {
  @observable baseFile: ?File = null;
  @observable photos: Array<Object> = []
  @observable filters: {search: string,label: string} =
  {
    search: '',
    label: 'meow'
  }


  @computed get filterString(): string {
    return Object.keys(this.filters)
                  .map(k => this.filters[k])
                  .filter(f => f)
                  .join(' && ')
  }

  @computed get filteredPhotos(): Array<Photo> {
    let filters = this.filters;
    let filteredPhotos: Array<Photo> = this.photos.filter(photo => {
      const searchMatch = !filters.search ||
            (photo.Description.toLowerCase().includes(filters.search.toLowerCase()));
      // const labelMatch = !filters.label || (filters.label == photo.label);
      return searchMatch;

    })

    return filteredPhotos;
  }

  constructor() {
    // this.fetchPhotos().then(photos => this.setPhotos(photos))
  }


  @action loadBaseFile = (evt: any) => {
    let baseFile = evt.target.files[0]
    this.baseFile = baseFile;
    this.loadPhotosFromFile(baseFile);
  }

  @action
  loadPhotosFromFile = (baseFile: File) => {
    console.log(baseFile);
    const tPhotos: Array<Object> = [];
    const setPhotos = this.setPhotos;

    Papa.parse(baseFile, {
      header: true,
      dynamicTyping: true,
      complete: function(results) {
        console.log('GOT SOME DATA!!!!')
        console.log(results.data);
        results.data.forEach((d, i) => {
          console.log(toJS(d))
          tPhotos.push(toJS(d));
        })

        console.log(tPhotos);
        setPhotos(tPhotos)
      }
    });
  }

  @action setSearchFilter = (sFilter: string) => {
    this.filters.search = sFilter;
  }

  @action setLabelFilter = (lFilter: string) => {
    this.filters.label = lFilter;
  }

  @action
  setPhotos = (photos: Array<Object>) => {
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
