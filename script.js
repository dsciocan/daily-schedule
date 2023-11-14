// Display the current day at the top of the calender when a user opens the planner.
var currentDay = $('#currentDay');
currentDay.text(dayjs().format('DD MMM YYYY'));
var times = [9,10,11,12,13,14,15,16,17];
var timeBlock = $(".container")
timeBlock.addClass("time-block")
// Present timeblocks for standard business hours when the user scrolls down.
for(i=0; i<times.length; i++) {
    var row = $('<div>').addClass('row g-0 input-group');
    var timeDiv = $('<div>').addClass('input-group-prepend col-md-1 hour');
    var timeSlot = $('<label>').text(times[i] + ":00");
    timeDiv.append(timeSlot);
    // Allow a user to enter an event when they click a timeblock
    var inputDiv = $('<div>').addClass('col-md-9');
    var inputField = $('<textarea class="form-control" autocomplete="off" aria-label="With textarea" rows="3"></textarea>').data("index", times[i]);
    var buttonDiv = $('<div>').addClass('input-group-append col-md-1');
    var saveButton = $('<button class="saveBtn btn btn-primary btn-outline-light" type="button"><i class="fa fa-save"></i></button>').data("index", times[i]);
    inputDiv.append(inputField);
    buttonDiv.append(saveButton);
    row.append(timeDiv, inputDiv, buttonDiv);
    timeBlock.append(row);
    currentTime();
}


// Save the event in local storage when the save button is clicked in that timeblock.


$('.saveBtn').on('click', function(){
    $('.form-control').each(function(){ 
        var index = $(this).data('index');
        var value = $(this).val();
       localStorage.setItem(index, value);  
    })
});

// Persist events between refreshes of a page
$(document).ready(function() {
    $('.form-control').each(function(){    
        var index = $(this).data('index');
        var value = localStorage.getItem(index);
        $(this).val(value);

    }); 
});

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
function currentTime() {
   var timeNow = Number(dayjs().format("H"));
   if (timeNow < times[i]) {
    inputField.addClass('future');
   } else if(timeNow == times[i]) {
    inputField.addClass('present');
   } else {
    inputField.addClass('past')
    inputField.prop('readonly', true);
}
}
