import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplaySpeed: 500,
  dots: false,
  margin: 30,
  nav: true,
  navText: [
    "<img class='color-back' src='/images/left-carousel.png'>",
    "<img class='color-back' src='/images/right-carousel.png'>",
  ],
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
