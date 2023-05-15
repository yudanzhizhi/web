let leap_year = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let common_year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let now = document.getElementById("days");
let pre = document.getElementById("pre");
let next = document.getElementById("next");
let title_year = document.getElementById("title_year");
let title_month = document.getElementById("title_month");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

function which_weekday(month, year) {
    let tmpdate = new Date(year, month, 1);
    return tmpdate.getDay();
}

function days_of_a_month(month, year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return leap_year[month];
    }
    else {
        return common_year[month];
    }
}

function refresh() {
    let space = " ";
    let days_of_month = days_of_a_month(month, year);
    let first_day = which_weekday(month, year);
    let day_condition;
    for(let i = 0; i < first_day; i++) {
        space += "<li " + "class='space'" + ">" + "&nbsp" + "</li>";
    }
    for(let i = 1; i <= days_of_month; i++) {
        if((i < day && month == date.getMonth() && year == date.getFullYear()) || (month < date.getMonth() && year == date.getFullYear()) || year < date.getFullYear()) {
            day_condition = "class='lightgrey'"; /*今年今月小于今天 || 小于今年 || 今年小于今月*/
        }
        else if(i == day && month == date.getMonth() && year == date.getFullYear()) {
            day_condition = "class='blue'";
        }
        else {
            day_condition = "class='darkgrey'";
        }
        space += "<li " + day_condition + ">" + "<span class='center'>" + i + "</span>" + "</li>";
    now.innerHTML = space;
    }
    title_month.innerHTML = month_name[month];
    title_year.innerHTML = year;
}

refresh();

/* 交互动作 */
pre.onclick = function(e) {
    e.preventDefault();
    month--;
    if(month < 0) {
        year--;
        month = 11;
    }
    refresh();
}
next.onclick = function(e) {
    e.preventDefault();
    month++;
    if(month > 11) {
        year++;
        month = 0;
    }
    refresh();
}