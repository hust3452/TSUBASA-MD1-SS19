// C - R - U - D

let contacts = [
    {
        id: 1,
        name: "Peter", // === Chị phiến
        phone: "097321831",
    }, // 0
    {
        id: 2,
        name: "Hổng Tỷ",
        phone: "092321431", // Chị phiến
    },
    {
        id: 3,
        name: "Chị Phiến",
        phone: "082225431", //
    }, // index: 2
];

let menu = `
----------- CONTACTS MANAGER -----------
1. Thêm mới liên hệ vào danh bạ
2. Hiển thị toàn bộ liên hệ
3. Cập nhật liên hệ
4. Xoá liên hệ
5. Thoát khỏi chương trình
Mời bạn nhập (1 - 5) để điều khiển chương trình:
`;


let loop = true;
while (loop === true) {
    let userInput = +prompt(menu);
    switch (userInput) {
        case 1:
            let newName = prompt("Mời bạn nhập vào tên liên hệ mới");
            let newPhone = prompt("Mời bạn nhập vào số điện thoại cần lưu");

            let newContact = {
                id: contacts[contacts.length - 1].id + 1,
                name: newName,
                phone: newPhone,
            };
            contacts.push(newContact);

            for (let i = 0; i < contacts.length; i = i + 1) {
                console.log(`${i + 1}. ${contacts[i].name}: ${contacts[i].phone}`);
            }
            console.log("----------------");
            break;
            
        case 2:
            for (let i = 0; i < contacts.length; i = i + 1) {
                console.log(`${i + 1}. ${contacts[i].name}: ${contacts[i].phone}`);
            }
            console.log("----------------");
            break;

        case 3:
            let contactName = prompt(
                "Mời bạn nhập vào tên của liên hệ muốn chỉnh sửa"
            );
            findByname(contactName);
            if (updateIndex === -1) {
                console.log("Không có contact nào tồn tại với từ khoá trên");
            } else {
                let updatePhone = prompt("Mời bạn nhập vào số điện thoại mới!");
                contacts[updateIndex].phone = updatePhone;
                for (let i = 0; i < contacts.length; i = i + 1) {
                    console.log(`${i + 1}. ${contacts[i].name}: ${contacts[i].phone}`);
                }
                console.log("----------------");
            }
            break;

        case 4:
            let deleteName = prompt("Mời bạn nhập vào tên của liên hệ muốn xoá");
            findByname(deleteName);
            if (deleteIndex === -1) {
                console.log("Không tìm thấy contact bạn muốn xoá!!!");
            } else {
                contacts.splice(deleteIndex, 1);
                for (let i = 0; i < contacts.length; i = i + 1) {
                    console.log(`${i + 1}. ${contacts[i].name}: ${contacts[i].phone}`);
                }
                console.log("----------------");
            }
            break;

        case 5:
            console.log("Cảm ơn bạn đã sử dụng ứng dụng");
            loop = false;
            break;
        default:
            console.log("Giá trị bạn nhập vào không hợp lệ");
            break;
    }
}

// Phân tích:
// Tạo ra đại lượng độc nhất
// C1: Math.random() ---> [0 --- 0.999999999999]

// C2: 1 2 3 4 5 6 7 8 9 10 11 12 13

function findByname(name){
                let updateIndex = -1;
            for (let i = 0; i < contacts.length; i = i + 1) {
                if (contacts[i].name === name) {
                    updateIndex = i;
                }
}
}