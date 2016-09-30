import React, { Component } from 'react'
import './MembersList.css'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

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
    getActualAccounts() {

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
              <TableRow>
                <TableRowColumn>Zach</TableRowColumn>
                <TableRowColumn>{i}</TableRowColumn>
              </TableRow>
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
        <h1 style={{textAlign: 'center', fontWeight: '200', marginTop: '0px'}}>Board Members</h1>
        <Table selectable={false} style={{tableLayout: 'auto'}}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Address</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
          {this.state.accounts.map(this.memberRow)}

          </TableBody>
        </Table>
      </div>
    )
  }

}

export default MembersList
