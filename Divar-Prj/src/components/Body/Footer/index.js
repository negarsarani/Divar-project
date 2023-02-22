import El from "../../../library/El";

const Footer = () => {
  return El({
    element: "footer",
    className:
      "fixed bottom-0 left-0  block xl:hidden w-full z-[1000] bg-[#ffff] border border-2 ",
    child: [
      El({
        element: "div",
        className: "flex items-center justify-evenly md:p-4 p-[5px]",
        child: [
          El({
            element: "div",
            className:
              "flex flex-col md:flex-row items-center justify-center  md:gap-2 ",
            child: [
              El({
                element: "div",
                child: El({
                  element: "img",
                  src: "./src/assest/img/img-footer/Logo.svg",
                }),
              }),
              El({
                element: "span",
                child: "آگهی‌ها",
                className: "text-red-700 text-md font-bold",
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "flex flex-col md:flex-row items-center justify-center  md:gap-2 ",
            child: [
              El({
                element: "div",
                child: El({
                  element: "img",
                  src: "./src/assest/img/img-footer/list.svg",
                }),
              }),
              El({
                element: "span",
                child: "دسته‌ها",
                className: "text-neutral-400 text-md font-bold",
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "flex flex-col md:flex-row items-center justify-center  md:gap-2 ",
            child: [
              El({
                element: "div",
                child: El({
                  element: "img",
                  src: "./src/assest/img/img-footer/plus-fill.svg",
                }),
              }),
              El({
                element: "span",
                child: "ثبت آگهی",
                className: "text-neutral-400 text-md font-bold",
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "flex flex-col md:flex-row items-center justify-center  md:gap-2 ",
            child: [
              El({
                element: "div",
                child: El({
                  element: "img",
                  src: "./src/assest/img/img-footer/chat-fill.svg",
                }),
              }),
              El({
                element: "span",
                child: "چت",
                className: "text-neutral-400 text-md font-bold",
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "flex flex-col md:flex-row items-center justify-center  md:gap-2 ",
            child: [
              El({
                element: "div",
                child: El({
                  element: "img",
                  src: "./src/assest/img/img-footer/person-fill.svg",
                }),
              }),
              El({
                element: "span",
                child: "دیوار من",
                className: "text-neutral-400 text-md font-bold",
              }),
            ],
          }),
          
        ],
      }),
    ],
  });
};
export default Footer;
{
  /* <div class="justify-evenly  text-neutral-400"></div> */
}
