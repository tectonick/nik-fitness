// In animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("in-animation");
    }
  });
});

document.querySelectorAll(".in-animate").forEach((el) => observer.observe(el));

//Scroll to top button
const showOnPx = 200;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".top-progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

const goToTop = () => {
  document.body.scrollIntoView();
};

backToTopButton.addEventListener("click", goToTop);