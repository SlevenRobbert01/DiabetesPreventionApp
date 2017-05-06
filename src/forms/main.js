import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {MdRestaurant, MdDirectionsRun, MdLink} from 'react-icons/lib/md';

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
  },
  headerStyle: {marginLeft: 20, marginTop: 20, paddingTop: 10, marginBottom: 10},
  metaStyle: {marginLeft: 20, marginBottom: 30},
  cardStyle: {marginBottom: 20}
};

class MainComponent extends Component {
  render(){
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
          <Card style={styles.cardStyle}>
            <CardHeader
              title="Instanties & Verenigingen" 
              subtitle="Links" 
              avatar={<MdLink size={30}/>}
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
        </div>
      </Paper>
    );
  }
};

module.exports = MainComponent;