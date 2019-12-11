import React from "react";
import MainLayout from "../../components/layouts/mainLayout";

const Profile = props => {
  return (
    <MainLayout>
      <h1>Profile</h1>
    </MainLayout>
  );
};

Profile.getInitialProps = async context => {
  console.log("context", context);
  return { values: [1, 2, 3, 4] };
};

export default Profile;
