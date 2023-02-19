import El from "../../../library/El";

const Searchbox = () => {
  return El({
    element: "div",
    className: "p-4 shadow-md",
    child: El({
      element: "div",
      className: "flex w-full justify-between items-center p-2 bg-neutral-100",
      child: [
        El({
          element: "div",
          className: "flex items-center space-x-1 w-full",
          child: [
            El({
              element: "img",
              src: "./src/assest/svg/search.svg",
            }),
            El({
              element: "span",
              className:
                " overflow-hidden text-ellipsis text-neutral-400 px-2  w-fit",
              innerText: "جستجو در همه آگهی ها",
            }),
          ],
        }),
        El({
          element: "div",
          className: "flex items-center justify-center space-x-1",
          child: [
            El({
              element: "span",
              className: "text-neutral-500 border-r-2  border-neutral-300 pr-2",
              innerText: "تهران",
            }),
            El({
              element: "img",
              src:"./src/assest/svg/location.svg",
            }),
          ],
        }),
      ],
    }),
  });
};
export default Searchbox;


  /* <div class="p-4 shadow-md">
  <div class="flex w-full justify-between items-center p-2 bg-neutral-100  ">
    <div class="flex items-center space-x-1 w-full ">
      <svg
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0" />
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11Z"
            fill="#B8B8B8"
          />
        </g>
      </svg>
      <span class=" overflow-hidden text-ellipsis text-neutral-400 px-2  w-fit">
        جستجو در همه آگهی ها{" "}
      </span>
    </div>
    <div class="flex items-center justify-center space-x-1 ">
      <span class="text-neutral-500 border-r-2  border-neutral-300 pr-2">
        تهران{" "}
      </span>
      <svg
        height="20px"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0" />
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path
            fill="#B8B8B8"
            d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
          />
          <path
            fill="#B8B8B8"
            d="M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
          />
        </g>
      </svg>
    </div>
  </div>
</div>; */

