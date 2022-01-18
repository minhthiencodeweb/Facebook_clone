const contactItems = document.querySelectorAll(".contact__item-link");
const contactDetail = document.querySelector(".contact__detail");

contactItems.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    if (!contactDetail.classList.contains("display-flex")) {
      const { top, height, right } = item.getBoundingClientRect();
    }
  });
});
