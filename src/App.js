import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import ScreeningComponent from './forms/screening.js';
import MainComponent from './forms/main.js';
const {Route, HashRouter} = require('react-router-dom');
import {MdEdit} from 'react-icons/lib/md';

const iconStyle = {
  cursor: 'pointer',
  marginTop: '5px',
  display:'block'
};

class App extends Component {
  render() {
    return (
        <div style={{height:'100vh'}}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
              <AppBar showMenuIconButton={false} title="Diabetes Prevention App" iconElementRight={<MdEdit color={'#fff'} size={30} style={iconStyle} onClick={()=>window.appContainer.navigateTo('')}/>}/>
              <HashRouter hashType={'noslash'}>
                <div style={{maxWidth: 850, margin:'0 auto'}}>
                  <Route exact path="/" component={ScreeningComponent}/>
                  <Route path="/main" component={MainComponent}/>
                </div>
              </HashRouter>
            </div>
          </MuiThemeProvider>
        </div>
    );
  }
}

export default App;
