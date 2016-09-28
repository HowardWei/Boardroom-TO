import React, { Component } from 'react'
import './MembersList.css'

class MembersList extends Component {
  render() {
    // list of names and positions in array
    var names = ["employee1", "employee2"];
    var positions = ["manager", "developer"];

    //generate tr class with name and respective position
    var list = names.map(function(_,i) {
      return (
        <tr>
          <td> {names[i]}</td>
          <td> {positions[i]}</td>
        </tr>
      )
    });

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
            {list}
          </tbody>
        </table>
      </div>
    )
  }

}

export default MembersList
