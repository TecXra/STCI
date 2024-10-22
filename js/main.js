/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */
// first OpenModalBtn

// OpenModalBtn_1
const openModalBtn_1 = document.getElementById("openModalBtn_1");
// const closeModalBtn_1 = document.getElementById("closeModalBtn_1");
// OpenModalBtn_2
const openModalBtn_2 = document.getElementById("openModalBtn_2");
// const closeModalBtn_2 = document.getElementById("closeModalBtn_2");
// OpenModalBtn_3
const openModalBtn_3 = document.getElementById("openModalBtn_3");
// const closeModalBtn_3 = document.getElementById("closeModalBtn_3");
// OpenModalBtn_4
const openModalBtn_4 = document.getElementById("openModalBtn_4");
// const closeModalBtn_4 = document.getElementById("closeModalBtn_4");
// OpenModalBtn_5
const openModalBtn_5 = document.getElementById("openModalBtn_5");
// const closeModalBtn_5 = document.getElementById("closeModalBtn_5");
// OpenModalBtn_6
const openModalBtn_6 = document.getElementById("openModalBtn_6");
// const closeModalBtn_6 = document.getElementById("closeModalBtn_6");
// OpenModalBtn_7
const openModalBtn_7 = document.getElementById("openModalBtn_7");
// const closeModalBtn_7 = document.getElementById("closeModalBtn_7");
// OpenModalBtn_8
const openModalBtn_8 = document.getElementById("openModalBtn_8");
// const closeModalBtn_8 = document.getElementById("closeModalBtn_8");
// OpenModalBtn_9
const openModalBtn_9 = document.getElementById("openModalBtn_9");
// const closeModalBtn_9 = document.getElementById("closeModalBtn_9");

// OpenMobileModalBtn_1
const openMobileModalBtn_1 = document.getElementById("openMobileModalBtn_1");
// const closeMobileModalBtn_1 = document.getElementById("closeMobileModalBtn_1");
// OpenMobileModalBtn_2
const openMobileModalBtn_2 = document.getElementById("openMobileModalBtn_2");
// const closeMobileModalBtn_2 = document.getElementById("closeMobileModalBtn_2");
// OpenMobileModalBtn_3
const openMobileModalBtn_3 = document.getElementById("openMobileModalBtn_3");
// const closeMobileModalBtn_3 = document.getElementById("closeMobileModalBtn_3");
// OpenMobileModalBtn_4
const openMobileModalBtn_4 = document.getElementById("openMobileModalBtn_4");
// const closeMobileModalBtn_4 = document.getElementById("closeMobileModalBtn_4");
// OpenMobileModalBtn_5
const openMobileModalBtn_5 = document.getElementById("openMobileModalBtn_5");
// const closeMobileModalBtn_5 = document.getElementById("closeMobileModalBtn_5");
// OpenMobileModalBtn_6
const openMobileModalBtn_6 = document.getElementById("openMobileModalBtn_6");
// const closeMobileModalBtn_6 = document.getElementById("closeMobileModalBtn_6");
// OpenMobileModalBtn_7
const openMobileModalBtn_7 = document.getElementById("openMobileModalBtn_7");
// const closeMobileModalBtn_7 = document.getElementById("closeMobileModalBtn_7");
// OpenMobileModalBtn_8
const openMobileModalBtn_8 = document.getElementById("openMobileModalBtn_8");
// const closeMobileModalBtn_8 = document.getElementById("closeMobileModalBtn_8");
// OpenMobileModalBtn_9
const openMobileModalBtn_9 = document.getElementById("openMobileModalBtn_9");
// const closeMobileModalBtn_9 = document.getElementById("closeMobileModalBtn_9");

const modalSection = document.getElementById("modal_section");
const backBtn = document.getElementById("back_btn");

const closeModalBtnImageBtn1 = document.getElementById("closeModalBtnImage1");
const closeModalBtnImageBtn2 = document.getElementById("closeModalBtnImage2");
const closeModalBtnImageBtn3 = document.getElementById("closeModalBtnImage3");
const closeModalBtnImageBtn4 = document.getElementById("closeModalBtnImage4");
const closeModalBtnImageBtn5 = document.getElementById("closeModalBtnImage5");
const closeModalBtnImageBtn6 = document.getElementById("closeModalBtnImage6");
const closeModalBtnImageBtn7 = document.getElementById("closeModalBtnImage7");
const closeModalBtnImageBtn8 = document.getElementById("closeModalBtnImage8");
const closeModalBtnImageBtn9 = document.getElementById("closeModalBtnImage9");

