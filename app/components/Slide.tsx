"use client";
import React, { useEffect, useRef, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { useDebounce } from "../hooks/useDebounce";
interface Props {
  mobile_image: string;
  desktop_image: string;
  list: IListProps[];
  title: string;
}
interface IListProps {
  title: string;
  description: string;
}
const Slide = (props: Props) => {
  const { title, list, desktop_image, mobile_image } = props;
  const [currentIndex, setIndex] = useState(0);

  const scrollWithMoreDebounce = useDebounce((e) => {
    const currentTarget = e.target;
    const width = currentTarget.clientWidth;
    const currentXPosition = currentTarget.scrollLeft;
    setIndex(currentXPosition / width);
  }, 500);

  const PatternIndex = (index: number) => {
    if (index < 9) return "0" + (index + 1);
    if (index === 9) return "10";
    return String(index + 1);
  };
  const isMobile = useMediaQuery("(max-width: 767.98px)");
  const ShowListComponent = () => (
    <>
      {list.map((detail, id) => (
        <div key={"detail-" + detail.title} className={`detail-${id}`}>
          <div className="sub-title-group flex items-center">
            <p className="sub-title-index">{PatternIndex(id)}</p>
            <h3 className="sub-title-text ">{detail.title}</h3>
          </div>
          <p className="description">{detail.description}</p>
        </div>
      ))}
    </>
  );
  return (
    <div className="w-screen pb-12 md:pb-0 box md:pt-16">
      <h2 className="tittle-area">{title}</h2>
      {isMobile ? (
        <>
          <div className="mobile" onScroll={scrollWithMoreDebounce}>
            <ShowListComponent />
          </div>
          <dl className="pagination">
            {list.map((_, id) => (
              <dd
                key={`pagination-${title}-${id}`}
                className={`bullet-pagination ${
                  id == currentIndex ? "active" : ""
                }`}
              ></dd>
            ))}
          </dl>
        </>
      ) : (
        <ShowListComponent />
      )}

      <figure className="order-1">
        <picture className="flex">
          <source srcSet={mobile_image} media="(orientation: portrait)" />
          <img className="mx-auto my-auto" src={desktop_image} alt="" />
        </picture>
      </figure>
    </div>
  );
};

export default Slide;
