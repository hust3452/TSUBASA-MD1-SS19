let input_list = [];
    input_list = localStorage.getItem('input_list') ? JSON.parse(localStorage.getItem('input_list')) : [];


    input_list.forEach(input_name => {    
    let task_list = document.getElementById("task_list");
    var task_content = document.createElement('li');
    task_content.className = 'list';
    var textNote = document.createTextNode(input_name.name);
    task_content.appendChild(textNote);
    task_list.appendChild(task_content);

    });
    // tao nut delete và xóa
    for(let i=0 ; i < input_list.length ; i++) {
    let myNodelist = document.getElementsByTagName('LI');
    var del_button = document.createElement('span');
    del_button.textContent='X';
    del_button.className = 'del_button';
    myNodelist[i+1].appendChild(del_button);
    }

    let del = document.getElementsByClassName('del_button');
    for(let i=0;i<input_list.length ; i++){
    del[i].onclick = function(){
    input_list.splice(i,1);
    localStorage.setItem('input_list', JSON.stringify(input_list));
    return;
    }
    }

    end_note.textContent = `you have ${input_list.length} pending tasks`;
    clear_all.textContent = "Clear All";
    clear_all.style.display = 'block';





    add_button.onclick = function () {
    let input_list = [];
    input_list = localStorage.getItem('input_list') ? JSON.parse(localStorage.getItem('input_list')) : [];
    let input_value = document.getElementById('input').value;

    if(input_value===''){
        alert("vui long nhap thong tin!!!");
    }
    else{
    let add_button = document.getElementById('add_button');
    let task_list = document.getElementById("task_list");

    // tao ca phan tu khi an nut them vao
    var task_content = document.createElement('li');
    var textNote = document.createTextNode(input_value);
    task_content.appendChild(textNote);
    task_list.appendChild(task_content);


    input_list.push({
        name: input_value
    })

    for(let i=0 ; i < input_list.length ; i++) {
    let myNodelist = document.getElementsByTagName('LI');
    var del_button = document.createElement('span');
    del_button.textContent='X';
    del_button.className = 'del_button';
    myNodelist[i+1].appendChild(del_button);
    }

    
    for(let i=0 ; i < input_list.length ; i++) {
    let myNodelist = document.getElementsByTagName('LI');
    var del_button = document.createElement('span');
    del_button.textContent='X';
    del_button.className = 'del_button';
    myNodelist[i+1].appendChild(del_button);

    }



    //tạo nút xóa tổng Clear All
    let end_note = document.getElementById('end_note');
    let clear_all = document.getElementById('clear_all');

    end_note.textContent = `you have ${input_list.length} pending tasks`;
    clear_all.textContent = "Clear All";
    clear_all.style.display = 'block';

    localStorage.setItem('input_list', JSON.stringify(input_list));
}
}
