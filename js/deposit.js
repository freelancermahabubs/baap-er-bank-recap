// step-1: add event listener to the deposit button
// setp-2: get deposit amount from the deposit input filed 
// 2-5. Convert string deposit amount to a number type
// step-3: clear the deposit input field after getting the value
// step-4 get the previous deposit total
// step-5: calculate new deposit total and set the value to the deposit total
// step-6: get Current total Balance 
// step-7: calculate the new and set it to the total balance Element

// step-1
// document.getElementById("btn-deposit").addEventListener("click", function(){
  // step-2 
  // const depositFieldElement = document.getElementById("deposit-field");
  // const newDepositAmountString = depositFieldElement.value;
  // const newDepositAmount = parseFloat(newDepositAmountString);

  //step-3:
  // depositFieldElement.value = '';

  // step-4:
  // const previousDepositTotalElement = document.getElementById("deposit-total");
  // const previousDepositTotalString = previousDepositTotalElement.innerText;
  // const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step-5:
  // const newDepositTotal = previousDepositTotal + newDepositAmount;
  // previousDepositTotalElement.innerText = newDepositTotal;
  
  // step-6:
  // const totalBalanceElement = document.getElementById("balance-total");
  // const previousTotalBalanceString = totalBalanceElement.innerText;
  // const previousTotalBalanceAmount = parseFloat(previousTotalBalanceString);

  // step-7 
//   const newTotalBalance = previousTotalBalanceAmount + newDepositTotal;
//   totalBalanceElement.innerText = newTotalBalance;
// });

// my prectices 
document.getElementById("btn-deposit").addEventListener("click", function(){
  
  const depositFieldElement = document.getElementById("deposit-field");
  const newDepositAmountString = depositFieldElement.value;
  const newDepositTotal = parseFloat(newDepositAmountString);
  
  depositFieldElement.value = "";

  const previousDepositTotalAmountElement = document.getElementById("deposit-total");
  const previousDepositTotalAmountString = previousDepositTotalAmountElement.innerText
  const previousDepositTotalAmount = parseFloat(previousDepositTotalAmountString);

  const newDepositTotalAmount = previousDepositTotalAmount + newDepositTotal;
  previousDepositTotalAmountElement.innerText = newDepositTotalAmount;

const totalBalanceElement = document.getElementById("balance-total");
const previousTotalBalanceString = totalBalanceElement.innerText;
const previousTotalBalanceAmount = parseFloat(previousTotalBalanceString);

const newTotalBalance = previousTotalBalanceAmount + newDepositTotalAmount;
totalBalanceElement.innerText = newTotalBalance;
})