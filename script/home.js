var idCounter = 1;

// Xác thực đăng nhập
function authenticate(username, password) {
    return username === 'webmaster' && password === '@123';
}






// Hiển thị hoặc ẩn button Edit và Clear
function showEditButtons(class_name) {
    if (isLoggedIn()) {
        var contents = document.getElementsByClassName(class_name);
        for (var i = 0; i < contents.length; i++) {
            var contentId = class_name + idCounter++;

            // Create unique edit and clear buttons for each content element
            var editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.id = 'edit_clear';
            editButton.onclick = function () {
                editContent(this.parentNode.id);
            };

            var clearButton = document.createElement('button');
            clearButton.textContent = 'Clear';
            clearButton.id = 'edit_clear';
            clearButton.onclick = function () {
                clearContent(this.parentNode.id);
            };


            // Set buttons to block-level elements
            editButton.style.display = 'inline-block';
            clearButton.style.display = 'inline-block';

            // Add a line break after the buttons
            var lineBreak = document.createElement('br');
            contents[i].appendChild(lineBreak);

            // id for contenst

            contents[i].id = contentId;



            // Append buttons to the content element
            contents[i].appendChild(editButton);
            contents[i].appendChild(clearButton);
        }
             
        document.getElementById('contact-message').style.display = 'block'       

    }



}


// Chỉnh sửa nội dung
// Chỉnh sửa nội dung
function editContent(contentId) {
    var content = document.getElementById(contentId);
    var newTitle = prompt('Enter new title');
    var newContent = prompt('Enter new content:');
    var newImagePath = prompt('Enter new image path:');

    if (newContent !== null && newTitle !== null) {
        // Chỉnh sửa hoặc thêm nếu chưa tồn tại
        var titleElement = content.querySelector('h1');
        if (titleElement) {
            titleElement.textContent = newTitle;
        } else {
            titleElement = document.createElement('h1');
            titleElement.textContent = newTitle;
            content.appendChild(titleElement);
        }

        // Chỉnh sửa hoặc thêm nếu chưa tồn tại
        var imgElement = content.querySelector('img');
        if (imgElement) {
            imgElement.src = newImagePath;
            imgElement.alt = newTitle;
        } else {
            imgElement = document.createElement('img');
            imgElement.src = newImagePath;
            imgElement.alt = newTitle;
            content.appendChild(imgElement);
        }

        // Chỉnh sửa hoặc thêm nếu chưa tồn tại
        var contentElement = content.querySelector('h3');
        if (contentElement) {
            contentElement.textContent = newContent;
        } else {
            contentElement = document.createElement('h3');
            contentElement.textContent = newContent;
            content.appendChild(contentElement);
        }
    }

}


// Xóa nội dung
function clearContent(contentId) {
    var content = document.getElementById(contentId);
    content.innerHTML = '';
}

// Hiển thị form đăng nhập và button Edit và Clear khi đăng nhập

function showLogin() {
    var loginForm = document.getElementById('login-form');
    loginForm.style.display = 'block';


    //showEditButtons('content');
}

// Xử lý đăng nhập

function attemptLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var auth = authenticate(username, password);
    var storedpassword = localStorage.getItem(username)



    if (auth) {

        sessionStorage.setItem('isLoggedIn', 'true');
        // Ẩn form đăng nhập sau khi đăng nhập thành công
        document.getElementById('login-form').style.display = 'none';




        // Hiển thị button Edit và Clear

        showEditButtons('content')

    } else if(password===storedpassword){
        alert('You sign in successfully!');
    }
    else{
        alert('Authentication failed.');
    }
}

// Kiểm tra trạng thái đăng nhập
function isLoggedIn() {
    return sessionStorage.getItem('isLoggedIn') === 'true';
}
// Kiểm tra trạng thái đăng nhập và hiển thị button Edit và Clear

showEditButtons('content')