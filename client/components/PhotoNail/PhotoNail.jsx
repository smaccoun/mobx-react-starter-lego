import React from 'react';
import style from './style.css'

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class PhotoNail extends React.Component {

  constructor(props){
    super(props);
    this.state = {isShowingModal: false}
  }

  closeModal = () => {
    console.log('CLOSING!!!')
    this.setState({isShowingModal: false})
    console.log(this.state.isShowingModal)
  }

  openModal = () => {
    this.setState({isShowingModal: true})
  }

  render(){
    let {photo, store} = this.props;
    const modalTitle = `${photo.meta.Course} ${photo.meta['Date Shot']}`
    const filename = photo.meta['File Name']

    return(
      <div className={style.container}>
        <div  onClick={this.openModal}>
          <div className={style.container__img}>
            {filename}
          </div>
          <div className={style.metaContainer}>
            <p><b>Layer 1:</b>{photo.meta['Layer 1']}</p>
            <p><b>Layer 2:</b>{photo.meta['Layer 2']}</p>
            <p>{`${photo.meta.Description.substring(0,30)}...`}</p>
          </div>
        </div>

        <Modal isOpen={this.state.isShowingModal} onRequestHide={this.closeModal}>
          <ModalHeader>
            <ModalClose onClick={this.closeModal}/>
            <ModalTitle><p>{modalTitle}</p></ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className={style.modalImage}>
              <h3>{filename}</h3>
              <p> (An image will be here) </p>
            </div>
            <h4>{photo.meta.Description}</h4>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-default' onClick={this.closeModal}>
              Close
            </button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

}

export default PhotoNail;
