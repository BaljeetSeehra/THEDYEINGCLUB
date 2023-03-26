const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user == null){
        location.replace('/login');
    }else if(user.seller){
        location.replace('/contact');
    }
}
let submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', () => {
    let username = document.querySelector('#name').value;
    let phone = document.querySelector('#tel').value;
    let message = document.querySelector('#message').value;


    if(!username.length|| number.length < 10 || !Number(number) || !message.length ){
       showFormError('some information(s) is/are incorrect');
     }else{
        //send data
        loader.style.display = 'block';
        sendData('/contact', {
            name: username,
            tel: phone,
            mesaage: message,
            email: JSON.parse(sessionStorage.user).email

        })
    }
}) 