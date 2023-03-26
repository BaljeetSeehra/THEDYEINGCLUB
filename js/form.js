//once logged in should not acces signup page
window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(user.email){
            location.replace('/');
        }
    }
}

//form

let formBtn = document.querySelector('.submit-btn');
let loader = document.querySelector('.loader');

formBtn.addEventListener('click', () => {
    let fullname = document.querySelector('#name') || null;
    let email = document.querySelector('#email');
    let number = document.querySelector('#number') || null;
    let password = document.querySelector('#password');
    let tac = document.querySelector('#tc') || null;

     // form validation
    if(fullname != null){ //signup page
        if(fullname.value.length < 3){
            showFormError('name must be 3 letters long');
        } else if(!email.value.length){
            showFormError('enter valid email');
        } else if(!Number(number.value) || number.value.length < 10){
            showFormError('invalid number , please enter a valid phone number');
        } else if(password.value.length < 8){
            showFormError(' password must be  8 letters long');
        } else if(!tac.checked){
            showFormError('You must agree to our Terms and Conditions');
        } else{
            //submit form in firebase
            loader.style.display = 'block';
            sendData('/signup' ,{
                name: fullname.value,
                email: email.value,
                number: number.value,
                password: password.value,
                tac: tac.checked
            })
        }
    }else{ //login page
        if(!email.value.length || !password.value.length){
            showFormError('fill all the inputs')
        } else{
            //submit login details
            loader.style.display = 'block';
            sendData('/login' ,{
                email: email.value,
                password: password.value,
               
            })
        }
    }

})  
