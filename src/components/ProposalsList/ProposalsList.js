
import React, { Component } from 'react'
import './ProposalsList.css'
import VoteModal from 'components/VoteModal/VoteModal'
import NewPropModal from 'components/NewPropModal/NewPropModal'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class ProposalsList extends Component {
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
        </CardText>
      </Card>
    )
  }
}

export default ProposalsList
