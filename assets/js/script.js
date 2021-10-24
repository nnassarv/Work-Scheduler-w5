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

// Is the current time before timeblock #8?
if(moment(currentTime).isBefore(timeBlockTime8, 'hour')) {
    var before8 = true;
} else {
    before8 = false;
}
console.log("Is the current time before timeblock #8? " + before8);

// Save activity input on local storage
// var act8Input = $( "#activity8" );
// console.log("input for act 8: " + act8Input);
// var saveButton8 = $( "#saveButton8" );

// function saveAct8() {
//     var act8Text = act8Input.value;
//     localStorage.setItem("act-8", act8Text);
//     console.log(act8Text);
// }

// saveButton8.on("click", function (event) {
//     event.preventDefault();
//     saveAct8();
//     renderAct8();
// });

var act8Input = document.querySelector("#activity8");
var saveButton8 = document.querySelector("#saveButton8");

const renderLastSavedAct8 = function (lastSavedAct8) {
    console.log("renderrrr");
};


const getDataFromLocalStorage = function () {
    // get data from local storage with key name
    const data8 = JSON.parse(localStorage.getItem('lastSavedAct8'));
    // if null, 
    if (!data8) {
        // set local storage with default value (empty object)
        localStorage.setItem('lastSavedAct8', JSON.stringify({}));
        return {}
    } else {   
        // else return the parsed data from the local storage
        return data8;
    }
};

// event handler function when activity 8 is saved
const save8Text = function (event) {
    event.preventDefault();

    console.log('clickeerrrr');

    // get activity from local storage
    const lastSavedAct8 = getDataFromLocalStorage();
    console.log(lastSavedAct8);

    // get the user input value (activity)
    const act8 = act8Input.value;

    // update activity on local storage
    lastSavedAct8.value = act8;
    
    // set activity on local storage with updated data
    localStorage.setItem('lastSavedAct8', JSON.stringify(lastSavedAct8));

    //render last saved activity 8 on local storage
    renderLastSavedAct8(lastSavedAct8);
};

// event handler function on load
const handleLoad = function () {
    console.log("loaderrr");

    // get data from local storage
    const lastSavedAct8 = getDataFromLocalStorage();
    console.log(lastSavedAct8);

    //render only if object is not empty
    if (lastSavedAct8) {
        //render last saved activity 8 on local storage
        renderLastSavedAct8(lastSavedAct8);
    }
};

// event listener on save button 8
saveButton8.addEventListener('click', save8Text);

// add event listener for window load to show already existing data
window.addEventListener("load", handleLoad);