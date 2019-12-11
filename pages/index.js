import React, { Component } from "react";
import axios from "axios";
import MainLayout from "../components/layouts/mainLayout";
import styles from "../styles/main.scss";

export default class Home extends Component {
  static async getInitialProps(context) {
    let userData;

    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
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

    this.state = {
      user: this.props.user,
      userData: this.props.userData
    };
  }

  render() {
    return (
      <MainLayout>
        <h1 className={styles.superAwesome}>Welcome to my page!</h1>
      </MainLayout>
    );
  }
}
