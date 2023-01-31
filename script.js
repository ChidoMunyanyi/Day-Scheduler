var currentDay = moment().format('MMMM Do YYYY, h:mm a')
$("#currentDay").text(currentDay)
// Add Click Event to save button that grabs value of text area and saves to local storage //
$(".saveBtn").on("click", function() {
 var blockKey = $(this).parent().attr("id")
 var textValue = $(this).siblings("textarea").val()
    localStorage.setItem(blockKey, textValue)
})

// Get Key and Text value from local storage and render to page on page load//
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14.description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

// Add loop to change hour colors according to current time //
$(".time-block").each(function(){
    var hour = moment().hours()
    var difTime = $(this).attr("id")
    if(difTime < hour) {
        $(this).addClass("past")
    }
    else if(difTime == hour) {
        $(this).addClass("present")
    }
    else if(difTime > hour) {
        $(this).addClass("future")
    }
})