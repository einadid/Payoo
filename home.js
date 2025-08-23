document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    console.log('ok')
    
    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value

    const amount = parseInt(document.getElementById('add-amount').value)

    const pin = document.getElementById('pin').value

    console.log(bank, accountNumber, amount, pin)

})

