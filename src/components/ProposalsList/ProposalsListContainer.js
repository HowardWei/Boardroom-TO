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
    console.log("CONSTUCTOR FOR PROPOSAL LIST CONTAINER ENTER")
    this.state = {
      proposals: [],
    }
    this.getAccounts()
    this._getProposals()


    this._getProposal = this._getProposal.bind(this)
    this._getProposals = this._getProposals.bind(this)
  }

  getAccounts() {
    this.props.web3.eth.getAccounts(function(err, acc) {
        if(err != null){
            window.alert("Uh OH U DUN GOOOOFIEEE");
            return
        }
        if(acc.length === 0 ){
            window.alert("0 accounts m8")
                return
        }

        this.setState({accounts: acc})
        var board = BoardRoom.deployed();
        board.newProposal("ERICS PROP3","0x0", 30, acc[0], 500, "",{from: acc[0]}).then(function(res){
          console.log("Added new proposal");
          board.numProposals.call().then(function(result){
            console.log ("We now have ", result.toNumber(), " proposals.");
          })
        });
        this.getProps();
    }.bind(this));
  }


  _getProposal (proposalNum) {
    var myName = board.getNameForProposal(proposalNum);
    var myPeriod = board.getPeriodForProposal(proposalNum);
    return {name: myName, period: myPeriod};
  }


  _getProposals () {
    var that = this;
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
      var num;

      board.numProposals.call().then(function (result){
        num = result.toNumber();
        for (var i = 0; i < num; i++){
          var newProp = that._getProposal(i);
          proposalList.push(newProp);

        }
      });

    }.bind(this))
  }

  componentDidMount() {
    // const refreshProposals = () => {
    //   this._getProposals()
    // }

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
