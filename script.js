// The app should:

// Display the current day at the top of the calender when a user opens the planner.
var currentDay = $('#currentDay');
currentDay.text(dayjs().format('DD MMM YYYY'));
var times = [9,10,11,12,13,14,15,16,17];
var timeBlock = $(".container")
timeBlock.addClass("time-block")
// Present timeblocks for standard business hours when the user scrolls down.
for(i=0; i<times.length; i++) {
var row = $('<div>').addClass('row g-0');
var timeDiv = $('<div>').addClass('col-lg-1 hour');
var timeSlot = $('<label>').text(times[i] + ":00");
timeDiv.append(timeSlot);
var inputDiv = $('<div>').addClass('col-lg-9');
var inputField = $('<textarea class="form-control" aria-label="With textarea" rows="3"></textarea>');
var buttonDiv = $('<div>').addClass('col-lg-1');
var saveButton = $('<button class="saveBtn btn btn-primary btn-outline-light" type="button"><i class="fa fa-save"></i></button>');
inputDiv.append(inputField);
buttonDiv.append(saveButton);
row.append(timeDiv, inputDiv, buttonDiv);
timeBlock.append(row);
currentTime();
}




//submit button on click event to save info to local storage and keep displaying it in the timeslot

//link to function that validates whether the time has passed, is now or is later and changes background color accordingly
function currentTime() {
   var timeNow = Number(dayjs().format("H"));
   if (timeNow < times[i]) {
    inputField.addClass('future');
    $("textarea.form-control").click(function () {
        $(this).addClass("future");
    });
   } else if(timeNow == times[i]) {
    inputField.addClass('present');
   } else {
    inputField.replaceWith('<textarea class="form-control past" type="text" placeholder="" rows="3" readonly></textarea>')
}

}


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page