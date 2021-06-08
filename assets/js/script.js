// Display current date
var today = moment().format('LLLL');
$("#currentDay").html(today);

$(document).ready(function() {
    // click listener
    $(".saveBtn").on("click", function() {
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".task").val();
        // save tasks to local storage
        localStorage.setItem(time, text);
    });

    function workSchedule () {
        var currentTime = moment().hour();


        $(".hour-slot").each(function () {
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);

            if (hourBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (hourBlock === currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    };

    // local storage 
    $("#hour08 .task").val(localStorage.getItem("hour08"));
    $("#hour09 .task").val(localStorage.getItem("hour09"));
    $("#hour10 .task").val(localStorage.getItem("hour10"));
    $("#hour11 .task").val(localStorage.getItem("hour11"));
    $("#hour12 .task").val(localStorage.getItem("hour12"));
    $("#hour13 .task").val(localStorage.getItem("hour13"));
    $("#hour14 .task").val(localStorage.getItem("hour14"));
    $("#hour15 .task").val(localStorage.getItem("hour15"));
    $("#hour16 .task").val(localStorage.getItem("hour16"));
    $("#hour17 .task").val(localStorage.getItem("hour17"));

    workSchedule();
});