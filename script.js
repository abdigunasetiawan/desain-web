const body = document.querySelector("body");
window.addEventListener("keyup", () => {
  body.classList.toggle("debug");
});

function removeClass(elements, value) {
  elements.forEach((el) => {
    el.classList.remove(value);
  });
}

// show dropdown
const dropdowns = Array.from(document.querySelectorAll(".dropdown"));
const dropdownsHeader = Array.from(document.querySelectorAll(".dropdown__header"));
dropdownsHeader.forEach((dropdownHeader) => {
  dropdownHeader.addEventListener("click", () => {
    if (dropdownHeader.parentElement.classList.contains("open")) {
      removeClass(dropdowns, "open");
    } else {
      removeClass(dropdowns, "open");
      removeClass(dropdowns, "active");
      dropdownHeader.parentElement.classList.add("open");
      dropdownHeader.parentElement.classList.add("active");
    }
  });
});

// cek device
window.addEventListener("resize", () => {
  if (window.innerWidth < 1024) {
    // document.body.innerHTML = `<h1 style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">Perangkat anda tidak mendukung</h1>`;
  }
});

window.addEventListener("load", () => {
  if (window.innerWidth < 1024) {
    // document.body.innerHTML = `<h1 style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">Perangkat anda tidak mendukung</h1>`;
  }
});
