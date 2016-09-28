import React, { Component } from 'react'
import ProposalsList from 'components/ProposalsList/ProposalsList'
import SendCoin from 'components/SendCoin/SendCoin'

import MetaCoin from 'contracts/MetaCoin.sol';
import Web3 from 'web3';

const provider = new Web3.providers.HttpProvider('http://localhost:8545')
MetaCoin.setProvider(provider);

class ProposalsListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      accounts: [],
      coinbase: ''
    }

    this._getAccountBalance = this._getAccountBalance.bind(this)
    this._getAccountBalances = this._getAccountBalances.bind(this)
  }

  _getAccountBalance (account) {
    var meta = MetaCoin.deployed()
    return new Promise((resolve, reject) => {
      meta.getBalance.call(account, {from: account}).then(function (value) {
        resolve({ account: value.valueOf() })
      }).catch(function (e) {
        console.log(e)
        reject()
      })
    })
  }

  _getAccountBalances () {
    this.props.web3.eth.getAccounts(function (err, accs) {
      if (err != null) {
        window.alert('There was an error fetching your accounts.')
        return
      }

      if (accs.length === 0) {
        window.alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.")
        return
      }

      this.setState({coinbase: accs[0]})

      var accountsAndBalances = accs.map((account) => {
        return this._getAccountBalance(account).then((balance) => { return { account, balance } })
      })

      Promise.all(accountsAndBalances).then((accountsAndBalances) => {
        this.setState({accounts: accountsAndBalances, coinbaseAccount: accountsAndBalances[0]})
      })
    }.bind(this))
  }

  componentDidMount() {
    const refreshBalances = () => {
      this._getAccountBalances()
    }

    refreshBalances()

    setInterval(()=>{
      refreshBalances();
      return refreshBalances
    }, 5000)
  }

  render() {
    return (
      <div style={{width: '62%', float: 'left', padding: '2%'}}>
        <ProposalsList proposals={
          [{name: 'Proposal 1',
            descriptionShort: 'a proposal to test a proposals mechanism',
            descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue ipsum, vulputate in massa ac, condimentum venenatis lacus. Pellentesque gravida tortor vitae erat volutpat, ac porta tortor ullamcorper. Curabitur a nulla at elit dapibus finibus a vel metus. Sed sit amet nunc sit amet dolor feugiat suscipit at at lacus. Nam fermentum tortor mi, posuere imperdiet justo viverra a. Ut eros risus, rutrum vel interdum quis, sollicitudin eget nibh. Donec accumsan ligula non tellus rutrum maximus. Etiam a volutpat libero, ut ullamcorper ante. Donec malesuada sapien mauris, sit amet egestas lorem tincidunt ut. Integer viverra dictum rhoncus. Nullam arcu sapien.',
            proposer: 'Mark'},
          {name: 'Proposal 2',
            descriptionShort: 'a proposal to test a proposals mechanism',
            descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue ipsum, vulputate in massa ac, condimentum venenatis lacus. Pellentesque gravida tortor vitae erat volutpat, ac porta tortor ullamcorper. Curabitur a nulla at elit dapibus finibus a vel metus. Sed sit amet nunc sit amet dolor feugiat suscipit at at lacus. Nam fermentum tortor mi, posuere imperdiet justo viverra a. Ut eros risus, rutrum vel interdum quis, sollicitudin eget nibh. Donec accumsan ligula non tellus rutrum maximus. Etiam a volutpat libero, ut ullamcorper ante. Donec malesuada sapien mauris, sit amet egestas lorem tincidunt ut. Integer viverra dictum rhoncus. Nullam arcu sapien.',
            proposer: 'Mark'},
          {name: 'Proposal 3',
            descriptionShort: 'a proposal to test a proposals mechanism',
            descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue ipsum, vulputate in massa ac, condimentum venenatis lacus. Pellentesque gravida tortor vitae erat volutpat, ac porta tortor ullamcorper. Curabitur a nulla at elit dapibus finibus a vel metus. Sed sit amet nunc sit amet dolor feugiat suscipit at at lacus. Nam fermentum tortor mi, posuere imperdiet justo viverra a. Ut eros risus, rutrum vel interdum quis, sollicitudin eget nibh. Donec accumsan ligula non tellus rutrum maximus. Etiam a volutpat libero, ut ullamcorper ante. Donec malesuada sapien mauris, sit amet egestas lorem tincidunt ut. Integer viverra dictum rhoncus. Nullam arcu sapien.',
            proposer: 'Mark'}
          ]} />
      </div>
    )
  }
}

export default ProposalsListContainer
