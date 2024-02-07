"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 11;

let play = true;
let noCount = 0;

const music1 = document.getElementById("music1"); 
const music2 = document.getElementById("music2");

window.addEventListener('load', function() {
  music1.play(); music2 .pause()
});

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yeeeeiiiiii, muawwwwww te amooOoOoooO ❤❤♡❤♡❤♡❤♡❤♡❤♡❤❤";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  music1.pause();
  music2.play();
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.5;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No 😔",
    "Estás segura? ☹️",
    "Amor, en serio? 😟",
    "Haber, piensa otra vez 🥺",
    "SEGURA QUE NO? 😣",
    "Aya, asi estamos 😢",
    "Mira eh, luego no me digas nada 😑",
    "Pero, no quieres? 7-7",
    "No te hagas la de rogar 😒",
    "di q sí ctm 😕",
    "te amo, di que sí 😖",
    "si :)",
  ];

  const messageIndex = noCount % messages.length;
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}