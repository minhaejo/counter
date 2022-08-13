import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import IntersectionWrapper from "./interSectionWrapper";

interface Params {
  classNames?: string;
  children: string | ReactNode;
}

const InterSectionContainer: FC<Params> = ({ children, classNames }) => {
  const elementRef = useRef<null | HTMLDivElement>(null);
  const [isMount, setIsMount] = useState<boolean>(false);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0.01,
      rootMargin: "100px",
    };
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && elementRef.current) {
          observer.unobserve(elementRef.current);
          setIsMount(true);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <IntersectionWrapper classNames={classNames ? classNames : ""}>
      <div ref={elementRef} className="w-full">
        {isMount && children}
      </div>
    </IntersectionWrapper>
  );
};

export default InterSectionContainer;
