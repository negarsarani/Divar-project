import El from "../../El";

const ElVerify = (src) => {
  return El({
    element: "div",
    child: El({
      element: "img",
      src: src,
    }),
  });
};
export default ElVerify;