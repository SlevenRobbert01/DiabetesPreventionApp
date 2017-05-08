import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {MdRestaurant, MdDirectionsRun, MdLink} from 'react-icons/lib/md';
import {List, ListItem} from 'material-ui/List';

const styles = {
  checkbox: {
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 20
  },
  button: {
    margin: 20,
  },
  buttonExercise: {
    marginTop: 20,
    marginBottom: 20,
  },
  iconResultStyle: {
    cursor: 'pointer', 
    margin:'0px auto', 
    display:'block'
  },
  headerStyle: {marginLeft: 20, marginTop: 20, paddingTop: 10, marginBottom: 10},
  metaStyle: {marginLeft: 20, marginBottom: 30},
  cardStyle: {marginBottom: 20},
  linkStyle: {marginBottom: 20},
  imgStyle: {width: 250, margin: '0 auto'}
};

const DialogTypes = {
  Food: {
    RECEPT1: 'RECEPT1',
  },
  Movement: {
    EXERCISE1: 'EXERCISE1'
  }
}

const DialogContentSitUps = () => (
  <div>
    <div style={styles.imgStyle}>
      <img style={{width: '100%'}} alt="sit-ups" src="images/situps.jpg"/>
    </div>
    <List>
      <ListItem primaryText="- Kies een platte vloer uit."/>
      <ListItem primaryText="- Ga met je rug plat op de grond liggen"/>
      <ListItem primaryText="- Houd niet je nek vast, maar houd je handen naast je hoofd en kom omhoog"/>
      <ListItem primaryText="- Kom zover omhoog tot je ellebogen je knieen raken"/>
      <ListItem primaryText="- Laat je langzaam weer zakken, zonder dat je rug de vloer raakt"/>
      <ListItem primaryText="- Herhaal voor het gewenst aantal reps"/>
    </List>
  </div>
  
);

class MainComponent extends Component {
  constructor(){
    super();
    this.state = {open: false};
  }
  handleClose = () => {
    this.setState({open: false});
  }
  handleOpen = (dialogTitle, dialogType) => {
    this.setState({open: true, dialogTitle, dialogType});
  }
  _renderPaper(){
    return (
      <Paper zDepth={2}>
        <div style={styles.headerStyle}><h2 style={{margin: 0}}>{'Informatie omtrent DM2:'}</h2></div>
        <div style={{padding: 20}}>
          <Card style={styles.cardStyle}>
            <CardHeader
              title="Voedingsadvies"
              subtitle="Tips & Recepten"
              avatar={<MdRestaurant size={30}/>}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardTitle title="Tips" expandable={true} />
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
          <Card style={styles.cardStyle}>
            <CardHeader
              title="BewegingsAdvies" 
              subtitle="Tip & Oefeningen" 
              avatar={<MdDirectionsRun size={30}/>}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardTitle title="Tips" expandable={true}/>
            <CardText expandable={true}>
              Als je elke dag 30 min beweegt, vermindert de kans op diabetes type 2 met 40% (International Diabetes Fonds, 2016). Het Vigez toont ook een verband aan tussen het aantal uren sedentair gedrag (lang stilzitten) en het hogere sterftecijfer bij volwassenen. Eind 2011 werd dan ook beslist om de aanbevelingen voor sedentair gedrag op te nemen in de restgroep van de actieve voedingsdriehoek (Vigez, 2016). 
              De aanbevelingen voor beweging van jongeren is minstens 60 minuten per dag matig tot intensief te bewegen en bijkomend 3 maal in de week specifieke activiteiten te beoefenen om de spieren en botten te versterken. Voor volwassenen zijn deze iets anders, zij zouden minstens 30 minuten per dag intensief moeten bewegen of 10.000 stappen per dag zetten m.b.v. bijvoorbeeld een stappenteller of minstens 3 keer 20 minuten intensief bewegen. Hier bijkomend zouden ze 2 maal per week een specifieke activiteit moeten beoefenen om de spieren en botten te kunnen versterken (Vigez, 2017).
            </CardText>
            <CardTitle title="Oefeningen" expandable={true}>
              <RaisedButton 
                label="Sit-ups"
                onClick={() => this.handleOpen('Sit-ups', DialogTypes.Movement.EXERCISE1)}
                style={styles.buttonExercise}/>
            </CardTitle>
          </Card>
          <Card style={styles.cardStyle}>
            <CardHeader
              title="Instanties & Verenigingen" 
              subtitle="Links" 
              avatar={<MdLink size={30}/>}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <div style={styles.linkStyle}>
                <a href="https://www.diabetes.be/" target="_blank"><MdLink style={{marginRight: 10}}/>{'Diabetes liga'}</a>
              </div>
              <div style={styles.linkStyle}>
                <a href="https://www.diabetesfonds.nl/home" target="_blank"><MdLink style={{marginRight: 10}}/>{'Diabetes Fonds'}</a>
              </div>
              <div style={styles.linkStyle}>
                <a href="http://www.diabetes-vdv.be/" target="_blank"><MdLink style={{marginRight: 10}}/>{'Vlaamse Diabetes Vereniging'}</a>
              </div>
            </CardText>
          </Card>
        </div>
      </Paper>
    );
  }
  _renderActions(){
    return [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ]
  }
  _renderDialogContent(){
    switch(this.state.dialogType){
    case DialogTypes.Movement.EXERCISE1:
      return <DialogContentSitUps/>;
    default:
      return null;
    }
  }
  _renderDialog(){
    return (
      <Dialog
        title={this.state.dialogTitle}
        actions={this._renderActions()}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}>
        {this._renderDialogContent()}
      </Dialog>
    );
  }
  render(){
    return (
      <div>
        {this._renderDialog()}
        {this._renderPaper()}
      </div>
    );
  }
};

module.exports = MainComponent;