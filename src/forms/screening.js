import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import DoneIcon from 'react-material-icons/icons/action/done';
const _ = require('lodash')

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

const validateForm = (context) => {
  let valid = true;
  const state = {};
  if(!context.state.personAge.value || isNaN(context.state.personAge.value)){
    state.personAge = _.merge({error: true}, context.state.personAge);
    valid = false;
  }
  if(!context.state.personWeight.value || isNaN(context.state.personWeight.value)){
    state.personWeight = _.merge({error: true}, context.state.personWeight);
    valid = false;
  }
  if(!context.state.personLength.value || isNaN(context.state.personLength.value)){
    state.personLength = _.merge({error: true}, context.state.personLength);
    valid = false;
  }
  context.setState(state);
  return valid;
};

class Screening extends Component {
  constructor(){
    super();
    this.state = {
      personAge: {value: ''},
      personWeight: {value: ''},
      personLength: {value: ''},
      personSmokes: false,
      personMoves: false,
      personMedication: false,
    };
    this._handleOnClick = this._handleOnClick.bind(this);
  }
  _handleOnClick(){
    validateForm(this);
  }
  _handleOnChange(value, type){
    const objToChange = {};
    objToChange[type] = {value: value};
    this.setState(objToChange);
  }
  render() {
    const context = this;
    return (
      <Paper zDepth={2}>
        <Subheader>{'Screening'}</Subheader>
        <TextField
          floatingLabelText="Leeftijd"
          floatingLabelFixed={true}
          style={style}
          underlineShow={false}
          value={this.state.personAge.value}
          errorText={this.state.personAge.error? 'Leeftijd moet numeriek zijn' : ''}
          onChange={(e)=> {
            const value = e.target.value;
            context._handleOnChange(value, 'personAge')}
          }/>
        <Divider />
        <TextField
          floatingLabelText="Gewicht in kg"
          floatingLabelFixed={true}
          style={style}
          underlineShow={false}
          value={this.state.personWeight.value}
          errorText={this.state.personWeight.error? 'Gewicht moet numeriek zijn' : ''}
          onChange={(e)=> {
            const value = e.target.value;
            context._handleOnChange(value, 'personWeight')}
          }/>
        <Divider />
        <TextField 
          floatingLabelText="Lengte in cm" 
          floatingLabelFixed={true} 
          style={style} 
          underlineShow={false} 
          value={this.state.personLength.value}
          errorText={this.state.personLength.error ? 'Lengte moet numeriek zijn' : ''}
          onChange={(e)=> {
            const value = e.target.value;
            context._handleOnChange(value, 'personLength')}
          }/>
        <Divider />
        <Checkbox label="Rookt u?" style={styles.checkbox} value={this.state.personSmokes}/>
        <Divider />
        <Checkbox label="Beweegt u veel?" style={styles.checkbox} value={this.state.personMoves}/>
        <Divider />
        <Checkbox label="Neemt u medicatie voor verhoogde bloeddruk?" style={styles.checkbox} value={this.state.personMedication}/>
        <Divider />
        <RaisedButton 
          label="Start screening"
          onClick={this._handleOnClick}
          primary={true}
          style={styles.button}
          icon={<DoneIcon/>}
        />
      </Paper>
    );
  }
}

module.exports = Screening;
