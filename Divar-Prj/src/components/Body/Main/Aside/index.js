import El from "../../../../library/El";

const Aside = () => {
  return El({
    element: "div",
    className: "bg-red-400 w-4/12 hidden lg:block", //i change the w !!!
    child: El({
      element: "aside",
      className: "",
      child: "ssssssssssssss",
    }),
  });
};
export default Aside;
