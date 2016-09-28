import React, { Component } from 'react'
import './App.css'

import AccountListContainer from 'components/AccountList/AccountListContainer'
import ProposalsListContainer from 'components/ProposalsList/ProposalsListContainer'
import MembersList from 'components/MembersList/MembersList'


class App extends Component {
  render () {
    return (
      <div className="App">
      <div style={{width: '100%', display: 'block'}}>
        <img src='../logo.svg' style={{margin: '0 auto', display: 'block', height: '135px'}}></img>
      </div>
      <ProposalsListContainer web3={this.props.web3} />
      <MembersList web3={this.props.web3} />
      </div>
    )
  }
}

export default App
