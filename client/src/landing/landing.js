import React, { Component } from 'react';
import axios from 'axios';
import './landing.css';
import Navbar from '../navbar/navbar.js';
import Snippet from '../snippet/snippet.js';

class Landing extends Component {

  state = {
    blogs: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blogs')
        .then(res => {
            const blogs = res.data.data;
            this.setState({ blogs });
        })
        .catch(err => {
            console.log(err);
        });
  }

  render() {
    const blogList = [...this.state.blogs].reverse().map((blog) =>
        <li key={blog._id}>
            <Snippet
                id={blog._id}
                title={blog.title}
                author={blog.author}
                description={blog.description}
                text={blog.text}
            ></Snippet>
        </li>
    );

    return (
      <div className="Landing">
          <Navbar></Navbar>
          <ul className="blogList">{blogList}</ul>
      </div>
    );
  }
}

export default Landing;
