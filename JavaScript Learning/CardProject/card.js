
const imagePre = "images/horse";
const imageEx = ".jpeg";
const imageNum = 10;


function randomImage(){
    const randomNumber = Math.floor(Math.round() * 10) + 1;
    return `${imagePre}${randomNumber}${imageEx}`;
}