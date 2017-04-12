import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
const style = {
  marginLeft: 20
};

class Screening extends Component {
  render() {
    return (
      <Paper zDepth={2}>
        <Subheader>{'Screening'}</Subheader>
        <TextField hintText="First name" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Middle name" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Last name" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Email address" style={style} underlineShow={false} />
        <Divider />
      </Paper>
    );
  }
}

module.exports = Screening;
