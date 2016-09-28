import React, { Component } from 'react'
import './MembersList.css'

import BoardRoom from 'contracts/BoardRoom.sol';
import Web3 from 'web3';
class MembersList extends Component {

    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this);

      this.state = {
        display: false
      }
    }

    handleChange() {
      if(this.state.display) {
        this.setState({ display : false} );
      } else {
        this.setState({ display : true} );
      }
    }

    //var accounts;
    render() {
    // list of names and positions in array
    var names = ["employee1", "employee2"];
    var positions = ["manager", "developer"];
    var list = [""];

    var modalOn;
    if(this.state.display) {
      modalOn = 'appear';
    } else {
      modalOn = 'disappear';
    }

    this.props.web3.eth.getAccounts(function(err, acc) {
        if(err != null){
            window.alert("Uh OH U DUN GOOOOFIEEE");
            return
        }
        if(acc.length === 0 ){
            window.alert("0 accounts m8")
                return
        }
        console.log(acc, "acc");
        list = acc.map(function(i){
          console.log(i);
            return(
                    <tr>
                    <td> <p> hello!!! </p></td>
                        <td> {i}</td>
                        <td> {i} </td>
                    </tr>
                  )
         });
        console.log(list);
    });

    //generate tr class with name and respective position

    return (
      <div style={{width: '30%', float: 'left', padding: '2%'}}>
        <h1 style={{textAlign: 'center', fontWeight: '200'}}>Board Members</h1>
        <input type="checkbox" onChange={this.handleChange}/>  
        <p> Modal should {modalOn} </p>
        <table>
          <thead>
            <tr>
              <td> Name </td>
              <td> Position </td>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    )
  }

}

export default MembersList
