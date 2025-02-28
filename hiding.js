let tblBtn = document.getElementsByClassName("tblBtn");
tblBtn[0].onclick = function () {
    let tbl = document.getElementsByClassName('work-experience-table')[0];
    if (tbl.style.display == "") {
        tbl.style.display = "block";
    // tblBtn.style.color = #f0c500;
    }
    else {
        tbl.style.display = "";
    // tblBtn.style.color = white;
    }
};
tblBtn[1].onclick = function () {
    let tbl = document.getElementsByClassName('work-experience-table')[0];
    if (tbl.style.display == "") {
        tbl.style.display = "block";
    // tblBtn.style.color = #f0c500;
    }
    else {
        tbl.style.display = "";
    // tblBtn.style.color = white;
    }
};

let mapBtn = document.getElementsByClassName("mapBtn");
mapBtn[0].onclick = function () {
    let iframe = document.getElementsByTagName('iframe')[0];
    if (iframe.style.display == "") {
        iframe.style.display = "block";
    // tblBtn2.style.color = #b489ce;
    }
    else {
        iframe.style.display = "";
    // tblBtn2.style.color = white;
    }
};
mapBtn[1].onclick = function () {
    let iframe = document.getElementsByTagName('iframe')[0];
    if (iframe.style.display == "") {
        iframe.style.display = "block";
    // tblBtn2.style.color = #b489ce;
    }
    else {
        iframe.style.display = "";
    // tblBtn2.style.color = white;
    }
};