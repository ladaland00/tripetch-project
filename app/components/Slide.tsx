"use client";
import React, { useEffect, useRef, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { useDebounce } from "../hooks/useDebounce";
interface Props {
  mobile_image: string;
  tablet_image: string;
  desktop_image: string;
  list: IListProps[];
  title: string;
}
interface IListProps {
  title: string;
  description: string;
}
const Slide = (props: Props) => {
  const { title, list, desktop_image, tablet_image, mobile_image } = props;
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
    <div className="box">
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
          <source srcSet={mobile_image} media="(max-width: 767px)" />
          <source
            media="(min-width:767px) and (max-width: 1239.99px)"
            srcSet={tablet_image}
          />

          <source
            media="(min-width: 1240px)"
            srcSet={desktop_image}
            height={851}
          />
          <img className="mx-auto my-auto" src={mobile_image} alt="box-img" />
        </picture>
      </figure>
    </div>
  );
};

export default Slide;
