import El from "../../../../library/El";
import ElAccurdion from "../../../../library/Sidebar/Accurdion/ElAccurdion";
import ElSocial from "../../../../library/Sidebar/EliconSocial/ElSocial";
import ElVerify from "../../../../library/Sidebar/Elverify/ElVerify";
import ElLinksItems from "../../../../library/Sidebar/LinkItems/ElLinksItems";
import Elsidebar from "../../../../library/Sidebar/ListItems/Elsidebar";

const Aside = () => {
  return El({
    element: "div",
    className: "hidden w-[400px] xl:block", //i change the w !!!
    child: El({
      element: "aside",
      className: " text-xl",
      child: El({
        element: "div",
        className: "text-xl flex flex-col gap-3 py-4 text-neutral-500",
        child: [
          El({ element: "p", child: "دسته‌ها" }),
          El({
            element: "div",
            className: "text-xl flex flex-col gap-3 py-4 text-neutral-500",
            child: eachdiv,
          }),
          El({
            element: "div",
            className: "border-b-2 border-neutral-400",
            child: eachAccurdion,
          }),
          El({
            element: "div",
            className: "flex flex-wrap py-3",
            child: eachLink,
          }),
          El({
            element: "div",
            className: "flex justify-center gap-7 py-4",
            child: eachLinkIcon,
          }),
          El({
            element: "div",
            className: "flex py-10 justify-center",
            child: eachImgVerify,
          }),
        ],
      }),
    }),
  });
};
export default Aside;

const listItems = [
  Elsidebar("./src/assest/svg/svg-sidebar/home-svgrepo-com.svg", "املاک"),
  Elsidebar("./src/assest/svg/svg-sidebar/car-svgrepo-com.svg", "وسایل نقلیه"),
  Elsidebar(
    "./src/assest/svg/svg-sidebar/iphone-svgrepo-com.svg",
    "کالای دیجیتال"
  ),
  Elsidebar(
    "./src/assest/svg/svg-sidebar/lamp-svgrepo-com.svg",
    "خانه و آشپزخانه"
  ),
  Elsidebar(
    "./src/assest/svg/svg-sidebar/paint-brush-svgrepo-com.svg",
    "خدمات"
  ),
  Elsidebar("./src/assest/svg/svg-sidebar/watch-svgrepo-com.svg", "وسایل شخصی"),
  Elsidebar(
    "./src/assest/svg/svg-sidebar/two-dices-svgrepo-com.svg",
    "سرگرمی و فراغت"
  ),
  Elsidebar(
    "./src/assest/svg/svg-sidebar/users-more-svgrepo-com.svg",
    "اجتماعی"
  ),
  Elsidebar(
    "./src/assest/svg/svg-sidebar/mic-svgrepo-com.svg",
    "تهجیزات و صنعتی"
  ),
  Elsidebar(
    "./src/assest/svg/svg-sidebar/bag-office-office-bag-svgrepo-com.svg",
    "استخدام و کاریابی"
  ),
];
let eachdiv = listItems.map((el) => el);

const arrAccurdion = [
  ElAccurdion("محل"),
  ElAccurdion("قیمت"),
  ElAccurdion("وضعیت آگهی"),
];
let eachAccurdion = arrAccurdion.map((el) => el);

const arrLinks = [
  ElLinksItems("درباره دیوار"),
  ElLinksItems("دریافت برنامه"),
  ElLinksItems("بلاگ دیوار"),
  ElLinksItems("کسب‌وکارها"),
  ElLinksItems("پشتیبانی و قوانین"),
];
let eachLink = arrLinks.map((el) => el);

const arrIconSocial = [
  ElSocial("./src/assest/svg/svg-sidebar/aparat-svgrepo-com.svg"),
  ElSocial("./src/assest/svg/svg-sidebar/linkedin-svgrepo-com.svg"),
  ElSocial("./src/assest/svg/svg-sidebar/instagram-svgrepo-com.svg"),
  ElSocial("./src/assest/svg/svg-sidebar/twitter-boxed-svgrepo-com.svg"),
];
let eachLinkIcon = arrIconSocial.map((el) => el);

const arrImgVerify = [
  ElVerify("./src/assest/img/img-sidebar/download (1).png"),
  ElVerify("./src/assest/img/img-sidebar/download.png"),
  ElVerify("./src/assest/img/img-sidebar/logo.png"),
];
let eachImgVerify = arrImgVerify.map((el) => el);
