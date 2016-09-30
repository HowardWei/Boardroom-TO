import React, { Component } from 'react'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import './Profile.css'

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <IconMenu
          iconButtonElement={<RaisedButton label="My Profile" > </RaisedButton> }
          anchorOrigin={{horizontal: 'bottom', vertical: 'top'}}
          targetOrigin={{horizontal: 'bottom', vertical: 'top'}}
        >
          <MenuItem value="Name" primaryText="Name: Zach"/>

          <Divider />
          <MenuItem value="Add" primaryText="Address: 0x4249287" />

          <Divider />
          <MenuItem value="Proposals" primaryText="Submitted Proposals" />

          <Divider />
          <MenuItem value="Add" primaryText="Voted Proposals" />

        </IconMenu>
      </div>
  )}
};

export default Profile;