const closeMobileModalBtnImageBtn1 = document.getElementById(
  "closeMobileModalBtnImage1",
);
const closeMobileModalBtnImageBtn2 = document.getElementById(
  "closeMobileModalBtnImage2",
);
const closeMobileModalBtnImageBtn3 = document.getElementById(
  "closeMobileModalBtnImage3",
);
const closeMobileModalBtnImageBtn4 = document.getElementById(
  "closeMobileModalBtnImage4",
);
const closeMobileModalBtnImageBtn5 = document.getElementById(
  "closeMobileModalBtnImage5",
);
const closeMobileModalBtnImageBtn6 = document.getElementById(
  "closeMobileModalBtnImage6",
);
const closeMobileModalBtnImageBtn7 = document.getElementById(
  "closeMobileModalBtnImage7",
);
const closeMobileModalBtnImageBtn8 = document.getElementById(
  "closeMobileModalBtnImage8",
);
const closeMobileModalBtnImageBtn9 = document.getElementById(
  "closeMobileModalBtnImage9",
);

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");
const modal5 = document.getElementById("modal5");
const modal6 = document.getElementById("modal6");
const modal7 = document.getElementById("modal7");
const modal8 = document.getElementById("modal8");
const modal9 = document.getElementById("modal9");

const mobileModal1 = document.getElementById("mobileModal1");
const mobileModal2 = document.getElementById("mobileModal2");
const mobileModal3 = document.getElementById("mobileModal3");
const mobileModal4 = document.getElementById("mobileModal4");
const mobileModal5 = document.getElementById("mobileModal5");
const mobileModal6 = document.getElementById("mobileModal6");
const mobileModal7 = document.getElementById("mobileModal7");
const mobileModal8 = document.getElementById("mobileModal8");
const mobileModal9 = document.getElementById("mobileModal9");

openModalBtn_1.addEventListener("click", () => {
  modal2.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  window.scrollTo(0, 0);
  backBtn.style.filter = "blur(4px)";
});

closeModalBtnImageBtn1.addEventListener("click", () => {
  modal1.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});

openMobileModalBtn_1.addEventListener("click", () => {
  mobileModal1.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  window.scrollTo(0, 0);
  backBtn.style.filter = "blur(4px)";
});

closeMobileModalBtnImageBtn1.addEventListener("click", () => {
  mobileModal1.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});

// Open Model_2
openModalBtn_2.addEventListener("click", () => {
  modal3.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  window.scrollTo(0, 0);
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  backBtn.style.filter = "blur(4px)";
});
closeModalBtnImageBtn2.addEventListener("click", () => {
  modal2.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});
openMobileModalBtn_2.addEventListener("click", () => {
  mobileModal2.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  window.scrollTo(0, 0);
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  backBtn.style.filter = "blur(4px)";
});
closeMobileModalBtnImageBtn2.addEventListener("click", () => {
  mobileModal2.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});

// Open Model_3
openModalBtn_3.addEventListener("click", () => {
  modal1.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  window.scrollTo(0, 0);
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  backBtn.style.filter = "blur(4px)";
});
closeModalBtnImageBtn3.addEventListener("click", () => {
  modal3.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});
openMobileModalBtn_3.addEventListener("click", () => {
  mobileModal3.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  window.scrollTo(0, 0);
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  backBtn.style.filter = "blur(4px)";
});
closeMobileModalBtnImageBtn3.addEventListener("click", () => {
  mobileModal3.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});

// Open Model_4
openModalBtn_4.addEventListener("click", () => {
  modal4.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  window.scrollTo(0, 0);
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  backBtn.style.filter = "blur(4px)";
});
closeModalBtnImageBtn4.addEventListener("click", () => {
  modal4.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});
openMobileModalBtn_4.addEventListener("click", () => {
  mobileModal4.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  window.scrollTo(0, 0);
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  backBtn.style.filter = "blur(4px)";
});
closeMobileModalBtnImageBtn4.addEventListener("click", () => {
  mobileModal4.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});

// Open Model_5
openModalBtn_5.addEventListener("click", () => {
  modal5.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  window.scrollTo(0, 0);
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  backBtn.style.filter = "blur(4px)";
});
closeModalBtnImageBtn5.addEventListener("click", () => {
  modal5.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});
openMobileModalBtn_5.addEventListener("click", () => {
  mobileModal5.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  window.scrollTo(0, 0);
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  backBtn.style.filter = "blur(4px)";
});
closeMobileModalBtnImageBtn5.addEventListener("click", () => {
  mobileModal5.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});

// Open Model_6
openModalBtn_6.addEventListener("click", () => {
  modal7.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  window.scrollTo(0, 0);
  backBtn.style.filter = "blur(4px)";
});
closeModalBtnImageBtn6.addEventListener("click", () => {
  modal6.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});
openMobileModalBtn_6.addEventListener("click", () => {
  mobileModal6.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  window.scrollTo(0, 0);
  backBtn.style.filter = "blur(4px)";
});
closeMobileModalBtnImageBtn6.addEventListener("click", () => {
  mobileModal6.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});

