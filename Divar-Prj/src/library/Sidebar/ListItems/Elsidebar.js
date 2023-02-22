import El from "../../El";

const Elsidebar = (src, text) => {
  return El({
    element: "div",
    className: "flex gap-2",
    child: [
      El({
        element: "img",
        src: src,
      }),
      El({
        element: "span",
        child: text,
      }),
    ],
  });
};

export default Elsidebar;
