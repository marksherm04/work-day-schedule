// Display current date
const todayDateTime = moment().format('LLLL');
$("#currentDay").html(todayDateTime);

//function for colors to change with time block

function timeBlock(element) {
    // compare element time to current time

    // get current hour (military time)
   let currentTime = moment().hour();

   // get hour of element (get id value)
   // example: diveid = 11-hour
   // get number before '-hour'

   // TODO:

   let hourlyBlock = (time-block id);
    console.log(currentTime, hourlyBlock);


    // compae hourly block to currenTime
    // set class based on results
    if (hourlyBlock < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
    else if (hourlyBlock === currentTime) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }
    else if (hourlyBlock > currentTime) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
};



// local storage set and get 

//local storage set function
$(document).ready(function() {
    $("#saveBtn").on("click", function() {
        let text = $(this).siblings(".description").val();
        let time = $(this).siblings("id").val();

        localStorage.setItem(time, text);
    })
});

// get from local storage
$("#8AM .description").val(localStorage.getItem("#8AM"));
$("#9AM .description").val(localStorage.getItem("#9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11-hour .description").val(localStorage.getItem("11-hour"));
$("#12PM .description").val(localStorage.getItem("#12PM"));
$("#1PM .description").val(localStorage.getItem("#1PM"));
$("#2PM .description").val(localStorage.getItem("#2PM"));
$("#3PM .description").val(localStorage.getItem("#3PM"));
$("#4PM .description").val(localStorage.getItem("#4PM"));
$("#5PM .description").val(localStorage.getItem("#5PM"));

// timeBlock();

// LOOP THROUGH ALL ELEMENTS WHERE CLASS
// = "row time-block"

// Then pass that elelment to function:
function loopTimeElements() {
    for (i = 8; i <  18; i ++) {
        // TODO: get div id for all elements with class = "row time-block"
    }
};