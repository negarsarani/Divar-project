import El from "../../../library/El";
import Elscroll from "../../../library/Elscroll";

const obj = [
  { item: "فیلترها", icon: "./src/assest/svg/location.svg" },
  { item: "دسته‌ها", icon: "./src/assest/svg/list.svg" },
  { item: "دسته‌ها" },
];

const EachDiv = () => {
  return El({
    element: "div",
    className: "flex p-3 gap-3 text-ms items-center w-full",
    child: El({
      element: "div",
      className: "flex items-center gap-3 flex-shrink-0 rounded-3xl px-3 py-1",
      child: [
        Elscroll("فیلترها", "./src/assest/svg/filter.svg"),
        Elscroll("دسته‌ها", "./src/assest/svg/filter.svg"),
        Elscroll("خودروسواری"),
        Elscroll("فروش آپارتمان"),
        Elscroll("اجاره آپارتمان"),
        Elscroll("اجاره آپارتمان"),
        Elscroll("موبایل "),
        Elscroll("صندلی و نیمکت"),
        Elscroll(" حیوانات "),
        Elscroll("وسایل شخصی"),
        Elscroll("استخدام"),
        Elscroll("تلویزیون"),
       
      ],
    }),
  });
};

export default EachDiv;
