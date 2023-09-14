import LocomotiveScroll from "locomotive-scroll";
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
  reloadOnContextChange: true,
  offset: [0, 0],
  repeat: true,
});
