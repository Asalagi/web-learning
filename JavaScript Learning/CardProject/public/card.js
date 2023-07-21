const imageNum = 10;

function getRandomImageFilename() {
  const randomNumber = Math.floor(Math.random() * imageNum) + 1;
  return `/images/horse${randomNumber}.jpg`;
}

function updateRandomImage() {
  const randomImageElement = document.getElementById("randomImage");
  randomImageElement.src = getRandomImageFilename();
}

document.getElementById("randomizeButton").addEventListener("click", updateRandomImage);
