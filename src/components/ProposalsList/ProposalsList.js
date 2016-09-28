
import React, { Component } from 'react'
import './ProposalsList.css'

class ProposalsList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Active Proposals</h1>
        {this.props.proposals.map(this.renderProposal)}

      </div>
    )
  }

  renderProposal(proposal) {
    return (
      <div style={{padding: '3px 20px 5px 20px', backgroundColor: '#e9e9e9', marginBottom: '20px'}}>
        <h2 style={{marginBottom: '3px'}}> {proposal.name} </h2>
        <p style={{fontSize: '20px'}}> {proposal.descriptionShort} </p>
        <p style={{textAlign: 'right'}}> Written by: {proposal.proposer} </p>
      </div>
    )
  }
}

export default ProposalsList
