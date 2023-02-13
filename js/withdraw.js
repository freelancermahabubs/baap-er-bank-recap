// step-1: add event handler with the withdraw button 
// step 2. get the withdraw amount 
// step 3. clear the Withdraw amount element
// step-4: get previous withdraw total
// step-5: calculate total Withdraw amount and set it to the withdraw total 
// step-6: get previous balance
// step-7: Calculate new balance and set it to the balance total Element
// step-1:
document.getElementById("btn-withdraw").addEventListener("click", function(){
  // step-2:

  const totalWithdrawAmountElement = document.getElementById("withdraw-filed");
  const totalWithdrawAmountString = totalWithdrawAmountElement.value;
  const totalWithdrawAmount = parseFloat (totalWithdrawAmountString);

  // step-3:
  totalWithdrawAmountElement.value = "";

  // step-4:
  const previousWithdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalAmountString = previousWithdrawTotalElement.innerText;
  const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalAmountString);

  // step-5:
  const newTotalWithdrawAmount = previousWithdrawTotalAmount + totalWithdrawAmount;
  previousWithdrawTotalElement.innerText = newTotalWithdrawAmount;

  // step-6:
  const balanceElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step-7:

const newBalanceTotal = previousBalanceTotal - newTotalWithdrawAmount;
balanceElement.innerText= newBalanceTotal;
});