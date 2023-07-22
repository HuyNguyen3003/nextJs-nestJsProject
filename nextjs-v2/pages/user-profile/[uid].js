import React from "react";

export default function detailUser(props) {
  return <div>{props.id}</div>;
}

export const getServerSideProps = (contex) => {
  const { params } = contex;
  const uId = params.uid;
  return {
    props: {
      id: "Nax: -> " + uId,
    },
  };
};
