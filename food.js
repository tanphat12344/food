const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".icon-menu");
// const mainnavbar = document.querySelector(".mainnavbar");
const closeBtn = document.querySelectorAll(".navbar__link");
const overlay = document.querySelector("#overlay");



menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    overlay.classList.toggle("show");
  });


//   closeBtn.addEventListener("click", () => {
//     menu.classList.remove("navbar__open");
//   });

closeBtn.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.toggle("navbar__open");
        overlay.classList.toggle("show");

        // menu.classList.remove("navbar__open");
        // overlay.classList.remove("show");
      });
});

overlay.addEventListener("click", () =>{
    overlay.classList.toggle("show");
    menu.classList.toggle("navbar__open");


    // overlay.classList.remove("show");
    // menu.classList.remove("navbar__open");

});
