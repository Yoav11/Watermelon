import React, {Component} from 'react';
import { Button, TextField } from '@material-ui/core';

class Signup extends Component {
    render() {
        return(
            <div className="login">
                <form>
                    <TextField
                        name="email"
                        id="standard-basic"
                        label="Email"
                        color="secondary"
                    />
                    <TextField
                        name="password"
                        id="standard-basic"
                        type="password"
                        label="Password"
                        color="secondary"
                    />
                    <TextField
                        name="password"
                        id="standard-basic"
                        type="password"
                        label="Password again"
                        color="secondary"
                    />
                    <Button type="submit" variant="outlined" color="secondary">Sign-up</Button>
                </form>
            </div>
        )
    }
}

export default Signup
