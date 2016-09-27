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
      <table>
        <thead>
          <h1>Toronto Board Members</h1>
          <tr>
            <td> Name </td>
            <td> Position </td>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
        <br></br>
        <br></br>
      </table>
    )
  }

}

export default MembersList
