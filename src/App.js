import React, { Component } from 'react'
import './App.css'

import AccountListContainer from 'components/AccountList/AccountListContainer'
import ProposalsListContainer from 'components/ProposalsList/ProposalsListContainer'
import MembersList from 'components/MembersList/MembersList'


class App extends Component {
  render () {
    return (
      <div className="App">
      <ProposalsListContainer web3={this.props.web3} />
      <MembersList web3={this.props.web3} />
      <AccountListContainer web3={this.props.web3} />
      </div>
    )
  }
}

export default App
