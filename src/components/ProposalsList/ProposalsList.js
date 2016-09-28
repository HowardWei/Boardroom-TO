
import React, { Component } from 'react'
import './ProposalsList.css'

class ProposalsList extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default ProposalsList
