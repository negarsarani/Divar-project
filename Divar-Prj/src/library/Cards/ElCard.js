import El from "../El";

const ElCard = (text, src) => {
  return El({
    element: "div",
    className: "flex  rounded-sm shadow-sm border p-3 ",
    child: [
      text,
      El({
        element: "div",
        className: "w-1/12 flex items-end justify-end ",
        child: El({
          element: "img",
          src: "./src/assest/svg/chat.svg",
        }),
      }),
      El({
        element: "div",
        className: "w-4/12 flex justify-start",
        child: El({
          element: "div",
          className: "flex",
          child: El({
            element: "img",
            className: "aspect-square",
            src: src,
          }),
        }),
      }),
    ],
  });
};

export default ElCard;
