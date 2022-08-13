const date = new Date();
const year = date.getFullYear();
const modalWebPrevEL = document.getElementById("show_image_popup");
const overlay = document.querySelector(".overlay");
const modalEL = document.querySelectorAll(".modal");
const modalHandleClicksEL = document.querySelectorAll(".modal-handle");
const buyBtn = document.getElementById("btn-buy");
let openModal = false;

function closeWebdevModal() {
  if (openModal) {
    $(modalWebPrevEL).fadeOut();
    $(".overlay").fadeOut();
    openModal = false;
  }
}

document.querySelector(
  ".copyright"
).innerHTML = `<p>Copyright &copy ${year} FreeCity All Rights Reserved</p>`;

const img = document.querySelectorAll(".small-image");
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function () {
    let imgHandler = document.getElementById("large-image");
    imgHandler.src = `images/${img[i].id}.jpg`;
    $("#show_image_popup").fadeIn(500);
    $(".overlay").fadeIn(500);
    openModal = true;
  });
}

// Handle Click events
$("#close-btn").click(function () {
  closeWebdevModal();
});

$(overlay).click(function (e) {
  closeWebdevModal();
});

// handle doc's clicks
for (let i = 0; i < modalHandleClicksEL.length; i++) {
  $(modalHandleClicksEL[i]).click(function (e) {
    classSelected = document.querySelector("." + modalHandleClicksEL[i].id);
    $(classSelected).show();
    for (let i = 0; i < modalEL.length; i++) {
      if (modalEL[i].classList.contains("active")) {
        if (modalEL[i] !== classSelected) {
          modalEL[i].classList.remove("active");
          $(modalEL[i]).hide();
          classSelected.classList.add("active");
          $(classSelected).show();
        }
      }
    }
  });
}

// handle keypress events
$(document).keydown(function (e) {
  if (e.key === "Escape") {
    closeWebdevModal();
  }
});
