// Display current date
var todayDateTime = moment().format('LLLL');
jQuery("#currentDay").html(todayDateTime);




function workSchedule(element) {
    // compare element time to current time

    // get current hour (military time)
    var currentTime = moment().hour();

    // get hour of element (get id value)
    var hourlyBlock = jQuery(".time-block");
    console.log(currentTime, hourlyBlock);
    // example: divid = 11-hour
    // get number before '-hour'

    // TODO:
    for (var i = 0; i < hourlyBlock.length; i++) {
        let timeSlot = hourlyBlock[i];
        // compare hourly block to currentTime
        // set class based on results
        if (parseInt(timeSlot.id.split(" ")[0]) < currentTime) {
            jQuery(this).addClass("past");
        }
        else if (parseInt(timeSlot.id.split(" ")[0]) === currentTime) {
            jQuery(this).removeClass("past");
            jQuery(this).addClass("present");
        }
        else {
            jQuery(this).removeClass("past");
            jQuery(this).removeClass("present");
            jQuery(this).addClass("future");
        }
    }
};

workSchedule();

// local storage set and get 
//local storage set function
jQuery(document).ready(function () {
    jQuery("#saveBtn").on("click", function () {
        var text = jQuery(this).siblings(".description").val();
        var time = jQuery(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
});

// get from local storage

jQuery("#8-hour .description").val(localStorage.getItem("8-hour"));
jQuery("#9-hour .description").val(localStorage.getItem("9-hour"));
jQuery("#10-hour .description").val(localStorage.getItem("10-hour"));
jQuery("#11-hour .description").val(localStorage.getItem("11-hour"));
jQuery("#12-hour .description").val(localStorage.getItem("12-hour"));
jQuery("#13-hour .description").val(localStorage.getItem("13-hour"));
jQuery("#14-hour .description").val(localStorage.getItem("14-hour"));
jQuery("#15-hour .description").val(localStorage.getItem("15-hour"));
jQuery("#16-hour .description").val(localStorage.getItem("16-hour"));
jQuery("#17-hour .description").val(localStorage.getItem("17-hour"));

// timeBlock();

// LOOP THROUGH ALL ELEMENTS WHERE CLASS = "row time-block"


// // Then pass that element to function:
// function loopTimeElements() {
//     for (i = 9; i < 17; i++) {
//         // TODO: get div id for all elements with class = "row time-block"
//     }
// };