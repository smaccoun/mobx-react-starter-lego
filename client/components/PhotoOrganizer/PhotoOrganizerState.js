// @flow

import {observable, action, computed, toJS} from 'mobx'
import {Photo} from '../../types/Photos/PhotoType'

const samplePhotos = [
  new Photo('meow', 'http:meow'),
  new Photo('word', 'http:word')
]

class Select {
  label: string
  value: string

  constructor(label: string, value: string){
    this.label = label;
    this.value = value;
  }
}

class Filter {
  name: string
  value: string

  constructor(name: string, value: string){
    this.name = name;
    this.value = value;
  }
}

class FilterOptions {
  name: string = ''
  options: Array<Select> = []
  selectedValue: string = ''

  constructor(name: string, options: Array<Select>, selectedValue: string){
    this.name = name;
    this.options = options;
    this.selectedValue = selectedValue;
  }
}

const FILTER_COLUMNS = ['Layer 1', 'Layer 2', 'Part 1', 'System 1']

class PhotoOrganizerState {
  @observable baseJson: Array<Object> = [];
  @observable filters: {search: string, select: Array<Filter>} =
  {
    search: '',
    select: []
  }

  @action setSelectFilter(filterName: string, filterValue: string){
    let curIndex = this.filters.select.map(f => f.name).indexOf(filterName)
    if(curIndex >= 0){
      this.filters.select.splice(curIndex, 1)
    }

    this.filters.select.push(new Filter(filterName, filterValue))

    console.log(toJS(this.filters.select));
  }


  distinctFilterOptions(): Object {
    const distinctFilters = {column: Set}
    let data = toJS(this.baseJson);
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

    return distinctFilters
  }

  @computed get filterBar(): Array<FilterOptions> {
    const filterOptions = this.distinctFilterOptions();
    let filterBar =
    Object.keys(filterOptions)
          .filter(f => FILTER_COLUMNS.includes(f))
          .map(fName => {
              let options =
                Array.from(filterOptions[fName])
                     .map(f => {return new Select(f, f)})

              let sFilter = this.filters.select.find(f => f.name == fName);
              console.log('SFILER!!!!')
              console.log(sFilter);
              console.log(options);
              let selectedOption = sFilter ?
                        options.find(o => o.value == sFilter.value) :
                        options[0]
              return new FilterOptions(fName, options, selectedOption.value)
            })


    return filterBar;
  }

  @computed get filteredRows(): Array<Object> {
    let filters = this.filters;
    // console.log(toJS(filters))
    let filteredRows: Array<Object> = this.baseJson.filter(row => {
      const searchMatch = !filters.search ||
            (row.Description.toLowerCase().includes(filters.search.toLowerCase()));
      const selectMatch = filters.select.length == 0 ||
                          filters.select
                                  .map(f => {return row[f.name] == f.value})
                                  .reduce((p, n) => p && n)
      return searchMatch && selectMatch;
    })

    return filteredRows;
  }

  @computed get filteredPhotos(): Array<Photo> {
    return this.filteredRows.map(row => {
      let fileUrl = row['File Name']
      let meta = {}
      Object.keys(row).forEach(k => {meta[k] = row[k]})
      console.log(meta);
      let photo = new Photo(meta, fileUrl)
      console.log(photo);
      return photo
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
        console.log(toJS(results.data));
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
