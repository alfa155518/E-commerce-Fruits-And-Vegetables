// Progress Bar Section

let progressBar = document.querySelectorAll(
  ".main-progress .progress .progress-bar"
);

document.addEventListener("scroll", (e) => {
  progressBar.forEach((bar) => {
    if (window.scrollY >= 1000) {
      bar.style.width = bar.dataset.width;
    }
  });
});

// Spinner Loader
let spinnerLoader = document.querySelector(".spinner-loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    spinnerLoader.style.opacity = "0";
  }, 2000);

  setTimeout(() => {
    spinnerLoader.style.display = "none";
  }, 2000);
});

// Arrow Scroll To Top
let scrollTop = document.querySelector(".scroll-top");

// function Scroll To Top
window.onscroll = function () {
  if (window.scrollY >= 600) {
    scrollTop.classList.add("appear");
  } else {
    scrollTop.classList.remove("appear");
  }
};

// function Scroll To Top
scrollTop.addEventListener("click", handelScroll);

// function Scroll To Top
function handelScroll() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}
