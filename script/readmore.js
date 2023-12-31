function toggleReadMore(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
    var content = event.target.previousElementSibling;
    content.classList.toggle('truncate');
    var readMore = event.target;

    if (content.classList.contains('truncate')) {
        readMore.textContent = 'Read more';
    } else {
        readMore.textContent = 'Read less';
    }
}

function createReadMoreLink(content) {
    var container = content.parentElement;
    var readMoreLink = container.querySelector('a');
   
    readMoreLink.classList.add('read-more');
    
    readMoreLink.onclick = toggleReadMore;

   
}

function checkAndToggleReadMore() {
    var truncateDivs = document.querySelectorAll('.content');

    truncateDivs.forEach(function (div) {
        var content = div.querySelector('p');
        //var readMore = div.querySelector('.read-more');

        //content.classList.remove('truncate');

        // Lấy chiều cao của một dòng
        var lineHeight = 20;

        // Lấy chiều cao thực tế của phần tử
        var realHeight = content.clientHeight;

        // Tính số dòng dựa trên chiều cao thực tế và chiều cao của một dòng
        var numLines = Math.round(realHeight / lineHeight);

        // Nếu số dòng lớn hơn 2, hiển thị "Read more"
        if (numLines > 2) {
            
            createReadMoreLink(content);
            //readMore.style.display = 'block';
            content.classList.add('truncate');
        } 
    });
}

// Gọi hàm khi trang được tải
window.addEventListener('load', function () {
    checkAndToggleReadMore();
});