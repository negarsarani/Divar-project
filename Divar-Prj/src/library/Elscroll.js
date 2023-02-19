import El from "./El";

const Elscroll = (item , icon="") => {
    console.log(item);
    console.log(icon);
  return El({
    element: "div",
    className:
      "flex items-center border flex-shrink-0 border-[#a7a3a3] rounded-3xl px-3 py-1",
    child: [
      El({
        element: "img",
        src: icon,
      }),
      El({
        element: "span",
        className: "pr-1 text-neutral-600",
        child: item,
      }),
    ],
  });
};
export default Elscroll;

