import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import Home from "./components/home";
import NavBar from "./components/navbar";
import PostDetails from "./components/postdetails";
import CreatePost from "./components/createpost";
import EditPost from "./components/editpost";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />{" "}
            <Route path="/add" component={CreatePost} />
            <Route path="/edit/:id" component={EditPost} />
            <Route path="/post/:id" component={PostDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
