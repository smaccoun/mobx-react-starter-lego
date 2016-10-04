// @flow

import {observable, computed, action} from 'mobx'

class PhotoNailStore {
  @observable isShowingModal: boolean = false;

  @action closeModal = () => { this.isShowingModal = false }
  @action openModal = () => { this.isShowingModal = true }
}

const store = new PhotoNailStore();
module.exports = {store}
