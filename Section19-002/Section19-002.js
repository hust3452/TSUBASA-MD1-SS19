function check() {
    let content = document.getElementById('content').value;
    let date = document.getElementById('date').value;
    let status = document.getElementById('status').value;
    let username = document.getElementById('username').value;


    let input_list = localStorage.getItem('input_list') ? JSON.parse(localStorage.getItem('input_list')) : [];
    input_list.push({
        input_content: content,
        input_date: date,
        input_status: status,
        input_username: username
    });
    localStorage.setItem('input_list', JSON.stringify(input_list));
}

function renderlist() {
    let input_list_data = JSON.parse(localStorage.getItem('input_list'));
    let table_content = `
        <tr>
        <td>#</td>
        <td>Content</td>
        <td>Due date</td>
        <td>Status</td>
        <td>Assigned to</td>
        <td>Action</td>
        </tr>`;
    for (let i = 0; i < input_list_data.length; i++) {
        let id = i + 1;
        table_content +=
            `<tr>
        <td>${i + 1}</td>
        <td>${input_list_data[i].input_content}</td>
        <td>${input_list_data[i].input_date}</td>
        <td>${input_list_data[i].input_status}</td>
        <td>${input_list_data[i].input_username}</td>
        <td>
        <button id="fix" onclick="fix(${id})">sửa</button>        
        <button id="del" onclick="del(${id})">xóa</button>        
        </td>
        </tr>`;
    };

    document.getElementById('table').innerHTML = table_content;
}

function del(del_id) {
    let input_list = localStorage.getItem('input_list') ? JSON.parse(localStorage.getItem('input_list')) : [];
    input_list.splice(del_id - 1, 1);
    localStorage.setItem('input_list', JSON.stringify(input_list));

    let input_list_data = JSON.parse(localStorage.getItem('input_list'));
    let table_content = `
        <tr>
        <td>#</td>
        <td>Content</td>
        <td>Due date</td>
        <td>Status</td>
        <td>Assigned to</td>
        <td>Action</td>
        </tr>`;
    for (let i = 0; i < input_list_data.length; i++) {
        let id = i + 1;
        table_content +=
            `<tr>
        <td>${i + 1}</td>
        <td>${input_list_data[i].input_content}</td>
        <td>${input_list_data[i].input_date}</td>
        <td>${input_list_data[i].input_status}</td>
        <td>${input_list_data[i].input_username}</td>
        <td>
        <button id="fix" onclick="fix(${id})">sửa</button>        
        <button id="del" onclick="del(${id})">xóa</button>        
        </td>
        </tr>`;
    };

    document.getElementById('table').innerHTML = table_content;
}


function fix(fix_id){
    let input_list = localStorage.getItem('input_list') ? JSON.parse(localStorage.getItem('input_list')) : [];
    let input_list_data = JSON.parse(localStorage.getItem('input_list'));

    content.value = input_list_data[fix_id-1].input_content ;
    date.value = input_list_data[fix_id-1].input_date ;
    status.value = input_list_data[fix_id-1].input_status;
    username.value = input_list_data[fix_id-1].input_username;

    let fix_ok = document.getElementById('fix_ok');
    fix_ok.onclick = function() {
    let input_list = localStorage.getItem('input_list') ? JSON.parse(localStorage.getItem('input_list')) : [];
        let fix_input = {
        input_content : document.getElementById('content').value,
        input_date : document.getElementById('date').value,
        input_status : document.getElementById('status').value,
        input_username : document.getElementById('username').value
    }

    input_list[fix_id-1] = fix_input;
    input_list.splice(fix_id - 1, 1 , input_list[fix_id-1]);
    localStorage.setItem('input_list', JSON.stringify(input_list));

    let input_list_data = JSON.parse(localStorage.getItem('input_list'));
    console.log(input_list_data);
    let table_content = `
        <tr>
        <td>#</td>
        <td>Content</td>
        <td>Due date</td>
        <td>Status</td>
        <td>Assigned to</td>
        <td>Action</td>
        </tr>`;
    for (let i = 0; i < input_list_data.length; i++) {
        let id = i + 1;
        table_content +=
            `<tr>
        <td>${i + 1}</td>
        <td>${input_list_data[i].input_content}</td>
        <td>${input_list_data[i].input_date}</td>
        <td>${input_list_data[i].input_status}</td>
        <td>${input_list_data[i].input_username}</td>
        <td>
        <button id="fix" onclick="fix(${id})">sửa</button>        
        <button id="del" onclick="del(${id})">xóa</button>        
        </td>
        </tr>`;
    };
    document.getElementById('table').innerHTML = table_content;

    }
    }

