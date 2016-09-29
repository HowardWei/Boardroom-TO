import React, { Component } from 'react'
import './MembersList.css'

import BoardRoom from 'contracts/BoardRoom.sol';
import Web3 from 'web3';
class MembersList extends Component {
    state = {
      accounts: []
    }
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this);

    }

    handleChange() {

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
      }.bind(this));
    }
    memberRow(i){
        return(
                <tr>
                    <td> {i} </td>
                </tr>
              )
     }
    //var accounts;
    render() {
    // list of names and positions in array
    var names = ["employee1", "employee2"];
    var positions = ["manager", "developer"];
    var list = [""];


    this.getAccounts();

    //generate tr class with name and respective position

    return (
      <div style={{width: '30%', float: 'left', padding: '2%'}}>
        <h1 style={{textAlign: 'center', fontWeight: '200'}}>Board Members</h1>
        <table>
          <thead>
            <tr>
              <td> Name </td>
              <td> Position </td>
            </tr>
          </thead>
          <tbody>
            {this.state.accounts.map(this.memberRow)}
          </tbody>
        </table>
      </div>
    )
  }

}

export default MembersList
