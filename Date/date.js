// function updateTime() {
//     document.getElementById("time").innerHTML = new Date();
// } setInterval(updateTime, 500);



function updateTime() {
    const Dates = new Date()
    document.getElementById("time").innerHTML = Dates.toLocaleString();
    // document.getElementById("time").innerHTML = Dates.toLocaleString('en-US', { timeZone: 'UTC' });
} setInterval(updateTime, 500);



// new Date()
// new Date(date string)
// new Date(year, month)
// new Date(year, month, day)
// new Date(year, month, day, hours)
// new Date(year, month, day, hours, minutes) (2018, 11, 24, 10, 33)
// new Date(year, month, day, hours, minutes, seconds)
// new Date(year, month, day, hours, minutes, seconds, ms)
// new Date(milliseconds)



// var date = new Date();
// date.setDate(20);
// date.setMonth(1); // JavaScript counts months from 0 to 11
// date.setFullYear(1011);
// console.log(date);



// let newDate = new Date("2025-09-14");
// console.log(newDate);



// The toDateString() method converts a date to a more readable format

// The toUTCString() method converts a date to a string using the UTC standard

// The toISOString() method converts a date to a string using the ISO standard

// ISO Date - "2015-03-25"(The International Standard)
// Short Date - "03/25/2015"
// Long Date - "Mar 25 2015" or "25 Mar 2015"

// The ISO format follows a strict standard in JavaScript.
// The other formats are not so well defined and might be browser specific.

// Date Get Methods
// getFullYear() - Get year as a four digit number (yyyy)
// getMonth() - Get month as a number (0-11)
// getDate() - Get day as a number (1-31)
// getDay() - Get weekday as a number (0-6)
// getHours() - Get hour (0-23)
// getMinutes() - Get minute (0-59)
// getSeconds() - Get second (0-59)
// getMilliseconds() - Get millisecond (0-999)
// getTime() - Get time (milliseconds since January 1, 1970)

// setDate() - Set the day as a number (1-31)
// setFullYear() - Set the year (optionally month and day)
// setHours() - Set the hour (0-23)
// setMilliseconds() - Set the milliseconds (0-999)
// setMinutes() - Set the minutes (0-59)
// setMonth() - Set the month (0-11)
// setSeconds() - Set the seconds (0-59)
// setTime() - Set the time (milliseconds since January 1, 1970)