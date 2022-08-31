// NaN = number + undefined .
// NaN = number + null .
// NaN = number + boolean .
//1. calculate chair , table  and bed wood quantity.

function goodsAmount(chairQuantity, tableQuantity, bedQuantity) {
  // per goods used wood amount
  const perChair = 5; //cft
  const perTable = 15;
  const perBed = 60;

  const chairWood = perChair * chairQuantity;
  const tableWood = perTable * tableQuantity * bedQuantity;
  const bedWood = perBed * bedQuantity;
  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

const woodtotalAmount = goodsAmount(5, 2, 2);

console.log(woodtotalAmount);



