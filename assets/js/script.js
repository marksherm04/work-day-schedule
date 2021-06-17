// Display current date
var todayDateTime = moment().format('LLLL');
jQuery("#currentDay").html(todayDateTime);




function workSchedule(element) {
    // compare element time to current time

    // get current hour (military time)
    var currentTime = moment().hour();

    for (i = 9; i < 18; i++) {

    var hourlyBlock = $("#" + i + "-hour" );
    console.log(currentTime, hourlyBlock);
    
    // TODO:
        // compare hourly block to currentTime
        // set class based on results
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

// local storage set and get 
//local storage set function



document.get("saveBtn").addEventListener("click", saveTask)
 
function saveTask() {
    
  
};

    


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


// LOOP THROUGH ALL ELEMENTS WHERE CLASS = "row time-block"

// // Then pass that element to function:
function loopTimeElements() {
    for (i = 9; i < 17; i++) {
        // TODO: get div id for all elements with class = "row time-block"
    }
}
    workSchedule();
    