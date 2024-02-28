let date = new Date()
let month = date.getMonth() + 1;

const mo = [
    'January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
 ];

 let month_text = document.getElementById('month')
 month_text.innerHTML = mo[month-1];

let day = date.getDay()

const weekday = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'
];

let day_text = document.getElementById('day');

day_text.innerHTML = weekday[day];

 document.getElementById('date').innerHTML = date.getDate();

 document.getElementById('year').innerHTML = date.getFullYear();