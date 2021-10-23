// shortcut for current time and date
var now = moment();

// Display current time and date
$( "#actual-date" ).text(now.format("[Today is ]dddd, MMMM Do YYYY. [It's currently ]h:mm:ss A"));

// define current time
var currentTime = now; //could make -> now.format("hh:mm A")
console.log("its " + currentTime);

// define the corresponding hour on timeblock #8
var timeBlockTime8 = $( "#timeblock8" );
timeBlockTime8 = moment().set('hour', 8);
console.log("time from timeblock 8 is: " + timeBlockTime8);

// Is Timeblock #8 in the past?
if(moment(currentTime).isBefore(timeBlockTime8, 'hour')) {
    var before8 = true;
} else {
    before8 = false;
}
console.log("Is the current time before timeblock #8? " + before8);
