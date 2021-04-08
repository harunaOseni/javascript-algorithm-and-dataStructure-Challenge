const currencyUnit = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {
  let customersChange = (cash - price) * 100;
  let originalCustomersChange = customersChange;
  let status = ""; 
  let change = [];

  let totalAmountOfMoneyInDrawer = 0; 
  let cashInDrawerStartingFromAHundredDenom = cid.filter(elem => e[1] !== 0).reverse();

  cashInDrawerStartingFromAHundredDenom.forEach(elem => {
    let denomName = elem[0]; 
    let currentSumOfCashPerEachDenomInDrawer = elem[1] * 100;
    totalAmountOfMoneyInDrawer += currentSumOfCashPerEachDenomInDrawer;
    let amountOfChangeToBeGiven = 0;

    while(customersChange >= currencyUnit[denomName]  && currentSumOfCashPerEachDenomInDrawer > 0){
      amountOfChangeToBeGiven += currencyUnit[denomName];
      customersChange -= currencyUnit[denomName]; 
      currentSumOfCashPerEachDenomInDrawer -= currencyUnit[denomName]; 
    }

    if(amountOfChangeToBeGiven > 0){
      change.push([denomName, amountOfChangeToBeGiven / 100]);
    }
  })

  if(customersChange > 0){
    status = 'INSUFFICIENT_FUNDS';
    change = [];
  } else if(customersChange == 0 && originalCustomersChange == totalAmountOfMoneyInDrawer){
    status = 'CLOSED';
    change = cid;
  } else {
    status = "OPEN";
  }

  return { 'status': status, 'change': change };
  };

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
