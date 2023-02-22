import El from "../../../library/El";
import Elscroll from "../../../library/Elscroll";

const EachDiv = () => {
  return El({
    element: "div",
    className: "flex p-3 gap-3 text-ms items-center w-full",
    child: [
      Elscroll("فیلترها", "./src/assest/svg/filter.svg"),
      Elscroll("دسته‌ها", "./src/assest/svg/list.svg"),
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
  });
};

export default EachDiv;
