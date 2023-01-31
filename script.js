var currentDay = moment().format('MMMM Do YYYY')
$("#currentDay").text(currentDay)
// Add Click Event to save button that grabs value of text area and saves to local storage //
$(".saveBtn").on("click", function() {
 var blockKey = $(this).parent().attr("id")
 var textValue = $(this).siblings("textarea").val()
    localStorage.setItem(blockKey, textValue)
})

// Get Key and Text value from local storage and render to page on page load//