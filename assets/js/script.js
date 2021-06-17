// Display current date
var todayDateTime = moment().format('LLLL');
jQuery("#currentDay").html(todayDateTime);




function workSchedule(element) {
    // compare element time to current time

    // get current hour (military time)
    var currentTime = moment().hour();

    // Loops through all elements that involve hour id
    for (i = 9; i < 18; i++) {

    // #(id) + 9 + current hour will run the if else if and else statement below
    var hourlyBlock = $("#" + i + "-hour" );
    console.log(currentTime, hourlyBlock);
    
        // adds and removes colors based on current time
        if (i < currentTime) {
            hourlyBlock.addClass("past");
        }
        else if (i === currentTime) {
            hourlyBlock.addClass("present");
        }
        else {
            hourlyBlock.addClass("future");
        }
    }      
};


//local storage set function
var saveTasks = function() {
    localStorage.setItem(text, time);
}

$(".description").on("click", "saveBtn", function() {
    var text = $(this).text().trim().val();
    var time = $(this).hour().val();
});

    


// hourly data saved to local storage to "get" 

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

workSchedule();
    