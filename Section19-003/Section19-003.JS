let login = document.getElementById('login');
login.onclick = function(){
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

let account_list = localStorage.getItem('account_list') ? JSON.parse(localStorage.getItem('account_list')) : [];
console.log(account_list);

for(let i=0; i<account_list.length;i++){
console.log(account_list[i].account_email);
console.log(email);
let a;
if(email != account_list[i].account_email){
    alert('email nhap vao khong dung!!!! vui long nhap lai');
    break;
}else if(email === account_list[i].account_email){
    a = account_list[i].account_password;
    if(password != a){
    alert('mat khau nhap vao khong dung!!!! vui long nhap lai');
    break;    
    }else{
    alert("ban da dang nhap thanh cong");
    window.location.replace("https://example.com/dashboard");
    break;

    }
}
}
}