// Open Model_7
openModalBtn_7.addEventListener("click", () => {
  modal8.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  backBtn.style.filter = "blur(4px)";
  window.scrollTo(0, 0);
});
closeModalBtnImageBtn7.addEventListener("click", () => {
  modal7.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});
openMobileModalBtn_7.addEventListener("click", () => {
  mobileModal7.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  backBtn.style.filter = "blur(4px)";
  window.scrollTo(0, 0);
});
closeMobileModalBtnImageBtn7.addEventListener("click", () => {
  mobileModal7.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});
// Open Model_8
openModalBtn_8.addEventListener("click", () => {
  modal6.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  window.scrollTo(0, 0);
  backBtn.style.filter = "blur(4px)";
});
closeModalBtnImageBtn8.addEventListener("click", () => {
  modal8.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});
openMobileModalBtn_8.addEventListener("click", () => {
  mobileModal8.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  window.scrollTo(0, 0);
  backBtn.style.filter = "blur(4px)";
});
closeMobileModalBtnImageBtn8.addEventListener("click", () => {
  mobileModal8.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});

// Open Model_9
openModalBtn_9.addEventListener("click", () => {
  modal9.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  window.scrollTo(0, 0);
  backBtn.style.filter = "blur(4px)";
});
closeModalBtnImageBtn9.addEventListener("click", () => {
  modal9.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});
openMobileModalBtn_9.addEventListener("click", () => {
  mobileModal9.style.display = "flex";
  modalSection.style.margin = "0px";
  modalSection.style.width = "100%";
  modalSection.style.filter = "blur(4px)";
  modalSection.style.height = "100%";
  window.scrollTo(0, 0);
  backBtn.style.filter = "blur(4px)";
});
closeMobileModalBtnImageBtn9.addEventListener("click", () => {
  mobileModal9.style.display = "none";
  modalSection.style.margin = "0 auto";
  modalSection.style.width = "1345px";
  modalSection.style.filter = "none";
  backBtn.style.filter = "none";
});

function addWhiteImage1() {
  closeModalBtnImageBtn1.src = "./images/close_hover.svg";
}
function addWhiteImage2() {
  closeModalBtnImageBtn2.src = "./images/close_hover.svg";
}
function addWhiteImage3() {
  closeModalBtnImageBtn3.src = "./images/close_hover.svg";
}
function addWhiteImage4() {
  closeModalBtnImageBtn4.src = "./images/close_hover.svg";
}
function addWhiteImage5() {
  closeModalBtnImageBtn5.src = "./images/close_hover.svg";
}
function addWhiteImage6() {
  closeModalBtnImageBtn6.src = "./images/close_hover.svg";
}
function addWhiteImage7() {
  closeModalBtnImageBtn7.src = "./images/close_hover.svg";
}
function addWhiteImage8() {
  closeModalBtnImageBtn8.src = "./images/close_hover.svg";
}
function addWhiteImage9() {
  closeModalBtnImageBtn9.src = "./images/close_hover.svg";
}

function addBlackImage1() {
  closeModalBtnImageBtn1.src = "./images/close.svg";
}
function addBlackImage2() {
  closeModalBtnImageBtn2.src = "./images/close.svg";
}
function addBlackImage3() {
  closeModalBtnImageBtn3.src = "./images/close.svg";
}
function addBlackImage4() {
  closeModalBtnImageBtn4.src = "./images/close.svg";
}
function addBlackImage5() {
  closeModalBtnImageBtn5.src = "./images/close.svg";
}
function addBlackImage6() {
  closeModalBtnImageBtn6.src = "./images/close.svg";
}
function addBlackImage7() {
  closeModalBtnImageBtn7.src = "./images/close.svg";
}
function addBlackImage8() {
  closeModalBtnImageBtn8.src = "./images/close.svg";
}
function addBlackImage9() {
  closeModalBtnImageBtn9.src = "./images/close.svg";
}

// mobile modal functions

function addWhiteImageMobile1() {
  closeMobileModalBtnImageBtn1.src = "./images/close_hover.svg";
}
function addWhiteImageMobile2() {
  closeMobileModalBtnImageBtn2.src = "./images/close_hover.svg";
}
function addWhiteImageMobile3() {
  closeMobileModalBtnImageBtn3.src = "./images/close_hover.svg";
}
function addWhiteImageMobile4() {
  closeMobileModalBtnImageBtn4.src = "./images/close_hover.svg";
}
function addWhiteImageMobile5() {
  closeMobileModalBtnImageBtn5.src = "./images/close_hover.svg";
}
function addWhiteImageMobile6() {
  closeMobileModalBtnImageBtn6.src = "./images/close_hover.svg";
}
function addWhiteImageMobile7() {
  closeMobileModalBtnImageBtn7.src = "./images/close_hover.svg";
}
function addWhiteImageMobile8() {
  closeMobileModalBtnImageBtn8.src = "./images/close_hover.svg";
}
function addWhiteImageMobile9() {
  closeMobileModalBtnImageBtn9.src = "./images/close_hover.svg";
}

