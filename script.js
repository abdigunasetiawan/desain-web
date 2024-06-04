// const body = document.querySelector("body");
// window.addEventListener("keyup", () => {
//   body.classList.toggle("debug");
// });

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

const iframe = document.querySelector("iframe");
const navigatorButtons = document.querySelectorAll(".navigator-wrapper button");
const pages = [
  {
    title: "latheading.html",
    url: "./pages/pertemuan1/latheading.html",
  },
  {
    title: "latparagraf.html",
    url: "./pages/pertemuan1/latparagraf.html",
  },
  {
    title: "lattulisan.html",
    url: "./pages/pertemuan1/lattulisan.html",
  },
  {
    title: "latfont.html",
    url: "./pages/pertemuan2/latfont.html",
  },
  {
    title: "latlink.html",
    url: "./pages/pertemuan2/latlink.html",
  },
  {
    title: "latpenomoran.html",
    url: "./pages/pertemuan2/latpenomoran.html",
  },
  {
    title: "latgambar.html",
    url: "./pages/pertemuan2/latgambar.html",
  },
  {
    title: "latlinkdangambar.html",
    url: "./pages/pertemuan2/latlinkdangambar.html",
  },
  {
    title: "judul.html",
    url: "./pages/pertemuan3/judul.html",
  },
  {
    title: "menu.html",
    url: "./pages/pertemuan3/menu.html",
  },
  {
    title: "latframe.html",
    url: "./pages/pertemuan3/latframe.html",
  },
  {
    title: "latable.html",
    url: "./pages/pertemuan3/lattable.html",
  },
  {
    title: "latform.html",
    url: "./pages/pertemuan4/latform.html",
  },
  {
    title: "daftar.html",
    url: "./pages/pertemuan4/daftar.html",
  },
  {
    title: "depan.html",
    url: "./pages/pertemuan5/depan.html",
  },
  {
    title: "judul.html",
    url: "./pages/pertemuan5/judul.html",
  },
  {
    title: "menu.html",
    url: "./pages/pertemuan5/menu.html",
  },
  {
    title: "frame.html",
    url: "./pages/pertemuan5/frame.html",
  },
  {
    title: "latexternal.html",
    url: "./pages/pertemuan6/latexternal.html",
  },
  {
    title: "latselector.html",
    url: "./pages/pertemuan6/latselector.html",
  },
  {
    title: "latselectorbebas.html",
    url: "./pages/pertemuan6/latselectorbebas.html",
  },
  {
    title: "latselectorclass.html",
    url: "./pages/pertemuan6/latselectorclass.html",
  },
  {
    title: "latselectorid.html",
    url: "./pages/pertemuan6/latselectorid.html",
  },
  {
    title: "latfhalaman.html",
    url: "./pages/pertemuan6/latfhalaman.html",
  },
  {
    title: "latvar.html",
    url: "./pages/pertemuan9/latvar.html",
  },
  {
    title: "latoperator.html",
    url: "./pages/pertemuan9/latoperator.html",
  },
  {
    title: "lat_if.html",
    url: "./pages/pertemuan10/lat_if.html",
  },
  {
    title: "lat_case.html",
    url: "./pages/pertemuan10/lat_case.html",
  },
  {
    title: "latfor.html",
    url: "./pages/pertemuan10/latfor.html",
  },
  {
    title: "latwhile.html",
    url: "./pages/pertemuan10/latwhile.html",
  },
  {
    title: "latfunction.html",
    url: "./pages/pertemuan10/latfunction.html",
  },
  {
    title: "latfunction1.html",
    url: "./pages/pertemuan10/latfunction1.html",
  },
  {
    title: "latobjek.html",
    url: "./pages/pertemuan10/latobjek.html",
  },
  {
    title: "menghitungIPK.html",
    url: "./pages/pertemuan10/tugasFunction.html",
  },
  {
    title: "menghitungLuasPersegi.html",
    url: "./pages/pertemuan10/tugasFunction2.html",
  },
  {
    title: "konversiNilai.html",
    url: "./pages/pertemuan11/konversiNilai.html",
  },
  {
    title: "diskon.html",
    url: "./pages/pertemuan11/diskon.html",
  },
  {
    title: "perhitunganGaji.html",
    url: "./pages/pertemuan11/perhitunganGaji.html",
  },
  {
    title: "penerimaanPegawai.html",
    url: "./pages/pertemuan11/penerimaanPegawai.html",
  },
  {
    title: "billingOnline.html",
    url: "./pages/pertemuan11/billingOnline.html",
  },
  {
    title: "zodiak.html",
    url: "./pages/pertemuan11/zodiak.html",
  },
];

let pageIndex = -1;

navigatorButtons[0].addEventListener("click", () => {
  navigator("previous");
});

navigatorButtons[1].addEventListener("click", () => {
  navigator("next");
});

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") {
    navigator("previous");
  } else if (e.key === "ArrowRight") {
    navigator("next");
  }
});

const sidebarLink = Array.from(document.querySelectorAll("#sidebar-link"));
console.log(sidebarLink);

sidebarLink.forEach((el) => {
  el.addEventListener("click", (e) => {
    pageIndex = el.dataset.index;
    updateButtons();
  });
});

function navigator(direction) {
  console.log(`pageIndex before : ${pageIndex}`);
  if (direction == "previous") {
    console.log("previous");

    if (pageIndex == 0 || pageIndex < 0) {
      return;
    } else {
      pageIndex--;
      iframe.src = pages[pageIndex].url;
      updateButtons();
    }
  } else if (direction == "next") {
    console.log("next");

    if (pageIndex < 0) {
      pageIndex++;
      iframe.src = pages[pageIndex].url;
    } else {
      pageIndex++;
      iframe.src = pages[pageIndex].url;
      updateButtons();
    }
  }
  console.log(`pageIndex after : ${pageIndex}`);
}

function updateButtons() {
  if (pageIndex == -1 || pageIndex == 0) {
    navigatorButtons[0].classList.add("hide");
  } else if (pageIndex == pages.length - 1) {
    navigatorButtons[1].classList.add("hide");
  } else {
    navigatorButtons[0].classList.remove("hide");
    navigatorButtons[1].classList.remove("hide");
  }
}

updateButtons();
