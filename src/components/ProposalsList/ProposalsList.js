
import React, { Component } from 'react'
import './ProposalsList.css'

class ProposalsList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr><td>Account</td><td>META</td></tr>
        </thead>
        <tbody>
          {this.props.accounts.map(this.renderAccount)}
        </tbody>
      </table>
    )
  }

  renderAccount({account, balance}) {
    return <tr key={account}><td>{account}</td><td>{balance.account}</td></tr>
  }
}

export default ProposalsList
