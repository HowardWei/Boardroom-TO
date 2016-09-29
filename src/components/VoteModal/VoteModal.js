import React, { Component } from 'react';
import './VoteModal.css';
import BoardRoom from 'contracts/BoardRoom.sol';
import Web3 from 'web3';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


class VoteModal extends Component {

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
        <RaisedButton label="Vote Now" onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.proposal.name}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <p>{this.props.proposal.descriptionLong}</p>
          By: {this.props.proposal.proposer}
        </Dialog>
      </div>
    );
  }


  }



export default VoteModal
