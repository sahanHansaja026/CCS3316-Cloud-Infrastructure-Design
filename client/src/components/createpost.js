import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/createpost.css"; // Make sure you have styles for your form

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPost: {
        name: "",
        price: "",
        category: "",
        description: "",
        brand: "",
        size: "",
        color: "",
        weight: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios
      .get("http://localhost:7500/profile")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            posts: res.data.existingPosts,
          });
          console.log("Posts retrieved successfully:", this.state.posts);
        } else {
          console.log("Error fetching posts", res.data.error);
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newPost: {
        ...prevState.newPost,
        [name]: value,
      },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:7500/post/save", this.state.newPost)
      .then((res) => {
        if (res.data.success) {
          console.log("Post added successfully");
          this.setState({
            newPost: {
              name: "",
              price: "",
              category: "",
              description: "",
              brand: "",
              size: "",
              color: "",
              weight: "",
            },
          });
          this.retrievePosts();
        } else {
          console.error("Error adding post:", res.data.error);
        }
      })
      .catch((error) => {
        console.error("Error adding post:", error);
      });
  }

  render() {
    return (
      <div>
        <center>
          <div className="container1">
            <div className="content">
              <form onSubmit={this.handleSubmit}>
                <div className="title">Add Product Details</div>
                <br />
                <label>
                  Item Name:
                  <input
                    type="text"
                    name="name"
                    value={this.state.newPost.name}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Item Price:
                  <input
                    type="text"
                    name="price"
                    value={this.state.newPost.price}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Category:
                  <input
                    type="text"
                    name="category"
                    value={this.state.newPost.category}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Description:
                  <input
                    type="text"
                    name="description"
                    value={this.state.newPost.description}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Brand:
                  <input
                    type="text"
                    name="brand"
                    value={this.state.newPost.brand}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Size:
                  <input
                    type="text"
                    name="size"
                    value={this.state.newPost.size}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Color:
                  <input
                    type="text"
                    name="color"
                    value={this.state.newPost.color}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Weight:
                  <input
                    type="text"
                    name="weight"
                    value={this.state.newPost.weight}
                    onChange={this.handleChange}
                  />
                </label>
                <button type="submit">Store in the System</button>
              </form>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
