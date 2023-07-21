const imageNum = 10;

function getRandomImageFilename() {
  const randomNumber = Math.floor(Math.random() * imageNum) + 1;
  return `/images/horse${randomNumber}.jpg`;
}

function getImageContent(randomNumber) {
  if (randomNumber === 1) {
    return "I am a Quarter Horse!";
  } else if (randomNumber === 2) {
    return "I am a Paint Horse!";
  } else if (randomNumber === 3) {
    return "I am an Arabian!";
  } else if (randomNumber === 4) {
    return "I am a Thoroughbred!";
  } else if (randomNumber === 5) {
    return "I am an Appaloosa!";
  } else if (randomNumber === 6) {
    return "I am a Mustang!";
  } else if (randomNumber === 7) {
    return "I am a Dutch Warmblood!";
  } else if (randomNumber === 8) {
    return "I am a Clydesdale!";
  } else if (randomNumber === 9) {
    return "I am a Fresian!";
  } else if (randomNumber === 10) {
    return "I am a Andalusian!";
  } else {
    return "I am unidentified";
  }
}

function updateRandomImage() {
  const randomImageElement = document.getElementById("randomImage");
  const imageBlurbElement = document.getElementById("imageBlurb");
  const randomNumber = Math.floor(Math.random() * imageNum) + 1;

  // Get the filename for the random image
  const randomImageFilename = `/images/horse${randomNumber}.jpg`;

  // Update the image source
  randomImageElement.src = randomImageFilename;

  // Update the blurb text based on the random number
  const blurbText = getImageContent(randomNumber);
  imageBlurbElement.textContent = blurbText;
}

// Attach a click event listener to the button
document.getElementById("randomizeButton").addEventListener("click", updateRandomImage);
