import React, { Component } from 'react';
import './snippet.css';
import { Favorite, Comment } from '@material-ui/icons';
import { Link } from 'react-router-dom'

class Snippet extends Component {
    shortenText (text) {
        return(
            <p className='text'>{this.props.text.substring(0, 250)} ...
            <Link to={"/detail/" + this.props.id}>read more</Link></p>
        )
    }

    render () {
        return(
            <div className='snippet'>
                <h1>{this.props.title}</h1>
                <h5>By {this.props.author}</h5>
                <p className='desc'>{this.props.description}</p>
                {this.shortenText(this.props.text)}
                <div className="icons">
                    <div className="favorites">
                        <Favorite></Favorite>
                        <p>14</p>
                    </div>
                    <div className="comments">
                        <Comment></Comment>
                        <p>2</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Snippet;
