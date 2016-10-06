import React, { Component } from 'react'
import './MembersList.css'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import BoardRoom from 'contracts/BoardRoom.sol';
import OpenReg from 'contracts/OpenRegistry.sol'
import OpenRegRules from 'contracts/OpenRegistryRules.sol'
import Web3 from 'web3';
/*

import MetaCoin from 'contracts/MetaCoin.sol';
import Web3 from 'web3';

const provider = new Web3.providers.HttpProvider('http://localhost:8545')
MetaCoin.setProvider(provider);
*/
const provider = new Web3.providers.HttpProvider('http://localhost:8545')
OpenReg.setProvider(provider);
BoardRoom.setProvider(provider);
OpenRegRules.setProvider(provider);
class MembersList extends Component {
    state = {
      accounts: []
    }
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this);

      var board = BoardRoom.deployed();
      var reg = OpenReg.deployed();
      var rules = OpenRegRules.deployed();

      console.log(board)
      board.changeRules(rules.address);


      console.log(reg.numMembers.call().then(function (val){
        console.log(val.toNumber());
      }));


    }
    componentWillMount(){
      this.props.web3.eth.getAccounts(function(err, acc) {
          if(err != null){
              window.alert("Uh OH U DUN GOOOOFIEEE");
              return
          }
          if(acc.length === 0 ){
              window.alert("0 accounts m8")
                  return
          }

          //this.setState({accounts: acc})
           var reg = OpenReg.deployed();
           var numMem = 0;
           var memList = [];
           reg.numMembers.call().then(function(res){
            numMem = res.toNumber();
             for (var i = 0; i < numMem; i++){
               reg.memberForId(i, {from: acc[0]}).then(function(res){
                 memList.push(''+res+'');
               });
             }
             console.log('memlistATEND', memList);
             this.setState({accounts: memList});
             console.log("the state is wrong", this.state.accounts);
           }.bind(this));

      }.bind(this));
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

          //this.setState({accounts: acc})
           var reg = OpenReg.deployed();

           reg.register(acc[0], {from: acc[0]}).then(function(res){
             console.log("SUCCESS", res);
           });
           var numMem = 0;
           var memList = [];
           reg.numMembers.call().then(function(res){
            numMem = res.toNumber();
             for (var i = 0; i < numMem; i++){
               reg.memberForId(i, {from: acc[0]}).then(function(res){
                 memList.push(''+res+'');
               });
             }
             var arr = ['hi', 'hello'];
             console.log('memlist', memList);
             console.log('arr', arr);
             this.setState({accounts: arr});
             console.log(this.state.accounts);
           }.bind(this));

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