function addBlackImageMobile1() {
  closeMobileModalBtnImageBtn1.src = "./images/close.svg";
}
function addBlackImageMobile2() {
  closeMobileModalBtnImageBtn2.src = "./images/close.svg";
}
function addBlackImageMobile3() {
  closeMobileModalBtnImageBtn3.src = "./images/close.svg";
}
function addBlackImageMobile4() {
  closeMobileModalBtnImageBtn4.src = "./images/close.svg";
}
function addBlackImageMobile5() {
  closeMobileModalBtnImageBtn5.src = "./images/close.svg";
}
function addBlackImageMobile6() {
  closeMobileModalBtnImageBtn6.src = "./images/close.svg";
}
function addBlackImageMobile7() {
  closeMobileModalBtnImageBtn7.src = "./images/close.svg";
}
function addBlackImageMobile8() {
  closeMobileModalBtnImageBtn8.src = "./images/close.svg";
}
function addBlackImageMobile9() {
  closeMobileModalBtnImageBtn9.src = "./images/close.svg";
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    window.onbeforeunload = this.getFocusedElement();
  }, 12000);
});

function getFocusedElement() {
  console.log(sessionStorage.getItem("homepage"));
  console.log(sessionStorage.getItem("light"));
  if (
    sessionStorage.getItem("homepage") == "false" ||
    sessionStorage.getItem("homepage") == false
  ) {
    sessionStorage.setItem("homepage", true);
  }

  if (
    sessionStorage.getItem("homepage") == "" ||
    sessionStorage.getItem("homepage") == null
  ) {
    sessionStorage.setItem("homepage", true);
  }
  if (
    sessionStorage.getItem("homepage") == true ||
    sessionStorage.getItem("homepage") == "true"
  ) {
    this.toggleHomeSectionTheme();
  } else {
    let currentTheme = sessionStorage.getItem("light");
    let container = document.getElementById("body__container");
    if (currentTheme == true || currentTheme == "true") {
      // sessionStorage.setItem("light", false);
      container.classList.remove("dark__theme");
      // console.log('if');
    } else {
      // console.log('else');
      // sessionStorage.setItem("light", true);
      container.classList.add("dark__theme");
    }
  }
}
function toggleHomeSectionTheme() {
  let currentTheme = sessionStorage.getItem("light");
  let container = document.getElementById("body__container");

  if (currentTheme == true || currentTheme == "true") {
    sessionStorage.setItem("light", false);
    container.classList.add("dark__theme");
    // console.log("if");
  } else {
    // console.log("else");
    sessionStorage.setItem("light", true);
    container.classList.remove("dark__theme");
  }
}

// From https://davidwalsh.name/javascript-debounce-function.

