import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import ScreeningComponent from './forms/screening.js';
import MainComponent from './forms/main.js';
const {Route, HashRouter} = require('react-router-dom');

class App extends Component {
  render() {
    return (
        <div style={{backgroundColor: '#E0E0E0',  height:'100vh'}}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
              <AppBar showMenuIconButton={false} title="Diabetes Prevention App" />
              <HashRouter hashType={'noslash'}>
                <div style={{maxWidth: 850, margin:'0 auto', padding:30}}>
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
