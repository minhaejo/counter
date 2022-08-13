import React, { FC, ReactNode } from "react";

interface Params {
  children: ReactNode;
  classNames: string;
}
const IntersectionWrapper: FC<Params> = ({ classNames, children }) => {
  return (
    <div className={`${classNames} flex flex-wrap justify-center w-full`}>
      {children}
    </div>
  );
};

export default IntersectionWrapper;
