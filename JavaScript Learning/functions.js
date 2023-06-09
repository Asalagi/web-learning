function getGrain(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    var bags = Math.floor(money / 24.99);
    
    console.log("buy " + bags + " bags of grain")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

  getGrain(100);


  // spiffed up grain and change function

  function getGrain(money) {   
    console.log("buy " + buyGrain(money, 21.99) + " bags of grain.");
    console.log("you have " + grainChange(money, 21.99) + " left in your budget.");
  }

function buyGrain(myMoney, grainCost) {
    var bags = Math.floor(myMoney / grainCost);
    return bags;
}

function grainChange(myMoney, grainCost) {
    var change = myMoney % grainCost;
    return change;
}

getGrain(100);