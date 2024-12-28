import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/show_deatails.css";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:7500/post/${id}`)
      .then((res) => {
        if (res.data.success) {
          setPost(res.data.post);
        }
      })
      .catch((error) => {
        console.error("Error fetching post details:", error);
      });
  }, [id]);

  return (
    <div>
      <h1>{post.name}</h1>
      <hr />
      <div className="content">
        <table>
          <tbody>
            <tr>
              <td>
                <b>Item Name</b>
              </td>
              <td>{post.name}</td>
            </tr>
            <tr>
              <td>
                <b>Item Price</b>
              </td>
              <td>LKR {post.price}</td>
            </tr>
            <tr>
              <td>
                <b>Category</b>
              </td>
              <td>{post.category}</td>
            </tr>
            <tr>
              <td>
                <b>Description</b>
              </td>
              <td>{post.description}</td>
            </tr>
            <tr>
              <td>
                <b>Brand</b>
              </td>
              <td>{post.brand}</td>
            </tr>
            <tr>
              <td>
                <b>Size</b>
              </td>
              <td>{post.size}</td>
            </tr>
            <tr>
              <td>
                <b>Color</b>
              </td>
              <td>{post.color}</td>
            </tr>
            <tr>
              <td>
                <b>Weight</b>
              </td>
              <td>{post.weight}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostDetails;
