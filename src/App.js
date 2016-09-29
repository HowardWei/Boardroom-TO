import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './App.css'

import AccountListContainer from 'components/AccountList/AccountListContainer'
import ProposalsListContainer from 'components/ProposalsList/ProposalsListContainer'
import MembersList from 'components/MembersList/MembersList'


class App extends Component {
  render () {
    injectTapEventPlugin();

    return (
      <div className="App">
        <div style={{width: '100%', display: 'block'}}>
          <img src='../logo.svg' style={{margin: '0 auto', display: 'block', height: '135px'}}></img>
        </div>
        <MuiThemeProvider>
          <ProposalsListContainer web3={this.props.web3} />
        </MuiThemeProvider>
          <MembersList web3={this.props.web3} />

      </div>
    )
  }
}

export default App
