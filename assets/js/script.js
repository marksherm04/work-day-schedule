var today = moment().format('L');
$("#currentDay").html(today);

$(document).ready(function() {
    // click listener
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // save text in local storage
        localStorage.setItem(time, text);
    });

    function timeOfDay () {
        var currentTime = moment().hour();

        // loop
        $(".time-block").each(function () {
            var timeSlot = parseInt($(this).attr("id").split("hour")[1]);

            if (timeSlot < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addCLass("past");
            }
            else if (timeSlot === currentTime) {
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
    
    $("#0800hr .description").val(localStorage.getItem("0800hr"));
    $("#0900hr .description").val(localStorage.getItem("0900hr"));
    $("#1000hr .description").val(localStorage.getItem("1000hr"));
    $("#1100hr .description").val(localStorage.getItem("1100hr"));
    $("#1200hr .description").val(localStorage.getItem("1200hr"));
    $("#1300hr .description").val(localStorage.getItem("1300hr"));
    $("#1400hr .description").val(localStorage.getItem("1400hr"));
    $("#1500hr .description").val(localStorage.getItem("1500hr"));
    $("#1600hr .description").val(localStorage.getItem("1600hr"));
    $("#1700hr .description").val(localStorage.getItem("1700hr"));

    timeOfDay();
});