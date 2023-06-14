const section = document.getElementsByTagName("section")[0];
const container = document.getElementsByClassName("container")[0];
const slide = document.getElementsByClassName("slide")[0];
document.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const rotateKeyframes = `@keyframes rotate {
        0% {
          transform: perspective(1000px) rotateX(${scrollTop}deg);
        }
        100% {
          transform: perspective(1000px) rotateX(${scrollTop + 359}deg);
        }
      }`;
  const styleSheet = document.styleSheets[0];
  styleSheet.deleteRule(0);
  styleSheet.insertRule(rotateKeyframes, 0);
});
