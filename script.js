const section = document.getElementsByTagName("section")[0];
const container = document.getElementsByClassName("container")[0];
const slide = document.getElementsByClassName("slide")[0];
console.log(window.pageYOffset);
const styleSheet = document.styleSheets[0];

if (window.pageYOffset === 0) {
  const rotateKeyframesDefault = `@keyframes rotate {
        0% {
          transform: perspective(1000px) rotateX(0deg);
        }
        100% {
          transform: perspective(1000px) rotateX(359deg);
        }
      }`;

  styleSheet.insertRule(rotateKeyframesDefault, 0);
}

document.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset;
  console.log(scrollTop);
  const rotateKeyframes = `@keyframes rotate {
        0% {
          transform: perspective(1000px) rotateX(${scrollTop}deg);
        }
        100% {
          transform: perspective(1000px) rotateX(${scrollTop + 359}deg);
        }
      }`;

  styleSheet.deleteRule(0);
  styleSheet.insertRule(rotateKeyframes, 0);
});
