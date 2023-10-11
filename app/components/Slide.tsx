"use client";
import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
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
  const PatternIndex = (index: number) => {
    if (index < 9) return "0" + (index + 1);
    if (index === 9) return "10";
    return String(index + 1);
  };
  const isMobile = useMediaQuery("(max-width: 767.98px)");
  const ShowListComponent = () => (
    <>
      {list.map((detail, id) => (
        <div
          key={"detail-" + detail.title}
          className={`py-[17px] px-[18px] md:pb-[24px] md:pt-0  md:pr-[18px] description-${id}`}
        >
          <div className="flex items-center">
            <p className="text-[14px] md:text-[18px] mr-2 border-b-4 border-purple-color md:my-6">
              {PatternIndex(id)}
            </p>
            <h3 className="text-[28px] md:text-[36px] text-dark-grey-color tracking-[1.5px]">
              {detail.title}
            </h3>
          </div>

          <p className="text-[15px] md:text-[18px] md:leading-[28px]">
            {detail.description}
          </p>
        </div>
      ))}
    </>
  );
  return (
    <div className="w-screen  pb-14 md:pb-0 box md:pt-16">
      <h2 className="tittle-area w-screen text-[50px] md:text-[90px] text-grey-color px-[18px]">
        {title}
      </h2>
      {isMobile ? (
        <div className="mobile">
          <ShowListComponent />
        </div>
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
