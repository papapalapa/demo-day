function highlight() {
    keyword = document.getElementById("keyword").value;
    
    searchTextDOM = document.getElementById("searchText");
    searchText = document.getElementById("searchText").textContent;

    count = document.getElementById("count");

    replacer = "<span class=\"yellow lighten-1\">" + keyword +"</span>"
    
    if (keyword != "") {
        var regex = new RegExp(keyword,"g");

        match_result = searchText.match(regex);
        replace_result = searchText.replace(regex,replacer);

        if (match_result != null) {
            searchTextDOM.innerHTML = replace_result;
            count.innerHTML = match_result.length;
        } else {
            searchTextDOM.innerHTML = searchText;
            count.innerHTML = 0
        }
    } else {
        searchTextDOM.innerHTML = searchText;
        count.innerHTML = 0
    }
}