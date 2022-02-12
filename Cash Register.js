function checkCashRegister(price, cash, cid) {
    let status = ""; 
    let change = [];
    
    cid[0][1] *= 100;
    cid[1][1] *= 100;
    cid[2][1] *= 100;
    cid[3][1] *= 100;
    cid[4][1] *= 100;
    cid[5][1] *= 100;
    cid[6][1] *= 100;
    cid[7][1] *= 100;
    cid[8][1] *= 100;
  
    let dupplyPenny = cid[0][1]
    let dupplyNickel = cid[1][1]
    let dupplyDime = cid[2][1]
    let dupplyQuarter = cid[3][1]
    let dupplyOne = cid[4][1]
    let dupplyFive = cid[5][1]
    let dupplyTen = cid[6][1]
    let dupplyTwenty = cid[7][1]
    let dupplyOneHundred = cid[8][1]
  
  
    price = price*100;
    cash = cash*100;
  
    let oneHundred = 0;
    let twenty = 0;
    let ten = 0;
    let five = 0;
    let one = 0;
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;
  
    console.log(price,cash)
  
    while (price != cash){
     
      if(price+10000 <= cash){
          while(price + 10000 <= cash && dupplyOneHundred >= 10000){
          price += 10000;
          oneHundred += 10000;
          dupplyOneHundred -= 10000;
        }
          status = "OPEN"; 
          change.push(["ONE HUNDRED",oneHundred/100]);
        }
  
        if(price+2000 <= cash){
          while(price + 2000 <= cash && dupplyTwenty >= 2000){
          price += 2000;
          twenty += 2000;
          dupplyTwenty -= 2000;
        }
          status = "OPEN"; 
          change.push(["TWENTY",twenty/100]);
        }
  
        if(price+1000 <= cash){
          while(price + 1000 <= cash && dupplyTen >= 1000){
          price += 1000;
          ten += 1000;
          dupplyTen -= 1000;
        }
          status = "OPEN"; 
          change.push(["TEN",ten/100]);
        }
  
  
        if(price+500 <= cash){
          while(price + 500 <= cash && dupplyFive >= 500){
          price += 500;
          five += 500;
          dupplyFive -= 500;
        }
          status = "OPEN"; 
          change.push(["FIVE",five/100]);
        }
  
  
        if(price+100 <= cash){
          while(price + 100 <= cash && dupplyOne >= 100){
          price += 100;
          one += 100;
          dupplyOne -= 100;
        }
          status = "OPEN"; 
          change.push(["ONE",one/100]);
        }
  
  
        if(price+25 <= cash){
          while(price + 25 <= cash && dupplyQuarter >= 25){
          price += 25;
          quarter += 25;
          dupplyQuarter -= 25;
        }
          status = "OPEN"; 
          change.push(["QUARTER",quarter/100]);
        }
  
  
        if(price+10 <= cash){
          while(price + 10 <= cash && dupplyDime >= 10){
          price += 10;
          dime += 10;
          dupplyDime -= 10;
        }
          status = "OPEN"; 
          change.push(["DIME",dime/100]);
        }
  
  
        if(price+5 <= cash){
          while(price + 5 <= cash && dupplyNickel >= 5){
          price += 5;
          dime += 5;
          dupplyNickel -= 5;
        }
          status = "OPEN"; 
          change.push(["NICKEL",nickel/100]);
        }
  
  
        if(price+1 <= cash){
          while(price + 1 <= cash && dupplyPenny >= 1){
          price += 1;
          penny += 1;
          dupplyPenny -= 1;
        }
          status = "OPEN"; 
          change.push(["PENNY",penny/100]);
        }
  
       
  
        if(price == cash && cid[0][1] == penny && cid[1][1] == nickel && cid[2][1] == dime && cid[3][1] == quarter && cid[4][1] == one && cid[5][1] == five && cid[6][1] == ten && cid[7][1] == twenty && cid[8][1] == oneHundred){
    cid[0][1] /= 100;
    cid[1][1] /= 100;
    cid[2][1] /= 100;
    cid[3][1] /= 100;
    cid[4][1] /= 100;
    cid[5][1] /= 100;
    cid[6][1] /= 100;
    cid[7][1] /= 100;
    cid[8][1] /= 100;
          status = "CLOSED";
          change = cid;
        }
  
        
        if(price != cash){
          price = cash;
          status = "INSUFFICIENT_FUNDS";
          change = []
        }
        
        }
  
  
        
  let cambio = {status,change};
    return cambio;
  }
  
  
  let result = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  
  console.log(result);