function debounce(func, wait, immediate) {
  // setTimeout(function () {}, 5000);
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

class Blob {
  constructor(el, options) {
    this.DOM = {};
    this.DOM.el = el;
    this.options = {};
    Object.assign(this.options, options);
    this.init();
  }

  init() {
    this.rect = this.DOM.el.getBoundingClientRect();
    this.descriptions = [];
    this.layers = Array.from(this.DOM.el.querySelectorAll("path"), (t) => {
      t.style.transformOrigin = `${this.rect.left + this.rect.width / 2}px ${
        this.rect.top + this.rect.height / 2
      }px`;
      t.style.opacity = 0;
      this.descriptions.push(t.getAttribute("d"));
      return t;
    });

    window.addEventListener(
      "resize",

      debounce(() => {
        this.rect = this.DOM.el.getBoundingClientRect();
        this.layers.forEach(
          (layer) =>
            (layer.style.transformOrigin = `${
              this.rect.left + this.rect.width / 2
            }px ${this.rect.top + this.rect.height / 2}px`),
        );
      }, 20),
    );
  }
  intro() {
    anime.remove(this.layers);
    anime({
      targets: this.layers,
      duration: 1800,
      delay: (t, i) => i * 120,
      easing: [0.2, 1, 0.1, 1],
      scale: [0.2, 1],
      opacity: {
        value: [0, 1],
        duration: 300,
        delay: (t, i) => i * 120,
        easing: "linear",
      },
    });
  }
  expand() {
    return new Promise((resolve, reject) => {
      let halfway = false;
      anime({
        targets: this.layers,
        duration: 1000,
        delay: (t, i) => i * 50 + 200,
        easing: [0.8, 0, 0.1, 0],
        d: (t) => t.getAttribute("pathdata:id"),
        update: function (anim) {
          if (anim.progress > 75 && !halfway) {
            halfway = true;
            resolve();
          }
        },
      });
    });
  }
  collapse() {
    return new Promise((resolve, reject) => {
      let halfway = false;
      anime({
        targets: this.layers,
        duration: 800,
        delay: (t, i, total) => (total - i - 1) * 50 + 400,
        easing: [0.2, 1, 0.1, 1],
        d: (t, i) => this.descriptions[i],
        update: function (anim) {
          if (anim.progress > 75 && !halfway) {
            halfway = true;
            resolve();
          }
        },
      });
    });
  }
  hide() {
    anime.remove(this.layers);
    anime({
      targets: this.layers,
      duration: 800,
      delay: (t, i, total) => (total - i - 1) * 80,
      easing: "easeInOutExpo",
      scale: 0,
      opacity: {
        value: 0,
        duration: 500,
        delay: (t, i, total) => (total - i - 1) * 80,
        easing: "linear",
      },
    });
  }
  show() {
    setTimeout(() => this.intro(), 400);
  }
}

window.Blob = Blob;
setTimeout(() => {
  const DOM = {};
  let blobs = [];
  DOM.svg = document.querySelector("svg.scene");
  Array.from(DOM.svg.querySelectorAll("g")).forEach((el) => {
    const blob = new Blob(el);
    blobs.push(blob);
    blob.intro();
  });

  DOM.content = document.querySelector(".content--reveal");
  DOM.contentInner = Array.from(
    DOM.content.querySelectorAll(".content__inner"),
    (el) => {
      // charming(el);
      return el;
    },
  );
  // DOM.ctrlBack = DOM.content.querySelector(".content__close");
  // DOM.ctrlBack = DOM.content.querySelector(".content__close");
  // DOM.ctrlBack = DOM.content.querySelector(".content__close");
  DOM.ctrlBack_1 = DOM.content.querySelector(".content__close_1");
  DOM.ctrlBack_2 = DOM.content.querySelector(".content__close_2");
  DOM.ctrlBack_3 = DOM.content.querySelector(".content__close_3");
  DOM.ctrlBack_4 = DOM.content.querySelector(".content__close_4");
  DOM.ctrlBack_5 = DOM.content.querySelector(".content__close_5");

  DOM.links = Array.from(document.querySelectorAll(".menu > .menu__item"));
  DOM.Mobilelinks = Array.from(
    document.querySelectorAll(".mobile_menu > .menu__item"),
  );

  DOM.menu = Array.from(document.querySelectorAll(".menu"));

  DOM.MobileMenu = Array.from(document.querySelectorAll(".mobile_menu"));

  DOM.menu.forEach((link, pos) => {
    link.style.pointerEvents = "none";
    // charming(link);

    anime({
      targets: link,
      duration: 800,
      delay: (t, i) => anime.random(0, 600) + 500,
      easing: "easeInOutQuad",
      opacity: [0, 1],
      complete: () => {
        link.style.pointerEvents = "auto";
        link.classList.add("menu--showDeco");
      },
    });
  });
  DOM.MobileMenu.forEach((link, pos) => {
    link.style.pointerEvents = "none";
    // charming(link);

    anime({
      targets: link,
      duration: 800,
      delay: (t, i) => anime.random(0, 600) + 500,
      easing: "easeInOutQuad",
      opacity: [0, 1],
      complete: () => {
        link.style.pointerEvents = "auto";
      },
    });
  });

  DOM.links.forEach((link, pos) => {
    link.style.pointerEvents = "none";
    charming(link);

    anime({
      targets: link.querySelectorAll("span"),
      duration: 800,
      delay: (t, i) => anime.random(0, 600) + 500,
      easing: "easeInOutQuad",
      opacity: [0, 1],
      complete: () => {
        link.style.pointerEvents = "auto";
        link.classList.add("menu__item--showDeco");
      },
    });

    link.addEventListener("click", (ev) => {
      ev.preventDefault();
      open(pos);
    });
  });

  DOM.Mobilelinks.forEach((link, pos) => {
    link.style.pointerEvents = "none";
    charming(link);

    anime({
      targets: link.querySelectorAll("span"),
      duration: 800,
      delay: (t, i) => anime.random(0, 600) + 500,
      easing: "easeInOutQuad",
      opacity: [0, 1],
      complete: () => {
        link.style.pointerEvents = "auto";
        link.classList.add("menu__item--showDeco1");
      },
    });

    link.addEventListener("click", (ev) => {
      ev.preventDefault();
      open(pos);
    });
  });
  var homepageContent = document.querySelector(".homepage__content");
  anime({
    targets: homepageContent,
    duration: 800,
    delay: (t, i) => anime.random(0, 600),
    easing: "easeInOutQuad",
    opacity: [0, 1],
    complete: () => {
      homepageContent.style.display = "flex";
    },
  });

  DOM.homepageSpan = Array.from(
    document.querySelectorAll(".homepage__main__content > span"),
  );
  DOM.homepageSpan.forEach((span) => {
    anime({
      targets: span,
      duration: 800,
      delay: (t, i) => anime.random(0, 600) + 500,
      easing: "easeInOutQuad",
      opacity: [0, 1],
      complete: () => {
        span.style.display = "block";
      },
    });

    anime({
      targets: document.querySelector(".content__image"),
      duration: 800,
      delay: (t, i) => anime.random(0, 600) + 500,
      easing: "easeInOutQuad",
      opacity: [0, 1],
      complete: () => {
        document.querySelector(".content__image").style.display = "block";
      },
    });

    anime({
      targets: document.querySelector(".homepage__footer"),
      duration: 800,
      delay: (t, i) => anime.random(0, 600) + 500,
      easing: "easeInOutQuad",
      opacity: [0, 1],
      complete: () => {
        document.querySelector(".homepage__footer").style.display = "block";
      },
    });
  });

  DOM.ctrlBack_1.addEventListener("click", () => close());
  DOM.ctrlBack_2.addEventListener("click", () => close());
  DOM.ctrlBack_3.addEventListener("click", () => close());
  DOM.ctrlBack_4.addEventListener("click", () => close());
  DOM.ctrlBack_5.addEventListener("click", () => close());

  let current;
  const open = (pos) => {
    sessionStorage.setItem("homepage", false);

    resetForm();

    this.isOpen = true;
    anime({
      targets: DOM.links.map((link) => link.querySelectorAll("span")),
      delay: (t, i) => anime.random(0, 300),
      duration: 200,
      easing: "easeInOutQuad",
      opacity: 0,
      // display: 'none',
      begin: () =>
        DOM.links.forEach((link) => {
          link.style.pointerEvents = "none";
          link.classList.remove("menu__item--showDeco");
        }),
    });
    anime({
      targets: DOM.Mobilelinks.map((link) => link.querySelectorAll("span")),
      delay: (t, i) => anime.random(0, 300),
      duration: 200,
      easing: "easeInOutQuad",
      opacity: 0,
      // display: 'none',
      begin: () =>
        DOM.Mobilelinks.forEach((link) => {
          link.style.pointerEvents = "none";
          link.classList.remove("menu__item--showDeco1");
        }),
    });

    anime({
      targets: DOM.menu,
      delay: (t, i) => anime.random(0, 300),
      duration: 200,
      easing: "easeInOutQuad",
      opacity: 0,
      // display: 'none',
      begin: () =>
        DOM.menu.forEach((link) => {
          link.style.pointerEvents = "none";
          link.classList.remove("menu--showDeco");
        }),
    });

    anime({
      targets: DOM.MobileMenu,
      delay: (t, i) => anime.random(0, 300),
      duration: 200,
      easing: "easeInOutQuad",
      opacity: 0,
      // display: 'none',
      begin: () =>
        DOM.MobileMenu.forEach((link) => {
          link.style.pointerEvents = "none";
        }),
    });

    var homepageContent = document.querySelector(".homepage__content");
    var contentImage = document.querySelector(".content__image");
    var homepageSpanOne = document.querySelector(".content__heading__h2");
    var homepageSpanTwo = document.querySelector(".content__heading__h3");
    var homepageSpanThree = document.querySelector(".content__heading__h4");
    // var borderBottom1 = document.querySelector(".border__Bottom__1");
    // var borderBottom2 = document.querySelector(".border__Bottom__2");
    // var borderBottom3 = document.querySelector(".border__Bottom__3");
    // var borderBottom4 = document.querySelector(".border__Bottom__4");
    // var borderBottom5 = document.querySelector(".border__Bottom__5");
    var homepageFooter = document.querySelector(".homepage__footer");

    anime({
      targets: [
        homepageContent,
        contentImage,
        homepageSpanOne,
        homepageSpanTwo,
        homepageSpanThree,
        homepageFooter,
        // borderBottom1,
        // borderBottom2,
        // borderBottom3,
        // borderBottom4,
        // borderBottom5,
      ],
      delay: (t, i) => anime.random(0, 300),
      duration: 200,
      easing: "easeInOutQuad",
      opacity: 0,
      complete: () => {
        homepageContent.style.display = "none";
        // contentImage.style.display = "none";
        // homepageSpanOne.style.display = "none";
        // homepageSpanTwo.style.display = "none";
        // homepageSpanThree.style.display = "none";
        homepageFooter.style.display = "none";
      },
    });

    current = pos;
    const currentBlob = blobs[current];
    currentBlob.expand().then(() => {
      DOM.content.style.pointerEvents = "auto";
      const contentInner = DOM.contentInner[pos];
      // contentInner.style.opacity = 1;
      contentInner.style.display = "block";
      contentInner.style.display = "block";
      anime({
        targets: [
          // document.querySelector('.content').querySelectorAll('img'),
          // document.querySelector('.content').querySelectorAll('.content__heading__h2'),
          contentInner.querySelectorAll("img"),
          contentInner.querySelectorAll("h5"),
          contentInner.querySelectorAll("p"),
          contentInner.querySelectorAll("label"),
          contentInner.querySelectorAll("input"),
          contentInner.querySelectorAll("textarea"),
          contentInner.querySelectorAll("button"),
          contentInner.querySelectorAll(".g-recaptcha"),
          contentInner.querySelectorAll(".timeline__divider > .circle"),
          contentInner.querySelectorAll(".timeline__divider > .circle__two"),
          contentInner.querySelectorAll(".timeline__divider > .dash__border"),
          contentInner.querySelectorAll(".card__container__first"),
          contentInner.querySelectorAll(".card__container__first > .card"),
          contentInner.querySelectorAll(".content__title"),
          contentInner.querySelectorAll(".content__subtitle"),
          contentInner.querySelectorAll(".card"),
          contentInner.querySelectorAll(".card__container__second"),
          contentInner.querySelectorAll(".card__container__second__left"),
          contentInner.querySelectorAll(".card__duble"),
          contentInner.querySelectorAll(".card__container__second__right"),
          contentInner.querySelectorAll(".first_card"),
          contentInner.querySelectorAll(".card__last"),
          contentInner.querySelectorAll(
            ".top__section__images desktop_Section > .image__container",
          ),
          contentInner.querySelectorAll(".bottom__list__items"),
          contentInner.querySelectorAll(".list__items"),
          contentInner.querySelectorAll(".item__container"),
          DOM.ctrlBack_1,
          DOM.ctrlBack_2,
          DOM.ctrlBack_3,
          DOM.ctrlBack_4,
          DOM.ctrlBack_5,
        ],
        duration: 200,
        delay: (t, i) => anime.random(0, 600),
        easing: "easeInOutQuad",
        opacity: [0, 1],
      });
    });

    blobs.filter((el) => el != currentBlob).forEach((blob) => blob.hide());
  };

  const close = () => {
    sessionStorage.setItem("homepage", true);

    resetForm();

    if (!this.isOpen) return;
    this.isOpen = false;

    const contentInner = DOM.contentInner[current];
    anime({
      targets: [
        contentInner.querySelectorAll("img"),
        contentInner.querySelectorAll("h5"),
        contentInner.querySelectorAll("p"),
        contentInner.querySelectorAll("label"),
        contentInner.querySelectorAll("input"),
        contentInner.querySelectorAll("textarea"),
        contentInner.querySelectorAll("button"),
        contentInner.querySelectorAll(".g-recaptcha"),
        contentInner.querySelectorAll(".timeline__divider > .circle"),
        contentInner.querySelectorAll(".timeline__divider > .circle__two"),
        contentInner.querySelectorAll(".timeline__divider > .dash__border"),
        contentInner.querySelectorAll(".card__container__first"),
        contentInner.querySelectorAll(".card__container__first > .card"),
        contentInner.querySelectorAll(".content__title"),
        contentInner.querySelectorAll(".content__subtitle"),
        contentInner.querySelectorAll(".card"),
        contentInner.querySelectorAll(".card__container__second"),
        contentInner.querySelectorAll(".card__container__second__left"),
        contentInner.querySelectorAll(".card__duble"),
        contentInner.querySelectorAll(".card__container__second__right"),
        contentInner.querySelectorAll(".first_card"),
        contentInner.querySelectorAll(".card__last"),
        contentInner.querySelectorAll(
          ".top__section__images desktop_Section > .image__container",
        ),
        contentInner.querySelectorAll(".bottom__list__items"),
        contentInner.querySelectorAll(".list__items"),
        contentInner.querySelectorAll(".item__container"),
        DOM.ctrlBack_1,
        DOM.ctrlBack_2,
        DOM.ctrlBack_3,
        DOM.ctrlBack_4,
        DOM.ctrlBack_5,
      ],
      delay: (t, i) => anime.random(0, 300),
      duration: 200,
      easing: "easeInOutQuad",
      opacity: 0,
      complete: () => {
        // contentInner.style.opacity = 0;
        contentInner.style.display = "none";
        DOM.content.style.pointerEvents = "none";
      },
    });

    DOM.homepageSpan = Array.from(
      document.querySelectorAll(".homepage__main__content > span"),
    );
    var homepageContent = document.querySelector(".homepage__content");
    anime({
      targets: homepageContent,
      duration: 800,
      delay: (t, i) => anime.random(0, 600),
      easing: "easeInOutQuad",
      opacity: [0, 1],
      complete: () => {
        homepageContent.style.display = "flex";
      },
    });

    DOM.homepageSpan.forEach((span) => {
      anime({
        targets: span,
        duration: 800,
        delay: (t, i) => anime.random(0, 600) + 500,
        easing: "easeInOutQuad",
        opacity: [0, 1],
        complete: () => {
          span.style.display = "block";
        },
      });

      anime({
        targets: document.querySelector(".content__image"),
        duration: 800,
        delay: (t, i) => anime.random(0, 600) + 500,
        easing: "easeInOutQuad",
        opacity: [0, 1],
        complete: () => {
          document.querySelector(".content__image").style.display = "block";
        },
      });

      anime({
        targets: document.querySelector(".mobile_menu .border__Bottom__1"),
        duration: 800,
        delay: (t, i) => anime.random(0, 600) + 500,
        easing: "easeInOutQuad",
        opacity: [0, 1],
        complete: () => {},
      });
      anime({
        targets: document.querySelector(".mobile_menu .border__Bottom__2"),
        duration: 800,
        delay: (t, i) => anime.random(0, 600) + 500,
        easing: "easeInOutQuad",
        opacity: [0, 1],
        complete: () => {},
      });
      anime({
        targets: document.querySelector(".mobile_menu .border__Bottom__3"),
        duration: 800,
        delay: (t, i) => anime.random(0, 600) + 500,
        easing: "easeInOutQuad",
        opacity: [0, 1],
        complete: () => {},
      });
      anime({
        targets: document.querySelector(".mobile_menu .border__Bottom__4"),
        duration: 800,
        delay: (t, i) => anime.random(0, 600) + 500,
        easing: "easeInOutQuad",
        opacity: [0, 1],
        complete: () => {},
      });
      anime({
        targets: document.querySelector(".mobile_menu .border__Bottom__5"),
        duration: 800,
        delay: (t, i) => anime.random(0, 600) + 500,
        easing: "easeInOutQuad",
        opacity: [0, 1],
        complete: () => {},
      });

      anime({
        targets: document.querySelector(".homepage__footer"),
        duration: 800,
        delay: (t, i) => anime.random(0, 600) + 500,
        easing: "easeInOutQuad",
        opacity: [0, 1],
        complete: () => {
          document.querySelector(".homepage__footer").style.display = "block";
        },
      });
    });

    blobs[current].collapse().then(() => {
      current = -1;

      anime({
        targets: DOM.Mobilelinks.map((link) => link.querySelectorAll("span")),
        duration: 200,
        delay: (t, i) => anime.random(0, 600),
        easing: "easeInOutQuad",
        opacity: [0, 1],
        // display: 'block',
        complete: () =>
          DOM.Mobilelinks.forEach((link) => {
            link.style.pointerEvents = "auto";
            // link.style.opacity = 1;
            link.classList.add("menu__item--showDeco2");
          }),
      });

      anime({
        targets: DOM.links.map((link) => link.querySelectorAll("span")),
        duration: 200,
        delay: (t, i) => anime.random(0, 600),
        easing: "easeInOutQuad",
        opacity: 1,
        // display: 'block',
        complete: () =>
          DOM.links.forEach((link) => {
            link.style.pointerEvents = "auto";
            // link.style.opacity = 1;

            link.classList.add("menu__item--showDeco");
          }),
      });

      anime({
        targets: DOM.menu,
        duration: 200,
        // delay: (t,i) => anime.random(0,600),
        easing: "easeInOutQuad",
        opacity: 1,
        // display: 'block',
        complete: () =>
          DOM.menu.forEach((link) => {
            link.style.pointerEvents = "auto";
            link.classList.add("menu--showDeco");
          }),
      });

      anime({
        targets: DOM.MobileMenu,
        // duration: 200,
        duration: 600,
        // delay: (t, i) => anime.random(0, 600) + 500,
        easing: "easeInOutQuad",
        opacity: 1,
        // display: 'block',
        complete: () =>
          DOM.MobileMenu.forEach((link) => {
            link.style.pointerEvents = "auto";
          }),
      });
    });
    blobs.filter((el) => el != blobs[current]).forEach((blob) => blob.show());
  };

  function resetForm() {
    document.getElementById("field1").value = "";
    document.getElementById("field2").value = "";
    document.getElementById("field3").value = "";
    document.getElementById("field4").value = "";

    document.getElementById("field1").style.borderColor = "#ffffff";
    document.getElementById("field2").style.borderColor = "#ffffff";
    document.getElementById("field4").style.borderColor = "#ffffff";

    document.getElementById("error__icon__1").classList.remove("show__icon");
    document.getElementById("error__icon__2").classList.remove("show__icon");
    document.getElementById("error__icon__4").classList.remove("show__icon");

    // document.getElementById("error__icon__1").style.opacity = 0;
    // document.getElementById("error__icon__2").style.opacity = 0;
    // document.getElementById("error__icon__4").style.opacity = 0;

    // var el = document.querySelector(".button-bird");
    // el.classList.toggle("active");
    var element = document.getElementById("button-bird-id");
    element.disabled = false;
    element.classList.remove("active");

    document.querySelector(".button-bird__text").innerHTML = "Hfuc Jevvjfh";
  }
}, 12000);

// }
// }
