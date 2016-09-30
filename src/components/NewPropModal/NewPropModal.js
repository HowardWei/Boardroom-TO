import React, { Component } from 'react';
import './NewPropModal.css';
import BoardRoom from 'contracts/BoardRoom.sol';
import Web3 from 'web3';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class NewPropModal extends Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
    console.log('hello')
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <div>
        <div style={{marginBottom: '-65px'}}>
          <FloatingActionButton onTouchTap={this.handleOpen} mini={true} >
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <Dialog
          title="New Proposal"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <TextField hintText="Proposal Name" floatingLabelText="Name" />
        <TextField style={{marginLeft: '20px'}} hintText="This proposal is...." floatingLabelText="Description" rows={1} rowsMax={4}/>
        <TextField hintText="Russel" floatingLabelText="Name of Proposer" />
        </Dialog>
      </div>
    );
  }


  }



export default NewPropModal
