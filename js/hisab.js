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
                    console.log('Please provide valid number in total income');

                }

            }
            else{
            console.log('Please provide valid number in cloth expense');
        }
            
        }
        else{
            console.log('Please provide valid number in rent expense');
        }
   

        
    
    }
    else{
        console.log('Please provide valid number in food expense');
    }
 
    
    
    
})