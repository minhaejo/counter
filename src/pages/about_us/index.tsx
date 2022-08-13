import { NextPage } from "next";
import React from "react";

interface Props {
  res: string;
}
const index: NextPage<Props> = ({ res }) => {
  return <div>test{res}</div>;
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await new Promise((res) => {
    setTimeout(() => {
      res("aa");
    }, 2000);
  });
  // const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      res,
    },
  };
}

export default index;
