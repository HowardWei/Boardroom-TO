
import React, { Component } from 'react'
import './ProposalsList.css'
import VoteModal from 'components/VoteModal/VoteModal'
import NewPropModal from 'components/NewPropModal/NewPropModal'

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
      <div className='proposal'>
        <h2 style={{marginBottom: '3px', fontWeight: '200'}}> {proposal.name} </h2>
        <p style={{fontSize: '20px', fontStyle: 'italic'}}> {proposal.descriptionShort} </p>
        <p style={{textAlign: 'right'}}> Written by: {proposal.proposer} </p>
        <VoteModal proposal={proposal}> </VoteModal>
      </div>
    )
  }
}

export default ProposalsList
