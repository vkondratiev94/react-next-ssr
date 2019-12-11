import React, { Component } from "react";
import MainLayout from "../components/layouts/mainLayout";

export default class Contact extends Component {
  render() {
    return (
      <MainLayout>
        <h1>Contact</h1>
        <div style={{ color: "red" }}>Hello guys</div>
        <div className="jsxStyled">Styles with styled-jsx</div>
        <div className="contact_static">Styles with styles.css</div>
        <div>
          <img src="/static/images/next.png" />
        </div>

        {/* built in styled-jsx */}
        <style jsx>{`
          .jsxStyled {
            color: blue;
          }
        `}</style>
      </MainLayout>
    );
  }
}
