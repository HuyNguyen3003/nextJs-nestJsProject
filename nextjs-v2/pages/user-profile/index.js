import React from "react";

export default function UserProfile(props) {
  return <h1>{props.userName}</h1>;
}

export const getServerSideProps = (contex) => {
  return {
    props: {
      userName: "nax",
    },
  };
};
