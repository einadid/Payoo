const validPin = 1234

// ---------------- ADD MONEY ----------------- 

document.getElementById('add-money-btn').addEventListener('click', function(e){
            // Prevent the form from submitting and reloading the page
            e.preventDefault();

            const bank = document.getElementById("bank").value
            const accountNumber = document.getElementById(("account-number")).value

            const amount = parseInt(document.getElementById("add-amount").value);

            const pin = parseInt(document.getElementById('add-pin').value)

            console.log(bank , accountNumber, amount, pin)
            const availableBalance = parseInt(document.getElementById('available-balance').innerText)

            if (accountNumber.length === 11) {
                // alert("Valid Account Number ");
                } else {
                    alert("Invalid Account Number (must be 11 digits)");
                    return;
            }

            if(pin != validPin){
                alert("Please valid pin number")
                return;

            }

            const totalAvailavalBalance = availableBalance+amount

            document.getElementById('available-balance').innerText= totalAvailavalBalance
            
        });


// ---------------- CASH OUT -----------------

document.getElementById('withdraw-money-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const agentNumber = document.getElementById("agent-number").value;
    const amount = parseInt(document.getElementById("cash-amount").value);
    const pin = parseInt(document.getElementById('cash-pin').value);

    console.log(agentNumber, amount, pin);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    // validate agent number
    if (agentNumber.length !== 11) {
        alert("Invalid Agent Number (must be 11 digits)");
        return;
    }

    // validate pin
    if (pin !== validPin) {
        alert("Please enter a valid pin number");
        return;
    }

    // check sufficient balance
    if (amount > availableBalance) {
        alert("Insufficient Balance!");
        return;
    }

    const totalAvailableBalance = availableBalance - amount;

    document.getElementById('available-balance').innerText = totalAvailableBalance;
    alert("Cashout Successful!");
});


// ------------------- FUNCTION: Transfer Money -------------------

document.getElementById('transfer-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const accountNumber = document.getElementById("transfer-account").value;
    const amount = parseInt(document.getElementById("transfer-amount").value);
    const pin = parseInt(document.getElementById("transfer-pin").value);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    // validate account number
    if (accountNumber.length !== 11) {
        alert("Invalid Account Number (must be 11 digits)");
        return;
    }

    // validate pin
    if (pin !== validPin) {
        alert("Please enter a valid pin number");
        return;
    }

    // check sufficient balance
    if (amount > availableBalance) {
        alert("Insufficient Balance!");
        return;
    }

    // update balance
    const totalAvailableBalance = availableBalance - amount;
    document.getElementById('available-balance').innerText = totalAvailableBalance;

    alert("Money Transferred Successfully!");
});



// ------------------- FUNCTION: Get Bonus -------------------
document.getElementById('bonus-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const coupon = document.getElementById('bonus-coupon').value;

    if(coupon.trim() === "") {
        alert("Please enter a valid coupon code!");
        return;
    }

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const bonusAmount = 500; 

    document.getElementById('available-balance').innerText = availableBalance + bonusAmount;

    alert("Bonus added successfully! +" + bonusAmount);
    document.getElementById('bonus-coupon').value = ""; 
});

// ------------------- FUNCTION: Pay Bill -------------------
document.getElementById('paybill-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const bank = document.getElementById('paybill-bank').value;
    const accountNumber = document.getElementById('paybill-account').value;
    const amount = parseInt(document.getElementById('paybill-amount').value);
    const pin = parseInt(document.getElementById('paybill-pin').value);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    // validate account number
    if(accountNumber.length !== 11) {
        alert("Invalid Account Number (must be 11 digits)");
        return;
    }

    // validate pin
    if(pin !== validPin) {
        alert("Please enter a valid pin number");
        return;
    }

    // check sufficient balance
    if(amount > availableBalance) {
        alert("Insufficient Balance!");
        return;
    }

    // update balance
    const totalAvailableBalance = availableBalance - amount;
    document.getElementById('available-balance').innerText = totalAvailableBalance;

    alert(`Bill Paid Successfully to ${bank}! Amount: ${amount}`);
    document.getElementById('paybill-account').value = "";
    document.getElementById('paybill-amount').value = "";
    document.getElementById('paybill-pin').value = "";
});



// ---------------- toggle feature  -----------------

// Add Money Card Click
document.getElementById('add-card-btn').addEventListener('click', function() {
    document.getElementById('add-money-parent').style.display = "block"; 
    document.getElementById('cash-out-parent').style.display = "none";  
    document.getElementById('transfer-parent').style.display = "none";
    document.getElementById('bonus-parent').style.display = "none";
    document.getElementById('paybill-parent').style.display = "none";

});

// Cashout Card Click
document.getElementById('cash-card-btn').addEventListener('click', function() {
    document.getElementById('add-money-parent').style.display = "none";
    document.getElementById('cash-out-parent').style.display = "block";
    document.getElementById('transfer-parent').style.display = "none";
    document.getElementById('bonus-parent').style.display = "none";
    document.getElementById('paybill-parent').style.display = "none";
});

document.getElementById('transfer-card-btn').addEventListener('click', function() {
    document.getElementById('add-money-parent').style.display = "none";
    document.getElementById('cash-out-parent').style.display = "none";
    document.getElementById('transfer-parent').style.display = "block";
    document.getElementById('bonus-parent').style.display = "none";
    document.getElementById('paybill-parent').style.display = "none";
});

document.getElementById('bonus-card-btn').addEventListener('click', function() {
    document.getElementById('add-money-parent').style.display = "none";
    document.getElementById('cash-out-parent').style.display = "none";
    document.getElementById('transfer-parent').style.display = "none";
    document.getElementById('bonus-parent').style.display = "block";
    document.getElementById('paybill-parent').style.display = "none";

});

document.getElementById('paybill-card-btn').addEventListener('click', function() {
    document.getElementById('add-money-parent').style.display = "none";
    document.getElementById('cash-out-parent').style.display = "none";
    document.getElementById('transfer-parent').style.display = "none";
    document.getElementById('bonus-parent').style.display = "none";
    document.getElementById('paybill-parent').style.display = "block";
});
