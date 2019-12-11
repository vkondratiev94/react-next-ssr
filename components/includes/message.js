import React from "react";
import { withRouter } from "next/router";

const Message = props => {
  const clickHandler = () => {
    props.router.push(
      {
        pathname: "/user/profile",
        query: { userId: 1 }
      },
      `/users/profile/1`
    );
  };

  return (
    <>
      <div>Hello</div>
      <div>I am the "{props.router.pathname}" page</div>
      <div>
        Click <span onClick={clickHandler}>here</span> to read more
      </div>
    </>
  );
};

export default withRouter(Message);
