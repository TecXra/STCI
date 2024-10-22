const progressBar = document.querySelector(".progress-bar-inner");
const mobileProgressBar = document.querySelector(".mobile_progress-bar-inner");
const loadingText = document.querySelector(".loading-text");
const mobileLoadingText = document.querySelector(".mobile_loading-text");
const mainContainer = document.getElementById("main__container");
const bodyContainer = document.getElementById("body__container");

window.progress = 0;
const increment = 1;
// mainContainer.style.display = "none";

setTimeout(function () {
  $(".loading_container").fadeOut("fast");
  bodyContainer.classList.add("body__class");
  // mainContainer.style.display = "block";
  // bodyContainer.style.minWidth = "920px";
  // window.open("");
}, 12000); // <-- time in milliseconds
function updateProgress() {
  var el = document.getElementById("box__image");

  var progress = 0; // Initialize progress to 0
  var duration = 12000; // 15 seconds in milliseconds
  var increment = 1; // Adjust the increment as needed to control the speed of progress

  function step(timestamp) {
    if (!start) start = timestamp;
    var time = timestamp - start;
    progress = (time / duration) * 100;
    // loadingText.style.fontFamily = "SFUIDisplayCondensed Semibold";
    // mobileLoadingText.style.fontFamily = "SFUIDisplayCondensed Semibold";

    if (progress <= 99) {
      progressBar.style.width = progress + "%";
      loadingText.textContent = `${Math.round(progress)
        .toString()
        .padStart(2, "0")}`;

      mobileProgressBar.style.width = progress + "%";
      mobileLoadingText.textContent = `${Math.round(progress)
        .toString()
        .padStart(2, "0")} `;

      if (progress <= 17) {
        el.setAttribute("src", "./images/loader/L1.svg");
      } else if (progress <= 33) {
        el.setAttribute("src", "./images/loader/L2.svg");
      } else if (progress <= 50) {
        el.setAttribute("src", "./images/loader/L3.svg");
      } else if (progress <= 67) {
        el.setAttribute("src", "./images/loader/L4.svg");
      } else if (progress <= 83) {
        el.setAttribute("src", "./images/loader/L5.svg");
      } else {
        el.setAttribute("src", "./images/loader/L6.svg");
      }

      requestAnimationFrame(step);
    } else {
      progress = 99;
      progressBar.style.width = progress + "%";
      // loadingText.style.fontFamily = "SFUIDisplayCondensed Semibold";
      mobileProgressBar.style.width = progress + "%";
      // mobileLoadingText.style.fontFamily = "SFUIDisplayCondensed Semibold";
    }
  }

  var start = null;
  requestAnimationFrame(step);

  // var el = document.getElementById("box__image");
  // if (progress <= 99) {
  //   progressBar.style.width = progress + "%";
  //   loadingText.textContent = `Loading ${progress}% `;
  //   mobileProgressBar.style.width = progress + "%";
  //   mobileLoadingText.textContent = `Loading ${progress}% `;
  //   progress += increment;
  //   requestAnimationFrame(updateProgress);
  //   if (progress == 30) {
  //     el.setAttribute(
  //       "src",
  //       "https://images.placeholders.dev/?width=1080&height=450&text=L2&bgColor=%23d8d8d8&textColor=%236d6e71",
  //     );
  //   }
  //   if (progress == 70) {
  //     el.setAttribute(
  //       "src",
  //       "https://images.placeholders.dev/?width=1080&height=450&text=L3&bgColor=%23d8d8d8&textColor=%236d6e71",
  //     );
  //   }

  //   // if (progress == 90) {
  //   //   el.setAttribute('src', "https://images.placeholders.dev/?width=1080&height=450&text=L4&bgColor=%23d8d8d8&textColor=%236d6e71");
  //   // }
  // }

  // else
  // {

  //   document.querySelector('.loading_container').style.display = "none";
  //   // document.documentElement.className = "d-none";
  // }
}
document.addEventListener("DOMContentLoaded", function () {
  updateProgress();
  // let imgs = [
  //   "https://images.placeholders.dev/?width=1080&height=450&text=L1&bgColor=%23d8d8d8&textColor=%236d6e71",
  //   "https://images.placeholders.dev/?width=1080&height=450&text=L2&bgColor=%23d8d8d8&textColor=%236d6e71",
  //   "https://images.placeholders.dev/?width=1080&height=450&text=L3&bgColor=%23d8d8d8&textColor=%236d6e71",
  //   "https://images.placeholders.dev/?width=1080&height=450&text=L4&bgColor=%23d8d8d8&textColor=%236d6e71",
  //   "https://images.placeholders.dev/?width=1080&height=450&text=L5&bgColor=%23d8d8d8&textColor=%236d6e71",
  // ]
});
