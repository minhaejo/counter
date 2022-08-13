import { NextPage } from "next";
import React from "react";
interface Props {
  posts: string;
}
const index: NextPage<Props> = () => {
  return <div>index</div>;
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await setTimeout(() => {
    return "aa";
  }, 2000);
  // const posts = await res.json();
  const posts = res;
  // Pass data to the page via props
  return { props: { posts } };
}

export default index;
