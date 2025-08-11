let txt = document.createTextNode('\u00D7');

let span = document.createElement('span');


 let input_list = [];
    input_list = localStorage.getItem('input_list') ? JSON.parse(localStorage.getItem('input_list')) : [];
    console.log(input_list);

    input_list.forEach(input_name => {
        
    
    let task_list = document.getElementById("task_list");

    var task_content = document.createElement('li');
    var textNote = document.createTextNode(input_name.name);
    task_content.appendChild(textNote);

    task_list.appendChild(task_content);

    var del_button = document.createElement('span');
    del_button.textContent='X';
    task_content.appendChild(del_button);
    });
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
    let id = input_list.length;

    // tao ca phan tu khi an nut them vao
    var task_content = document.createElement('li');
    var textNote = document.createTextNode(input_value);
    task_content.appendChild(textNote);

    task_list.appendChild(task_content);



    var del_button = document.createElement('span');
    del_button.textContent='X';
    del_button.className = 'del_button';
    task_content.appendChild(del_button);

    var del_button = document.getElementsByClassName('del_button');

    input_list.push({
        no: id,
        name: input_value
    })

    let end_note = document.getElementById('end_note');
    let clear_all = document.getElementById('clear_all');



    // xoa phan tu 




    end_note.textContent = `you have ${input_list.length} pending tasks`;
    clear_all.textContent = "Clear All";
    clear_all.style.display = 'block';
    localStorage.setItem('input_list', JSON.stringify(input_list));
}
}

