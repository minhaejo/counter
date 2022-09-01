import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../common/button";

const Home: NextPage = () => {
  const requestFunction = () => {
    axios
      .post("/url")
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    //test 요청임 올바른 api로 하지않았기때문에 에러
  };

  return (
    <>
      <div className=" text-lg text-purple-500 text-[40px]">테스트 건호짱</div>
      <Button
        type="submit"
        style={{
          width: 60,
          height: 30,
          backgroundColor: "red",
          display: "block",
        }}
        onClick={requestFunction}
      >
        {<span>전송하기</span>}
      </Button>
      <Button
        type="link"
        href="/about"
        style={{
          width: 60,
          height: 30,
          backgroundColor: "blue",
          display: "block",
        }}
      >
        {<span>link</span>}
      </Button>
      <Button
        type="button"
        style={{
          width: 60,
          height: 30,
          backgroundColor: "pink",
          display: "block",
        }}
        onClick={() => {
          console.log("clicked");
        }}
      >
        {<span>button</span>}
      </Button>
    </>
  );
};

export default Home;
