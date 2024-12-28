import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/createpost.css";

const EditPost = () => {
  const [post, setPost] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    brand: "",
    size: "",
    color: "",
    weight: "",
  });

  const { id } = useParams();

  useEffect(() => {
    retrievePost();
  }, []);

  const retrievePost = () => {
    axios
      .get(`http://localhost:7500/post/${id}`)
      .then((res) => {
        if (res.data.success) {
          setPost(res.data.post);
          console.log("Post retrieved successfully:", res.data.post);
        } else {
          console.log("Error fetching post:", res.data.error);
        }
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:7500/post/update/${id}`, post)
      .then((res) => {
        console.log(res.data);
        alert("update sucssesful");
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  };

  return (
    <div>
      <center>
        <div className="container1">
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="title">Update Employee Details</div>
              <br />
              <label>
                Employee Name :
                <input
                  type="text"
                  name="name"
                  value={post.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Price :
                <input
                  type="text"
                  name="price"
                  value={post.price}
                  onChange={handleChange}
                />
              </label>
              <label>
                category:
                <input
                  type="text"
                  name="category"
                  value={post.category}
                  onChange={handleChange}
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={post.description}
                  onChange={handleChange}
                />
              </label>
              <label>
                Brand:
                <input
                  type="text"
                  name="brand"
                  value={post.brand}
                  onChange={handleChange}
                />
              </label>
              <label>
                Size:
                <input
                  type="text"
                  name="size"
                  value={post.size}
                  onChange={handleChange}
                />
              </label>
              <label>
                Color:
                <input
                  type="text"
                  name="color"
                  value={post.color}
                  onChange={handleChange}
                />
              </label>
              <label>
                Weight:
                <input
                  type="text"
                  name="weight"
                  value={post.weight}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Update to System</button>
            </form>
          </div>
        </div>
      </center>
    </div>
  );
};

export default EditPost;
