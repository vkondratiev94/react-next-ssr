import React, { Component } from "react";
import axios from "axios";
import Link from "next/link";
import MainLayout from "../components/layouts/mainLayout";
import styles from "../styles/main.scss";

export default class Home extends Component {
  static async getInitialProps(context) {
    let userData;

    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      userData = res.data;
    } catch {
      console.log("error");
    }

    console.log("context", context);

    return {
      user: {
        name: "John",
        lastname: "Doe"
      },
      userData
    };
  }

  constructor(props) {
    super(props);
  }

  renderUserList = users =>
    users.map((user, index) => (
      <li className="list-group-item" key={index}>
        {/* <Link href={`/users/profile?userId=${user.id}`}> */}
        <Link
          // masking actual url in 'href' with fake in 'as' prop
          as={`/users/profile/${user.id}`}
          href={{
            pathname: "/users/profile",
            query: {
              userId: user.id
            }
          }}
        >
          <a>{user.name}</a>
        </Link>
      </li>
    ));

  render() {
    return (
      <MainLayout>
        <h1>Pick a user</h1>
        <ul className="list-group">
          {this.renderUserList(this.props.userData)}
        </ul>
      </MainLayout>
    );
  }
}
