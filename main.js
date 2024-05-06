function getInputValue(idName){
    const inputElement = document.getElementById(idName);
    const inputElementString = inputElement.value;
    const inputValue = parseFloat(inputElementString);
    return inputValue;
}

function setValue(valueId, value){
    const valueElement = document.getElementById(valueId);
    valueElement.innerText = value;
}

document.getElementById('btn-calculate').addEventListener('click',function(){
    const incomeAmouunt = getInputValue('income-amount');
    const foodAmount = getInputValue('food-amonut');
    const rentAmount = getInputValue('rent-amount');
    const clothesAmount = getInputValue('clothes-amount');

    let totalExpense = foodAmount + rentAmount + clothesAmount;
    if(totalExpense > incomeAmouunt){
        alert('Expense Must be Lower than Income');
    }

    let balance = incomeAmouunt - totalExpense;

    if(isNaN(incomeAmouunt) || isNaN(foodAmount) || isNaN(rentAmount) || isNaN(clothesAmount)){
        alert('Please enter a number');
        totalExpense = 0;
        balance = 0;
    }
    else if(incomeAmouunt < 0 || foodAmount < 0 || rentAmount < 0 || clothesAmount <0){
        alert('Enter Positive Number');
    }

    setValue('total-expenses',totalExpense);
    setValue('balance', balance);
})

document.getElementById('save').addEventListener('click',function(){
    const saveAmount = getInputValue('save-amount');
    if(saveAmount > 100){
        alert('Save amount must be lower than 100');
    }

    const incomeAmouunt = getInputValue('income-amount');

    const balanceElement = document.getElementById('balance');
    const balanceElementString = balanceElement.innerText;
    const balance = parseFloat(balanceElementString);

    const totalSave = (incomeAmouunt * (saveAmount/100)).toFixed(2);
    if(totalSave > balance){
        alert('Insufficient Balance');
    }

    setValue('saving-amonunt',totalSave);


    const remainBalance = balance - totalSave;
    setValue('remaining-balance',remainBalance)
    

})