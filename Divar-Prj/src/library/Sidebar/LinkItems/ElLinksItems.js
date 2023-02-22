import El from "../../El";

const ElLinksItems = (text) => {
  return El({
    element:"div",
    className:"px-2",
    child:El({
        element:"span",
        className:"text-neutral-500 hover:text-neutral-700",
        child:text
    })
  });
};

export default ElLinksItems;
