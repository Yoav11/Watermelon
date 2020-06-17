import React, { Component } from 'react';
import axios from 'axios';
import './writer.css'
import Navbar from '../navbar/navbar.js'
import { Button, TextField } from '@material-ui/core';
import { Redirect } from 'react-router-dom'

class Writer extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            submitted: false,
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data)
        if(this.props.location.state) {
            axios.put('/blogs/' + this.props.location.state.data._id, {
              author: "Yoav Nir",
              title: data.get("title"),
              description: data.get("description"),
              text: data.get("text")
            })
            .then((response) => {
                this.setState({ submitted: true })
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        } else {
            axios.post('/blogs', {
              author: "Yoav Nir",
              title: data.get("title"),
              description: data.get("description"),
              text: data.get("text")
            })
            .then((response) => {
                this.setState({ submitted: true })
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    render() {
        const data = this.props.location.state ? this.props.location.state.data : null;

        if(this.state.submitted == false) {
            return(
                <div className="writer">
                    <Navbar />
                    <h1>Writer's page</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="title">
                            <TextField
                                name="title"
                                id="standard-basic"
                                label="Title"
                                color="secondary"
                                fullWidth
                                defaultValue={data ? data.title : ""}
                            />
                        </div>
                        <div className="description">
                            <TextField
                                name="description"
                                id="standard-basic"
                                fullWidth
                                label="Description"
                                color="secondary"
                                defaultValue={data ? data.description : ""}
                            />
                        </div>
                        <div className="text">
                            <TextField
                                name="text"
                                id="filled"
                                variant="filled"
                                fullWidth
                                multiline
                                label="Text"
                                color="secondary"
                                rows={10}
                                defaultValue={data ? data.text : ""}
                            />
                        </div>
                        <div className="submit">
                            <Button type="submit" variant="outlined" color="default">Submit</Button>
                        </div>
                    </form>
                </div>
            )
        } else {
            return(
                <Redirect to="/" />
            )
        }
    }
}

export default Writer
