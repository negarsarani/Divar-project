import El from "../../../library/El";

const ResponsiveMenu = () => {
  return El({
    element: "div",
    className: "navbar flex flex-col shadow-md  w-full fixed top-0 bg-white ",
    child: El({
      element: "div",
      className: " hidden lg:block",
      child: El({
        element: "div",
        className: "p-4 shadow-md flex justify-between w-full",
        child: [
          El({
            element: "div",
            className: "flex gap-3 w-8/12",
            child: [
              El({
                element: "div",
                className: "w-1/12 flex justify-center",
                child: El({
                  element: "img",
                  className: "w-12",
                  src: "./src/assest/svg/Logo.svg",
                }),
              }),
              El({
                element: "div",
                className: "flex border-r-2 px-2 gap-3 w-11/12",
                child: [
                  El({
                    element: "div",
                    className: "flex  items-center  xl:w-1/12 ",
                    child: [
                      El({
                        element: "div",
                        child: El({
                          element: "img",
                          className: "w-6",
                          src: "./src/assest/svg/location.svg",
                        }),
                      }),
                      El({
                        element: "span",
                        className: "text-neutral-500 pr-2",
                        child: "تهران",
                      }),
                    ],
                  }),
                  El({
                    element: "div",
                    className: "flex gap-3 items-center justify-center w-2/12",
                    child: [
                      El({
                        element: "span",
                        className: "text-neutral-500",
                        child: "دسته‌ها",
                      }),
                      El({ element: "img", src: "./src/assest/svg/arrow.svg" }),
                    ],
                  }),
                  El({
                    element: "div",
                    className: "w-7/12",
                    child: El({
                      element: "div",
                      className:
                        "flex items-center space-x-1 w-full bg-neutral-100 p-3 ",
                      child: [
                        El({
                          element: "div",
                          child: El({
                            element: "img",
                            src: "./src/assest/svg/search.svg",
                          }),
                        }),
                        El({
                          element: "input",
                          className:
                            "overflow-hidden text-ellipsis bg-transparent w-full text-neutral-400 px-2 ",
                          placeholder: "جستجو در همه آگهی ها",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex items-center gap-4 w-4/12 justify-end",
            child: [
              El({
                element: "div",
                className: "flex gap-2",
                child: [
                  El({
                    element: "div",
                    child: El({
                      element: "img",
                      src: "./src/assest/svg/user.svg",
                    }),
                  }),
                  El({
                    element: "span",
                    className: "text-neutral-500",
                    child: "دیوار من",
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex gap-2",
                child: [
                  El({
                    element: "div",
                    child: El({
                      element: "img",
                      src: "./src/assest/svg/chat.svg",
                    }),
                  }),
                  El({
                    element: "span",
                    className: "text-neutral-500",
                    child: "چت",
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex gap-2",
                child: El({
                  element: "span",
                  className: "text-neutral-500",
                  child: "پشتیبانی",
                }),
              }),
              El({
                element: "div",
                className: "flex gap-2",
                child: El({
                  element: "button",
                  className:
                    "btn bg-red-800 text-white  p-2 xl:p-3 rounded-sm font-bold",
                  child: "ثبت آگهی",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
};
export default ResponsiveMenu;
