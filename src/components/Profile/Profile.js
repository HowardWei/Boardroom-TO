import React, { Component } from 'react'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './profile.css'

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <IconMenu
          iconButtonElement={<RaisedButton> My Profile <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 18"><path d="M5 8l4 4 4-4z"/></svg></RaisedButton>}
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
