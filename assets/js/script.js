// Display current date
var todayDateTime = moment().format('LLLL');
$("#currentDay").html(todayDateTime);

// jQuery function shorthand method
$(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // gets parent of each element attribute for "id"
        var blockTime = $(this).parent().attr("id");
        // searching through siblings of the DOM element to create new jQuery object from matching values 
        var userText = $(this).siblings(".description").val().trim();
        // Save user input of time and text to local storage
        localStorage.setItem(blockTime, userText);
    })


function workSchedule(element) {
    // compare element time to current time

    // get current hour (military time)
    var currentTime = moment().hour();

    // Loops through all elements that involve hour id start at hour 9 and anything less than 18 example (1700 and below)
    for (i = 9; i < 18; i++) {

    // #(id) + 9 + current hour will run the if else if and else statement below
    var hourlyBlock = $("#" + i + "-hour" );
    console.log(currentTime, hourlyBlock);
    
        // adds and removes colors based on current time
        // past time === gray color
        if (i < currentTime) {
            hourlyBlock.addClass("past");
        }
        // equals current time for red color
        else if (i === currentTime) {
            hourlyBlock.addClass("present");
        }
        // otherwise future time and green until 1700
        else {
            hourlyBlock.addClass("future");
        }
    }      
}

// hourly data saved to local storage to "getItem" based on the hour, gets value of -hour and description

$("#8-hour .description").val(localStorage.getItem("8-hour"));
$("#9-hour .description").val(localStorage.getItem("9-hour"));
$("#10-hour .description").val(localStorage.getItem("10-hour"));
$("#11-hour .description").val(localStorage.getItem("11-hour"));
$("#12-hour .description").val(localStorage.getItem("12-hour"));
$("#13-hour .description").val(localStorage.getItem("13-hour"));
$("#14-hour .description").val(localStorage.getItem("14-hour"));
$("#15-hour .description").val(localStorage.getItem("15-hour"));
$("#16-hour .description").val(localStorage.getItem("16-hour"));
$("#17-hour .description").val(localStorage.getItem("17-hour"));

// calls workSchedule function to run when page is open and app starts
workSchedule();
 
});