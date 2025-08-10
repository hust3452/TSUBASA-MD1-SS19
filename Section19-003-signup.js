// tao du lieu email da dki
signup.onclick = function(){
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let check_password = document.getElementById('check_password').value;
let signup = document.getElementById('signup');
let account_list = [];
account_list = localStorage.getItem('account_list') ? JSON.parse(localStorage.getItem('account_list')) : [];

let email_error = document.getElementById("email_error");
let password_error = document.getElementById("password_error");

if(email===""){
    email_error.innerText = "Vui long kiem tra lai email vua nhap";
}else if(password===""){
    password_error.innerText = "Vui long kiem tra lai email vua nhap";
}
else if(check_password!=password){
    alert("vui long nhap lai mat khau!!!");
}
else{
account_list.push({
    account_email : email,
    account_password : password,
})
}
localStorage.setItem('account_list', JSON.stringify(account_list));
}

let account_list = localStorage.getItem('account_list') ? JSON.parse(localStorage.getItem('account_list')) : [];
console.log(account_list);