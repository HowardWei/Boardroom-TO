import React, { Component } from 'react'
import ProposalsList from 'components/ProposalsList/ProposalsList'
import SendCoin from 'components/SendCoin/SendCoin'

import BoardRoom from 'contracts/BoardRoom.sol';
import MetaCoin from 'contracts/MetaCoin.sol';
import Web3 from 'web3';

const provider = new Web3.providers.HttpProvider('http://localhost:8545')
BoardRoom.setProvider(provider);
var board = BoardRoom.deployed();

class ProposalsListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      proposals: [],
    }

    this._getProposal = this._getProposal.bind(this)
    this._getProposals = this._getProposals.bind(this)
  }

  _getProposal (proposalNum) {
    var board = BoardRoom.deployed()
    var name = board.getNameForProposal(proposalNum);
    var period = board.getPeriodForProposal(proposalNum);
    return {name: name, period: period};
  }

  _getProposals () {
    this.props.web3.eth.getAccounts(function (err, accs) {
      if (err != null) {
        window.alert('There was an error fetching your accounts.')
        return
      }

      if (accs.length === 0) {
        window.alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.")
        return
      }
      var proposalList = [];
      for (var i = 0; i < board.numProposals(); i++){
        var newProp = this._getProposal(i);
        proposalList.append(newProp);
      }


    }.bind(this))
  }

  componentDidMount() {
    const refreshProposals = () => {
      this._getProposals()
    }

    refreshProposals()

    setInterval(()=>{
      refreshProposals();
      return refreshProposals
    }, 5000)
  }

  render() {
    return (
      <div style={{width: '62%', float: 'left', padding: '2%'}}>
        <ProposalsList proposals={this.state.proposals} />
      </div>
    )
  }
}

export default ProposalsListContainer
