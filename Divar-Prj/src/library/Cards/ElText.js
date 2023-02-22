import El from "../El";

const ElText = (h1, ...rest) => {
  let arrRest = rest;
  const Eachp = arrRest.map((el) =>
    El({
      element: "p",
      child: el,
      className:
        "text-neutral-500 sm:text-md  md:text-lg  overflow-ellipsis  overflow-hidden  truncate",
    })
  );
  return El({
    element: "div",
    className: "w-7/12 text-lg flex flex-col justify-between",
    child: [
      El({
        element: "h1",
        className:
          "font-bold text-xl overflow-ellipsis  overflow-hidden  truncate  text-black",
        child: h1,
      }),
      El({
        element: "div",
        child: Eachp,
      }),
    ],
  });
};

export default ElText;

// ElText("salam", Eachp("sss", "ddd"));
