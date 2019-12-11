import React, { Component } from "react";
import axios from "axios";
import MainLayout from "../../components/layouts/mainLayout";

export default class Profile extends Component {
  static async getInitialProps({ query }) {
    let user;

    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${query.userId}`
      );
      user = res.data;
    } catch (error) {
      console.error(error);
    }

    return { user };
  }

  renderUser = user => (
    <div>
      <div>Name: {user.name}</div>
      <div>Phone: {user.phone}</div>
      <div>Email: {user.email}</div>
    </div>
  );

  render() {
    return (
      <MainLayout>
        <br />
        <h1>User Profile</h1>
        {this.renderUser(this.props.user)}
      </MainLayout>
    );
  }
}
