import { NextPage } from "next";
import React from "react";
interface Props {
  posts: string;
}
const index: NextPage<Props> = () => {
  return <div>index</div>;
};

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await new Promise((res) => {
    setTimeout(() => {
      res("aa");
    }, 2000);
  });
  // const posts = await res.json();
  const posts = res;
  // Pass data to the page via props
  return { props: { posts } };
}

export default index;
