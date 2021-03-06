
import React, { Component } from 'react'
import './ProposalsList.css'
import VoteModal from 'components/VoteModal/VoteModal'
import NewPropModal from 'components/NewPropModal/NewPropModal'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import BoardRoom from 'contracts/BoardRoom.sol';
import Web3 from 'web3';

const provider = new Web3.providers.HttpProvider('http://localhost:8545')
BoardRoom.setProvider(provider);
var board = BoardRoom.deployed();

class ProposalsList extends Component {

  constructor(props) {
    super(props)

    this.getProps();
  }

  getProps(){
    for (var i = 0; i < board.numProposals(); i++){
      console.log(board.getNameForProposal(i))
    }
  }
  render() {
    return (
      <div>
        <NewPropModal></NewPropModal>
        <h1 style={{textAlign: 'center', fontWeight: '200'}}>Active Proposals</h1>
        {this.props.proposals.map(this.renderProposal)}

      </div>
    )
  }


  renderProposal(proposal) {

    return (
      <Card style={{marginBottom: '25px'}}>
        <CardHeader
          title={proposal.name}
          subtitle={proposal.descriptionShort}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Approve" />
          <FlatButton label="Refuse" />
        </CardActions>
        <CardText expandable={true}>
          {proposal.descriptionLong}

          By: {proposal.proposer}
        </CardText>
      </Card>
    )
  }
}

export default ProposalsList
