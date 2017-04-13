import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import AlarmIcon from 'react-material-icons/icons/action/done';

const style = {
  marginLeft: 20
};

const styles = {
  checkbox: {
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 20
  },
  button: {
    margin: 20,
  }
};

class Screening extends Component {
  render() {
    return (
      <Paper zDepth={2}>
        <Subheader>{'Screening'}</Subheader>
        <TextField floatingLabelText="Leeftijd" floatingLabelFixed={true} style={style} underlineShow={false} />
        <Divider />
        <TextField floatingLabelText="Gewicht in kg" floatingLabelFixed={true} style={style} underlineShow={false} />
        <Divider />
        <TextField floatingLabelText="Lengte in cm" floatingLabelFixed={true} style={style} underlineShow={false} />
        <Divider />
        <Checkbox label="Rookt u?" style={styles.checkbox} />
        <Divider />
        <Checkbox label="Beweegt u veel?" style={styles.checkbox} />
        <Divider />
        <Checkbox label="Neemt u medicatie voor verhoogde bloeddruk?" style={styles.checkbox} />
        <Divider />
        <RaisedButton 
          label="Start screening"
          primary={true}
          style={styles.button}
          icon={<AlarmIcon/>}
        />
      </Paper>
    );
  }
}

module.exports = Screening;
