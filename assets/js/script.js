// Display current date
const todayDateTime = moment().format('LLLL');
$("#currentDay").html(todayDateTime);

//function for colors to change with time block

function timeBlock() {
   let currentTime = moment().hour();
   let hourlyBlock = " ";

    // if 
        // .addClass
        // .removeClass
        // .removeClass
    
    // else if 
        // .addClass
        // .removeClass
        // .removeClass
    
    // else 
        // .addClass
        // .removeClass
        // .removeClass

}



// local storage set and get 

//local storage set function
$(document).ready(function() {
    $(".saveBtn").click(function() {
        let text = (".description");
        let time = ("id");

        localStorage.setItem(time, text);
    })
});

// get from local storage
$("8AM .description").val(localStorage.getItem("#8AM"));
$("9AM .description").val(localStorage.getItem("#9AM"));
$("10AM .description").val(localStorage.getItem("10AM"));
$("11AM .description").val(localStorage.getItem("#11AM"));
$("12PM .description").val(localStorage.getItem("#12PM"));
$("1PM .description").val(localStorage.getItem("#1PM"));
$("2PM .description").val(localStorage.getItem("#2PM"));
$("3PM .description").val(localStorage.getItem("#3PM"));
$("4PM .description").val(localStorage.getItem("#4PM"));
$("5PM .description").val(localStorage.getItem("#5PM"));

timeBlock();