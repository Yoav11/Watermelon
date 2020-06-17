import React, {Component} from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import Navbar from '../navbar/navbar.js'
import './login.css'
import { useAuth } from "../context/auth";
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this)
      this.setAuthTokens = useAuth; // !.!
      this.state = {
          isLoggedIn: false,
          setLoggedIn: false,
          isError: false,
          setIsError: false,
          userName: "",
          setUserName: "",
          password: "",
          setPassword: ""
      }
    }

    handleSubmit(event) {
        const data = new FormData(event.target);

        axios.post("https://www.somePlace.com/auth/login", {
            username: data.get("username"),
            password: data.get("password")
        }).then(result => {
            if (result.status === 200) {
                this.setAuthTokens(result.data);
                this.setState({setLoggedIn: true});
            } else {
                this.setState({setIsError: true});
            }
        }).catch(e => {
            this.setState({setIsError: true});
        });
    }

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    render() {
        return(
            <div className="login">
                <Navbar />
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        name="username"
                        id="standard-basic"
                        label="Email"
                        color="secondary"
                        fullWidth
                    />
                    <TextField
                        name="password"
                        id="standard-basic"
                        label="Password"
                        color="secondary"
                        fullWidth
                    />
                    <Button type="submit" variant="outlined" color="default">Login</Button>
                </form>
            </div>
        )
    }
}

export default Login
