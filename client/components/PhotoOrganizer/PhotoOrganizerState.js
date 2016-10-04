// @flow

import {observable, action, computed, toJS} from 'mobx'
import {Photo} from '../../types/Photos/PhotoType'

const samplePhotos = [
  new Photo('meow', 'http:meow'),
  new Photo('word', 'http:word')
]


class PhotoOrganizerState {
  @observable baseJson: Array<Object> = [];
  @observable filters: {search: string, layer1: string} =
  {
    search: '',
    layer1: 'Muscle'
  }


  @computed get filterString(): string {
    return Object.keys(this.filters)
                  .map(k => this.filters[k])
                  .filter(f => f)
                  .join(' && ')
  }

  @computed get distinctFilterOptions(): Object {
    const distinctFilters = {column: Set}
    let data = this.baseJson;
    data.forEach(row => {
      Object.keys(row).forEach(column => {
        const val = row[column]
        if(column in distinctFilters){
          distinctFilters[column].add(val)
        }else{
          distinctFilters[column] = new Set().add(val)
        }
      })
    })

    console.log(distinctFilters)

    return distinctFilters
  }

  @computed get filteredRows(): Array<Object> {
    let filters = this.filters;
    let filteredRows: Array<Object> = this.baseJson.filter(row => {
      const searchMatch = !filters.search ||
            (row.Description.toLowerCase().includes(filters.search.toLowerCase()));
      console.log(row['Layer 1'])
      const layer1Match = !filters.layer1 || (filters.layer1 == row['Layer 1']);
      return searchMatch && layer1Match;

    })

    return filteredRows;
  }

  @computed get filteredPhotos(): Array<Photo> {
    return this.filteredRows.map(row => {
      let label = row.Description;
      let fileUrl = row['File Name']
      return new Photo(label, fileUrl)
    })
  }

  constructor() {
    // this.fetchPhotos().then(photos => this.setPhotos(photos))
  }


  @action loadBaseFile = (evt: any) => {
    let baseFile = evt.target.files[0]
    const setBaseJson = this.setBaseJson;

    Papa.parse(baseFile, {
      header: true,
      dynamicTyping: true,
      complete: function(results) {
        console.log('GOT SOME DATA!!!!')
        console.log(results.data);
        setBaseJson(results.data)
      }
    })
  }

  @action setBaseJson = (baseJson: Array<Object>) => {
    this.baseJson = baseJson
  }

  @action setSearchFilter = (sFilter: string) => {
    this.filters.search = sFilter;
  }

  @action setLayer1Filter = (lFilter: string) => {
    this.filters.layer1 = lFilter;
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
