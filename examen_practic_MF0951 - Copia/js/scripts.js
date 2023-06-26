
const modalOverlay = document.querySelector("#modal01");
const openBtn = document.querySelector("#shop");



var openModalLinks = document.getElementsByClassName("w3-modal");

for (var i = 0; i < openModalLinks.length; i++) {
  openModalLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    var modalOverlay = document.querySelector(".w3-modal");
    modalOverlay.classList.add("modal");
  });
}

var closeModalButton = document.querySelector(".close");
closeModalButton.addEventListener("click", function () {
  var modalOverlay = document.querySelector(".porencima");
  modalOverlay.classList.remove("w3-modal");
});
