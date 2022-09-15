function getQueryVariable(variable) {
    var query = decodeURI(window.location.search.substring(1));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

function setDate() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = paddingZero(date.getHours());
    var minutes = paddingZero(date.getMinutes());
    var seconds = paddingZero(date.getSeconds());

    var dateDiv = document.getElementById('date');
    dateDiv.innerText = month + '月' + day + '日';

    var timeDiv = document.getElementById('time');
    timeDiv.innerText = hours + ':' + minutes + ':' + seconds;
}

function paddingZero(int) {
    return int < 10 ? '0' + int : int;
}