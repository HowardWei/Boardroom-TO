import React, { Component } from 'react';
import './VoteModal.css';
import Modal from 'react-modal';
import BoardRoom from 'contracts/BoardRoom.sol';
import Web3 from 'web3';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class VoteModal extends Component {

  componentDidMount() {
  this.setState({modalIsOpen: false});
}

  openModal() {
    this.state.modalIsOpen = true;
    console.log (this.state.modalIsOpen);
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.state.modalIsOpen = false;
  }

    //var accounts;
  render() {
console.log('state', this.state);
    return (
      <div>
        <button onClick={this.openModal()}>Open Modal</button>
        <Modal
          isOpen={false}
          onAfterOpen={this.afterOpenModal()}
          onRequestClose={this.closeModal()}
          style={customStyles} >

          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.closeModal()}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    )
  }

    //generate tr class with name and respective position


  }



export default VoteModal
