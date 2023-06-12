//first try pretty spot on 
function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / (height * height));
    return bmi;
}

var bmi = bmiCalculator(65, 1.8);
bmi;

// second try with math round and pow
function bmiCalculator(weight, height) {
    var bmi = (weight / Math.pow(height, 2));
    return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.8);
bmi;

// third try convert from kg and m to lb and in
function bmiCalculator(weightPounds, heightInches) {
    var height = heightInches * 0.0254;
    var weight = weightPounds * 0.453592;
    var bmi = (weight / (height * height));
    return Math.round(bmi);
}

var bmi = bmiCalculator(223, 64);
bmi;


// var weight = prompt("What is your weight in pounds?");
// var height = prompt("What is your height in inches?");
// var total = weight / (height * height);
// alert(total);