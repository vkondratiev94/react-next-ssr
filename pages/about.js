import React, { Component } from "react";
import MainLayout from "../components/layouts/mainLayout";
import Message from "../components/includes/message";
import Router from "next/router";

export default class About extends Component {
  handleRouteStart = url => {
    console.log("App is changing to:", url);
  };

  handleRouteChangeComplete = url => {
    console.log("App changed:", url);
  };

  handleBeforeHistoryChange = url => {
    console.log("App changed history:", url);
  };

  componentDidMount() {
    Router.events.on("routeChangeStart", this.handleRouteStart);
    Router.events.on("routeChangeComplete", this.handleRouteChangeComplete);
    Router.events.on("beforeHistoryChange", this.handleBeforeHistoryChange);

    // called before going back from the page
    // Router.beforePopState(({ url, as, options }) => {
    //   // if previous page is '/contact', skip coming back
    //   if (as === "/contact") {
    //     window.location.href = "/whatever";
    //     return false;
    //   }
    //   return true;
    // });

    // Router.replace("/contact", "/contact/56");
  }

  render() {
    return (
      <MainLayout>
        <h1>About</h1>
        <Message />
        <br />
        <span onClick={() => Router.push("/users/profile/1")}>
          Click me now!
        </span>
      </MainLayout>
    );
  }
}
