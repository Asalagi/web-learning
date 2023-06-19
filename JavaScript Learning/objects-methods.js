function HouseKeeper (name, age, yearOfExperience, specialties) {
    this.name = name;
    this.age = age;
    this.yearOfExperience = yearOfExperience;
    this.specialties = specialties;
    this.cleaning = function () {
        alert("cleaning in progress. Please wait");
    }
}

var houseKeeper1 = new HouseKeeper("Mary", 30, 10, ["deep cleaning"]);

houseKeeper1.cleaning();