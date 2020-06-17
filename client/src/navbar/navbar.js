import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './navbar.css';
import { ArrowDropDown, AccountCircle } from '@material-ui/icons';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddIcon from '@material-ui/icons/Add';
import watermelonEmoji from './watermelon_emoji.png'
import { withAuth } from '@okta/okta-react';

class Navbar extends Component {

    render() {
        return(
            <div className="navbar">
                <div className="components">
                    <ul>
                        <li><a href="/">home</a></li>
                        <li><a href="/writer">about me</a></li>
                        <li><a href="#">topics <ArrowDropDown /></a></li>
                    </ul>
                </div>
                <img src={watermelonEmoji}></img>
                <div className="varieties">
                    <ul>
                        <li><Button
                            variant="contained"
                            color="primary"
                            startIcon={<AccountBoxIcon />}
                            type="submit"
                          >
                            login
                        </Button></li>
                        <li><Button
                            variant="contained"
                            color="secondary"
                            startIcon={<AccountBoxIcon />}
                            type="submit"
                          >
                            sign up
                        </Button></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withAuth(Navbar);
