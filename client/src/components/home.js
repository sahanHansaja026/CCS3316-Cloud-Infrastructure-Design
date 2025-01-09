import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';

export default class home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.retrievePosts();
    }

    retrievePosts() {
        axios.get("http://localhost:7500/posts")
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        posts: res.data.existingPosts
                    });
                }
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }
    onDelete = (id) => {
        axios
          .delete(`http://localhost:7500/post/delete/${id}`)
          .then((res) => {
            if (res.data.message === "Post deleted successfully") {
              alert("Delete successful");
              this.retrievePosts();
            } else {
              alert("Error deleting post");
            }
          })
          .catch((error) => {
            console.error("Error deleting post:", error);
            alert("Error deleting post");
          });
      }
      
    
    render() {
        return (
          <div>
            <h2>Package Details</h2>
            <table>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">category</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map((post, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a
                        href={`/post/${post._id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {post.name}
                      </a>
                    </td>
                    <td>{post.price}</td>
                    <td>{post.category}</td>
                    <td>
                      <a className="btn btn-warning" href={`/edit/${post._id}`}>
                        <i className="fa fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() => this.onDelete(post._id)}
                      >
                        <i className="fa fa-trash"></i>&nbsp;Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-success">
              <a
                href="/add"
                style={{ textDecoration: "none", color: "purple" }}
              >
                <i className="fa fa-plus"></i>&nbsp;Create New Details
              </a>
            </button>
          </div>
        );
    }
}
