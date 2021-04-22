// defining variables
let main_container = document.querySelector(".main_container").offsetTop;
let menu_container_style = document.querySelector(".menu_container").style;
let right_container_style = document.querySelector(".right_container").style;
let main_container_style = document.querySelector(".main_container").style;
let hamburger_style = document.querySelector(".hamburger").style;
let init_scroll_val = 0; // this value will change on scroll, so can't be const

// handling scroll events
window.onscroll = function () {
  // making menu-container and right-container fixed on scroll - on desktop
  if (window.innerWidth > 800) {
    if (document.documentElement.scrollTop > main_container) {
      menu_container_style.position = "fixed";
      menu_container_style.top = 0;
      right_container_style.position = "fixed";
      right_container_style.top = 0;
      right_container_style.right = 0;
      main_container_style.marginLeft = "20%";
    } else {
      menu_container_style.position = "static";
      right_container_style.position = "static";
      main_container_style.marginLeft = 0;
    }
  }
  // hiding/showing hamburger icon on scroll up/down - on mobile
  else {
    if (document.documentElement.scrollTop > init_scroll_val + 10) {
      hamburger_style.display = "none";
      init_scroll_val = document.documentElement.scrollTop;
    } else if (document.documentElement.scrollTop < init_scroll_val - 10) {
      hamburger_style.display = "block";
      init_scroll_val = document.documentElement.scrollTop;
    }
  }
};

// handling click events on menu items
document.querySelectorAll(".menuitem").forEach(function (item) {
  item.onclick = function () {
    // redirecting to resume on click resume link in menu items
    if (this.dataset.id === "resume") {
      const resume_link =
        "https://drive.google.com/file/d/1i9-vymrSCdUcxuo7fI0FkqQ2nJhbxjIT/view?usp=sharing";
      window.open(resume_link, "_blank");
    }
    // scrolling to content on click menu items
    else {
      // const element = document.querySelector(`#${this.dataset.id}`).offsetTop;
      // window.scrollTo(0, element-10);
      const target = $(`#${this.dataset.id}`);
      $("html").animate(
        {
          scrollTop: target.offset().top - 10,
        },
        1000
      );
    }
  };
});

// hiding menu on click anywhere on page
if (window.innerWidth <= 800) {
  document.querySelector("html").onclick = function () {
    menu_container_style.display = "none";
  };
  document.querySelector(".hamburger").onclick = function (e) {
    e.stopPropagation();
  };
}

// showing menu items on click hamburger icon on mobile device
document.querySelector(".hamburger img").onclick = function () {
  menu_container_style.display = "block";
  menu_container_style.position = "fixed";
  menu_container_style.bottom = 0;
  menu_container_style.zIndex = 1;
  return false;
};

// xxxxxxxxxxxxxxxxxxxxxxxxx Implementing Dark Mode xxxxxxxxxxxxxxxxxxxxxxxxx

// storing elements in constants to make them dark
const circle = document.querySelector(".circle");
const bar = document.querySelector(".bar");
const header = document.querySelector(".header");
const right = document.querySelector(".right");
const menu = document.querySelector(".menu");
const img_bg = document.querySelector(".img_bg");
const footer = document.querySelector(".footer");
const menuitem = document.querySelectorAll(".menuitem");
const main = document.querySelector(".main_container");
const hamburger = document.querySelector(".hamburger");
const footer_img = document.querySelector(".footer_img");
const main_content = document.querySelectorAll(".main");

// handling menuitems background on hover in dark and light mode
const hover_menu = (theme) => {
  menuitem.forEach(
    (item, index) =>
      (item.onmouseover = () => {
        item.classList.add("menuitem-" + theme + "-after");
        if (index > 0) {
          menuitem
            .item(index - 1)
            .classList.add("menuitem-" + theme + "-before");
        }

        item.onmouseout = () => {
          item.classList.remove("menuitem-" + theme + "-after");
          if (index > 0) {
            menuitem
              .item(index - 1)
              .classList.remove("menuitem-" + theme + "-before");
          }
        };
      })
  );
};

// setting default value for theme in localstorage
if (localStorage.disabled === undefined) {
  localStorage.disabled = true;
}

// checking and applying theme value from localstorage on page load
if (!JSON.parse(localStorage.disabled)) {
  header.classList.add("header-dark");
  circle.classList.add("circle-dark");
  right.classList.add("right-dark");
  menu.classList.add("menu-dark");
  img_bg.classList.add("img_bg-dark");
  footer.classList.add("footer-dark");
  menuitem.forEach((item, index) => item.classList.add("menuitem-dark"));
  document.body.classList.add("body-dark");
  main.classList.add("main_container-dark");
  hamburger.classList.add("hamburger-dark");
  footer_img.classList.add("footer_img-dark");
  main_content.forEach((item) => item.classList.add("main-dark"));

  hover_menu("dark");
} else {
  hover_menu("light");
}

// function for toggling classes to make elements dark or light based on switch icon state(enabled or disabled)
const toggle = () => {
  header.classList.toggle("header-dark");
  document.body.classList.toggle("body-dark");
  circle.classList.toggle("circle-dark");
  right.classList.toggle("right-dark");
  menu.classList.toggle("menu-dark");
  img_bg.classList.toggle("img_bg-dark");
  footer.classList.toggle("footer-dark");
  menuitem.forEach((item) => item.classList.toggle("menuitem-dark"));
  main.classList.toggle("main_container-dark");
  hamburger.classList.toggle("hamburger-dark");
  footer_img.classList.toggle("footer_img-dark");
  main_content.forEach((item) => item.classList.toggle("main-dark"));
};

// handling switch icon click
bar.onclick = () => {
  // toggling state of theme in localstorage
  localStorage.disabled = !JSON.parse(localStorage.disabled);

  // handling menuitems background on hover in dark and light mode
  if (!JSON.parse(localStorage.disabled)) {
    hover_menu("dark");
  } else {
    hover_menu("light");
  }

  toggle();
};
