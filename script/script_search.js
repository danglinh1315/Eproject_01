var pagesData = [
    { id: 'home_1', hashtags: ['HISTORY'], target: 'homepage.html' },
    { id: 'home_1_1', hashtags: ['EARLY MOUTAINEERING'], target: 'homepage.html' },
    { id: 'home_1_2', hashtags: ['THE ENLIGHTEMENT AND GOLDEN AGE OF ALPINISM'], target: 'homepage.html' },
    { id: 'home_1_3', hashtags: ['EXPANSION AROUND THE WORLD'], target: 'homepage.html' },
    { id: 'home_1_4', hashtags: ['THE LAST FRONTIER: THE HIMALAYAS'], target: 'homepage.html' },
    { id: 'home_2', hashtags: ['THE LAST FRONTIER: THE HIMALAYAS'], target: 'homepage.html' },   
    { id: 'home_3', hashtags: ['TYPES'], target: 'homepage.html' },
    { id: 'home_3_1', hashtags: ['ROCK CLIMBING'], target: 'homepage.html' },
    { id: 'home_3_2', hashtags: ['ICE CLIMBING'], target: 'homepage.html' },
    { id: 'home_3_3', hashtags: ['EXPEDITION CLIMBING'], target: 'homepage.html' },
    { id: 'home_3_4', hashtags: ['SCRAMBLING'], target: 'homepage.html' },
    { id: 'home_3_5', hashtags: ['SNOWSHOEING'], target: 'homepage.html' },    
    { id: 'home_4', hashtags: ['RECORDS'], target: 'homepage.html' },
    { id: 'home_5', hashtags: ['HAZARDS'], target: 'homepage.html' },


    { id: 'technican', hashtags: ['TECHNICAN'], target: 'technican.html' },    
    { id: 'technican_1', hashtags: ['TYPES OF CLIMBING'], target: 'technican.html' },
    { id: 'technican_2', hashtags: ['WHAT CLIMBING GEAR DO YOU NEED?'], target: 'technican.html' },
    { id: 'technican_3', hashtags: ['HOW TO LEARN ALPINE CLIMBING'], target: 'technican.html' },
    { id: 'technican_4', hashtags: ['CONSTRUCTING SECURE ANCHORS'], target: 'technican.html' },
    { id: 'technican_5', hashtags: ['HOW TO TIE OFF A BELAY'], target: 'technican.html' },
    { id: 'technican_6', hashtags: ['ROCKFALL AND EDGES'], target: 'technican.html' },
    

    { id: 'latest', hashtags: ['LATEST DEVELOPMENT'], target: 'development.html' },
    { id: 'latest_1', hashtags: ['TECHNOLOGY INTEGRATION'], target: 'development.html' },
    { id: 'latest_2', hashtags: ['EQUIPMENT INNOVATIONS'], target: 'development.html' },
    { id: 'latest_3', hashtags: ['SAFETY MEASURES'], target: 'development.html' },
    { id: 'latest_4', hashtags: ['ENVIROMENTAL AWARENESS'], target: 'development.html' },
    { id: 'latest_5', hashtags: ['COMMUNITY AND SOCIAL IMPACT'], target: 'development.html' },
    { id: 'latest_6', hashtags: ['ADVENTURE TOURISM'], target: 'development.html' },
    { id: 'latest_7', hashtags: ['MEDICAL AND FITNESS RESEARCH'], target: 'development.html' },

    { id: 'gallery', hashtags: ['GALLERY'], target: 'gallery.html' },
    { id: 'club', hashtags: ['CLUB'], target: 'club.html' },
    { id: 'guideline', hashtags: ['GUIDELINES'], target: 'guidelines.html' },
    { id: 'guideline_1', hashtags: ['PREPARING'], target: 'guidelines.html' },
    { id: 'guideline_2', hashtags: ['RESEARCH AND PLANNING'], target: 'guidelines.html' },
    { id: 'guideline_3', hashtags: ['NAVIGATION AND TECHNIQUES'], target: 'guidelines.html' },
    { id: 'guideline_4', hashtags: ['SHELTERING AND HAZARDS'], target: 'guidelines.html' },
    { id: 'guideline_5', hashtags: ['RECORDS AND SUCCESS STORIES'], target: 'guidelines.html' },
    { id: 'guideline_6', hashtags: ['GGEOLOCATION AND SUMMIT'], target: 'guidelines.html' },
    { id: 'guideline_7', hashtags: ['GALLERY OF ADVENTURES'], target: 'guidelines.html' },
    { id: 'guideline_8', hashtags: ['GENERAL GUIDELINES'], target: 'guidelines.html' }
    
        // Thêm dữ liệu cho các trang khác nếu cần
];

function search() {
    var input, filter, i, j, resultItem, resultLink;
    input = document.getElementById('search-box');
    filter = input.value.toUpperCase();
    searchResults = document.getElementById('searchResults');

    // Xóa các kết quả tìm kiếm trước đó nếu input rỗng
    if (filter === "") {
        searchResults.innerHTML = '';
        return;
    }

    // Xóa các kết quả tìm kiếm trước đó
    searchResults.innerHTML = '';

    for (i = 0; i < pagesData.length; i++) {
        var hashtags = pagesData[i].hashtags;
        var target = pagesData[i].target;
        var id = pagesData[i].id;

        var found = false;

        for (j = 0; j < hashtags.length; j++) {
            if (hashtags[j].includes(filter)) {
                found = true;
                break;
            }
        }

        // Nếu tìm thấy từ khóa, thêm vào danh sách kết quả
        if (found) {
            resultItem = document.createElement('li');
            resultLink = document.createElement('a');
            resultLink.href = target + '#' + id; // Thêm #id vào href để chuyển hướng đúng vị trí
            resultspan =document.createElement('span')
            resultspan.textContent="..........Readmore>>"

            // Chỉ cần hiển thị một phần của id (chẳng hạn, từ ký tự thứ 5 trở đi)
            resultLink.textContent = hashtags[j]
            resultLink.appendChild(resultspan);


            resultItem.appendChild(resultLink);
            searchResults.appendChild(resultItem);
        }
    }
}