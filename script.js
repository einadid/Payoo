document.getElementById('btn-login')
    .addEventListener('click', function(e){
        e.preventDefault()
        const mobileNumber = 12345
        const pinNumber = 1234
        const mobileNumberValue = document.getElementById('mobile-number').value
        const mobileNumberValueConverted = parseInt(mobileNumberValue)

        const pinNumberValue = document.getElementById('pin-number').value
        const pinNumberValueConverted = parseInt(pinNumberValue)

        if(mobileNumberValueConverted ===  mobileNumber && pinNumberValueConverted === pinNumber ){
            console.log('matched')
            window.location.href="./home.html"
        } else {
            // console.log('invalid')
            alert('Invalid credentials')
        }
})