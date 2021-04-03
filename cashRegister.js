function checkCashRegister(price, cash, cid) {
    let output = { status: "", change: cid };
  
    const changeForCustomer = (cash - price).toFixed(2);
  
    const amountOfCashInDrawer = getTotalAmountOfCashInDrawer(cid);
  
    output.status = cashRegisterStatus(changeForCustomer, amountOfCashInDrawer, output);
  
    output.change = getCustomersChange(changeForCustomer, cid);
  
    if (changeForCustomer === amountOfCashInDrawer) {
      output.status = "CLOSED";
      output.change = [...cid];
    } if (changeForCustomer > amountOfCashInDrawer) {
      output.status = "OPEN";
    } if (changeForCustomer > getTotalAmountOfCashInDrawer(output.change)) {
      output.status = "INSUFFICIENT_FUNDS";
      output.change = [];
    }
  
    return output;
  };
  const getTotalAmountOfCashInDrawer = (cashInDrawer) => {
    let totalAmountInDrawer = 0;
    for (let cash of cashInDrawer) {
      let cashValue = cash[1];
      totalAmountInDrawer += cashValue;
    }
    return totalAmountInDrawer.toFixed(2);
  }
  
  const cashRegisterStatus = (customersMoney, totalAmountOfCashInDrawer, output) => {
    if (totalAmountOfCashInDrawer < customersMoney) {
      return output.change = "INSUFFICIENT_FUNDS";
  
    }
  
    if (totalAmountOfCashInDrawer > customersMoney) {
      return output.change = "OPEN";
    }
  
    if (totalAmountOfCashInDrawer === customersMoney) {
      return output.change = "CLOSED";
    }
  }
  
  const getCustomersChange = (customersChange, cashInDrawer) => {
    const changeResult = [];
    const actualValueOfEachDenomination = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.10,
      "QUARTER": 0.25,
      "ONE": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00
    };
  
    for (let i = cashInDrawer.length - 1; i >= 0; i--) {
      const eachCashDenominationName = cashInDrawer[i][0];
      const eachCashDenominationamount = cashInDrawer[i][1];
      const eachcashDenominationValue = actualValueOfEachDenomination[eachCashDenominationName];
      let numberOfCashInEachDenominations = (eachCashDenominationamount / eachcashDenominationValue).toFixed(2);
      let numberOfCashDenominationToBeReturned = 0;
  
      while (customersChange >= eachcashDenominationValue && numberOfCashInEachDenominations > 0) {
        customersChange -= eachcashDenominationValue;
        customersChange = customersChange.toFixed(2);
        numberOfCashInEachDenominations--;
        numberOfCashDenominationToBeReturned++;
      }
  
      if (numberOfCashDenominationToBeReturned > 0) {
        changeResult.push([eachCashDenominationName, numberOfCashDenominationToBeReturned * eachcashDenominationValue]);
      }
    }
  
    return changeResult;
  };
  
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);