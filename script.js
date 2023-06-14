const section = document.getElementsByTagName("section")[0];
const container = document.getElementsByClassName("container")[0];
const slide = document.getElementsByClassName("slide");
const styleSheet = document.styleSheets[0];

if (window.pageYOffset === 0) {
  slide[0].style.transform = `perspective(1000px) rotateX(0deg)`;
  slide[1].style.transform = `perspective(1000px) rotateX(0deg)`;
  slide[2].style.transform = `perspective(1000px) rotateX(0deg)`;
}

document.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset;
  for (let i = 0; i <= slide.length; i++) {
    slide[i].style.transform = `perspective(1000px) rotateX(${scrollTop / 2}deg)`;
  }
});
