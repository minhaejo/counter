import Link from "next/link";
import React, { FC } from "react";

interface Props {
  type: "button" | "link" | "submit";
  children?: React.ReactNode;
  onClick?: Function;
  style?: Object;
  href?: string;
  className?: string;
}

const Button: FC<Props> = ({
  type,
  children,
  onClick = () => {},
  style,
  href = "/",
}) => {
  const onClickHandler = () => {
    onClick();
  };

  return (
    <>
      {type === "button" ? (
        <button onClick={onClickHandler} style={style}>
          {children}
        </button>
      ) : null}
      {type === "link" ? (
        <Link href={href}>
          <button style={style}>{children}</button>
        </Link>
      ) : null}
      {type === "submit" ? (
        <button onClick={onClickHandler} style={style}>
          {children}
        </button>
      ) : null}
    </>
  );
};

export default Button;

{
  /* 변환된 html을 보니 <a href="/about/">
          <button style="width: 60px; height: 30px; background-color: blue; display: block;">
          <span>link</span>
          </button>
          </a> 로변환됨 그렇기때문에 버튼함수 필요없었음*/
}
