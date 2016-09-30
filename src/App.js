import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './App.css'

import AccountListContainer from 'components/AccountList/AccountListContainer'
import ProposalsListContainer from 'components/ProposalsList/ProposalsListContainer'
import MembersList from 'components/MembersList/MembersList'
import Profile from 'components/Profile/Profile'

class App extends Component {
  render () {
    injectTapEventPlugin();

    return (
      <div className="App">
        <div style={{width: '92%', display: 'inline-block'}}>
          <img src='../logo.svg' style={{margin: '0 auto', display: 'block', height: '135px'}}></img>
        </div>
        <MuiThemeProvider>
          <Profile web3={this.props.web3} />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <ProposalsListContainer web3={this.props.web3} />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <MembersList web3={this.props.web3} />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
