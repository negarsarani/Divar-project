import El from "../../../../library/El";
import DataCard from "./data";

const Cards = () => {
  return El({
    element: "div",
    className: "w-full xl:pr-10 ",
    child: El({
      element: "main",
      className: "flex flex-col  w-full relative",
      child: [
        El({
          element: "div",
          className: "flex relative  w-full p-3 md:justify-end",
          child: El({
            element: "span",
            className: " text-neutral-500 justify-center",
            child: "دیوار تهران انواع آگهی‌ها و خدمات در تهران",
          }),
        }),
        El({
          element: "div",
          className:
            "grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  w-full",
            child:DataCard
        }),
      ],
    }),
  });
};
export default Cards;

