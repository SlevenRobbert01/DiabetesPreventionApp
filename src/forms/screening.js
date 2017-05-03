import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {MdThumbUp,MdDone,MdWarning} from 'react-icons/lib/md';
const actions = require('../actions/appActions.js');
const store = require('../stores/appStore.js');
const helpers = require('../helpers.js');
const constants = require('../constants.js');
const _ = require('lodash');
import {green700,red800} from 'material-ui/styles/colors';

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
  },
  iconResultStyle: {
    cursor: 'pointer', 
    margin:'0px auto', 
    display:'block'
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

class ScreeningComponent extends Component {
  constructor(){
    super();
    this.state = store.getScreeningData();
    this._handleOnClick = this._handleOnClick.bind(this);
    this._onChange = this._onChange.bind(this);
  }
  _handleOnClick(){
    if(validateForm(this)){
      actions.saveData(this.state);
      const bmi = helpers.calculateBMI(this.state.personWeight.value, this.state.personLength.value);
      const bmiResult = helpers.verifyBMI(this.state.personAge.value, bmi);
      const bmiRange = helpers.getBmiRange(this.state.personAge.value);
      this.setState({bmi, bmiResult, bmiRange});
    }
  }
  _handleOnChange(value, type){
    const objToChange = {};
    objToChange[type] = {value: value};
    this.setState(objToChange);
  }
  _onChange(){
    this.setState({bmiResult: store.getBmiResult()})
  }
  componentDidMount() {
    store.addChangeListener(this._onChange);
  }
  componentWillUnmount(){
    store.removeChangeListener(this._onChange);
  }
  _renderScreeningForm(){
    const context = this;
    return (
      <div>
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
          icon={<MdDone/>}
        />
      </div>
    )
  }
  _renderResult(){
    let IconComponent;
    let IconColor;
    if(this.state.bmiResult === constants.ScreeningResult.GOOD){
      IconComponent = MdThumbUp;
      IconColor = green700;
    } else {
      IconComponent = MdWarning;
      IconColor = red800;
    }

    return (
      <div>
        <IconComponent size={200} color={IconColor} style={styles.iconResultStyle} onClick={() => window.appContainer.navigateTo('main')}/>
      </div>
    );
  }
  render() {
    const content = this.state.bmiResult ? this._renderResult() : this._renderScreeningForm();

    return (
      <Paper zDepth={2}>
        <div sytle={{display: 'block', margin: '0 auto'}}><h2>{'Screening'}</h2></div>
        {content}
      </Paper>
    );
  }
}

module.exports = ScreeningComponent;
