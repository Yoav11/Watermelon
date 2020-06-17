import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './landing/landing.js';
import Login from './login/login.js';
import Signup from './signup/signup.js';
import PrivateRoute from './PrivateRoute';
import Detail from './detail/detail.js';
import Writer from './writer/writer.js';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import ScrollToTop from './scrollToTop.js'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AuthContext } from "./context/auth";

function App() {
    const theme = createMuiTheme({
      palette: {
        type: 'dark',
      },
    });

    const [authTokens, setAuthTokens] = useState();

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }

    return(
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <ThemeProvider theme={theme}>
              <Router>
                <ScrollToTop />
                  <Switch>
                      <Route exact path="/" component={Landing} />
                      <Route path="/detail/:id" component={Detail} />
                      <Route path="/login" component={Login} />
                      <Route path="/signup" component={Signup} />
                      <PrivateRoute path="/writer" component={Writer} />
                      <Route render={() => <Redirect to="/" />} />
                  </Switch>
              </Router>
           </ThemeProvider>
       </AuthContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
