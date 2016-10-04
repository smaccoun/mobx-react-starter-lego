// @flow

import {observable, computed, action} from 'mobx'

class PhotoGalleryState {
  @observable photoModal: ?Object = null;

  @action closeModal(){ this.photoModal = null }
  @action openModal(photo: Object){ this.photoModal = photo }
}

const store = new PhotoGalleryState();
module.exports = {store}
