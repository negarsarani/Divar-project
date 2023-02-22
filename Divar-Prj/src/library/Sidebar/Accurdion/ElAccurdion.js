import El from "../../El";

const ElAccurdion = (text) => {
  return El({
    element: "div",
    className:
      "flex gap-2 border-t-2  p-3 text-neutral-600  border-neutral-400",
    child: [
      El({ element: "img", src: "./src/assest/svg/arrow.svg" }),
      El({ element: "span", child: text }),
    ],
  });
};
export default ElAccurdion;
