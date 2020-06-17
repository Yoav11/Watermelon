import React, { Component } from 'react';
import axios from 'axios';
import './detail.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Navbar from '../navbar/navbar.js';
import  { Redirect } from 'react-router-dom'

class Detail extends Component {

    constructor() {
        super();
        this.state = {
            data: {},
            edit: false,
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    async handleDelete(event) {
        const { params } = this.props.match
        try {
            await axios.delete('http://localhost:5000/blogs/' + params.id)
        } catch(error) {
            console.log(error);
        }
    }

    handleEdit(event) {
        this.setState({edit: true});
    }

    componentDidMount() {
      const { params } = this.props.match
      axios.get('http://localhost:5000/blogs/' + params.id)
          .then(res => {
              const data = res.data.data;
              console.log(data)
              this.setState({ data });
          })
          .catch(err => {
              this.props.history.push("/");
              console.log(err);
          });
    }

    render () {
        if(this.state.edit == true) {
            return(
                <Redirect to={{
                    pathname: "/writer",
                    state: {
                        data: this.state.data,
                        edit: this.state.edit,
                    }
                }}/>
            )
        } else if (this.state.data) {
            return(
                <div className="detail">
                    <Navbar></Navbar>
                    <h1>{this.state.data.title}</h1>
                    <div className="subtitle">
                        <h3>By {this.state.data.author}</h3>
                        <div className="forms">
                            <form onSubmit={this.handleDelete}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<DeleteIcon />}
                                    type="submit"
                                  >
                                    Delete
                                </Button>
                            </form>
                            <form onSubmit={this.handleEdit}>
                                <Button
                                    variant="contained"
                                    color="default"
                                    startIcon={<CreateIcon />}
                                    type="submit"
                                  >
                                    Edit
                                </Button>
                            </form>
                        </div>
                    </div>
                    <h5>{this.state.data.description}</h5>
                    <p>{this.state.data.text}</p>
                </div>
            )
        } else {
            return(<Redirect to="/" />)
        }

    }
}

export default Detail;
