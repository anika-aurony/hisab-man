function getAmount(thing){
    const thingText = document.getElementById(thing+'Expense');
    const thingValue = thingText.value;
    const thingAmount = parseFloat(thingValue);
    return thingAmount;
}

document.getElementById('calculatorButton').addEventListener('click', function(){
    // const foodText = document.getElementById('foodExpense');
    // const foodValue = foodText.value;
    // const foodAmount = parseFloat(foodValue);
    const foodAmount = getAmount('food');
    const rentAmount = getAmount('rent');
    const clothAmount = getAmount('cloth');

    // const rentText = document.getElementById('rentExpense');
    // const rentValue = rentText.value;
    // const rentAmount = parseFloat(rentValue);

    // const clothText = document.getElementById('clothExpense');
    // const clothValue = clothText.value;
    // const clothAmount = parseFloat(clothValue);
 
    const totalExpenditure = foodAmount+rentAmount+clothAmount;
    

    const totalExpenses = document.getElementById('totalExpense');
    totalExpenses.innerText = totalExpenditure;
    

    
    
    
})