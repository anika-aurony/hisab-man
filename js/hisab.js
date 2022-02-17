function getAmount(amount){
    
    const amountText = document.getElementById(amount);
    const amountValue = amountText.value;
    const AmountInNum = parseFloat(amountValue);
    return AmountInNum;
   
}

//Expense and Balance calculation
document.getElementById('calculatorButton').addEventListener('click', function(){

    //Get amount from the input field
    const foodAmount = getAmount('foodExpense');
    const rentAmount = getAmount('rentExpense');
    const clothAmount = getAmount('clothExpense');
    const totalIncome = getAmount('incomeAmount');
    

    //error handling
    if(foodAmount > 0   ){

        if (rentAmount >0) {
            if(clothAmount > 0){
                if (totalIncome>0) {
                            //calculation and diplay result 
                                const totalExpenditure = foodAmount+rentAmount+clothAmount;
                                

                                const totalExpenses = document.getElementById('totalExpense');
                                totalExpenses.innerText = totalExpenditure;
                                
                                const balance = totalIncome - totalExpenditure;

                                const afterExpenses = document.getElementById('afterExpense');
                                afterExpenses.innerText = balance;
                }
                else{

                    const error = document.getElementById('errorMessage');
                    
                    error.innerText = 'Please provide valid number in total income';
                    
                }

            }
            else{
                const error = document.getElementById('errorMessage');                   
                error.innerText = 'Please provide valid number in cloth expense';
            
            }
            
        }
        else{
            const error = document.getElementById('errorMessage');                   
            error.innerText = 'Please provide valid number in rent expense';
        }
    }
    else{    
        const error = document.getElementById('errorMessage');                   
        error.innerText = 'Please provide valid number in food expense';
    }
    
})

document.getElementById('saveButton').addEventListener('click',function(){

    // Get amount from input field
    const parcentage = getAmount('saveParcentage');
    const totalIncome = getAmount('incomeAmount');
    const foodAmount = getAmount('foodExpense');
    const rentAmount = getAmount('rentExpense');
    const clothAmount = getAmount('clothExpense');

    // Saving Calculation
    let fraction = parcentage/100;
    let savings = totalIncome * fraction;

  
    
    // Remaining Balance Calculation
    const totalExpenditure = foodAmount+rentAmount+clothAmount;

    let remaining = totalIncome - savings - totalExpenditure;

    // Error Handling and display
    if (remaining > 0){
        const saving = document.getElementById('savingAmount');
        saving.innerText = savings;

        const remaingAmount = document.getElementById('remainingBalance');
        remaingAmount.innerText = remaining;

    }
    else{
        const error = document.getElementById('errorMessage2');                   
        error.innerText = 'You donot have enough money!';

    }

 

})