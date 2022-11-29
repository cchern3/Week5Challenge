//Display current date and time using dayjs
$("#currentDay").text(dayjs().format('dddd, MMMM DD, YYYY'));

//created timeblocks relative to the current hour
function timeblock() {
    var hour = dayjs().hour();
  
    $(".time-block").each(function() {
      var currHour = parseInt($(this).attr("id"));

      if (currHour > hour) {
          $(this).addClass("future");
      } else if (currHour === hour) {
          $(this).addClass("present");
      } else {
          $(this).addClass("past");
      }
  })
};

timeblock();

//created a save button to store the inputted text
var savebutton = $(".saveBtn")
savebutton.on("click", function() {

  var thetime = $(this).siblings(".hour").text();
  var thetext = $(this).siblings(".description").val()
  localStorage.setItem(thetime, thetext);
});

//the saved text will be established after the web page refreshes
function usePlanner() {

  $(".hour").each(function() {
      var thishour = $(this).text();
      var thistext = localStorage.getItem(thishour);

      if(thistext !== null) {
          $(this).siblings(".description").val(thistext);
      }
  });
}

usePlanner();
