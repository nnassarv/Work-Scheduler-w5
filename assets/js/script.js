// shortcut for current time and date
var now = moment();
// Display current time and date
$("#actual-date").text(
  now.format("[Today is ]dddd, MMMM Do YYYY. [It's currently ]h:mm:ss A")
);
// define current time
var currentTime = now; //could make -> now.format("hh:mm A")
console.log("its " + currentTime);

// >>>>>> 8 AM <<<<<<

// [A] The Timeblock
// define the corresponding hour on timeblock #8
var timeBlockTime8 = $("#timeblock8");
timeBlockTime8 = moment().set("hour", 8);
console.log("time from timeblock 8 is: " + timeBlockTime8);

// Is the current time before timeblock #8?
if (moment(currentTime).isBefore(timeBlockTime8, "hour")) {
  var before8 = true;
} else {
  before8 = false;
}
console.log("Is the current time before timeblock #8? " + before8);

// [B] SAVE & RENDER Timeblock 8 data
var act8Input = document.querySelector("#activity8");
var saveButton8 = document.querySelector("#saveButton8");

// render the last saved data for Activity 8
const renderLastSavedAct8 = function (lastSavedAct8) {
  act8Input.value = lastSavedAct8.value;
};

// get existing data for activity 8 from local storage
const getDataFromLocalStorage8 = function () {
  // get data from local storage with key name
  const data8 = JSON.parse(localStorage.getItem("lastSavedAct8"));
  // if null,
  if (!data8) {
    // set local storage with default value (empty object)
    localStorage.setItem("lastSavedAct8", JSON.stringify({}));
    return {};
  } else {
    // else return the parsed data from the local storage
    return data8;
  }
};

// event handler function when activity 8 is saved
const save8Text = function (event) {
  event.preventDefault();
  // get activity from local storage
  const lastSavedAct8 = getDataFromLocalStorage8();
  // get the user input value (activity)
  const act8 = act8Input.value;
  // update activity on local storage
  lastSavedAct8.value = act8;
  // set activity on local storage with updated data
  localStorage.setItem("lastSavedAct8", JSON.stringify(lastSavedAct8));
  //render last saved activity 8 on local storage
  renderLastSavedAct8(lastSavedAct8);
};

// event handler function on page load
const handleLoad8 = function () {
  // get data from local storage
  const lastSavedAct8 = getDataFromLocalStorage8();
  //render only if object is not empty
  if (lastSavedAct8) {
    //render last saved activity 8 on local storage
    renderLastSavedAct8(lastSavedAct8);
  }
};

// event listener on save button 8
saveButton8.addEventListener("click", save8Text);
// add event listener for window load to show already existing data
window.addEventListener("load", handleLoad8);


// >>>>>> 9 AM <<<<<<

// [A] The Timeblock
// define the corresponding hour on timeblock #8
var timeBlockTime9 = $("#timeblock9");
timeBlockTime9 = moment().set("hour", 9);
console.log("time from timeblock 9 is: " + timeBlockTime9);

// Is the current time before timeblock #8?
if (moment(currentTime).isBefore(timeBlockTime9, "hour")) {
  var before9 = true;
} else {
  before9 = false;
}
console.log("Is the current time before timeblock #9? " + before9);

// [B] SAVE & RENDER Timeblock 9 data
var act9Input = document.querySelector("#activity9");
var saveButton9 = document.querySelector("#saveButton9");

// render the last saved data for Activity 9
const renderLastSavedAct9 = function (lastSavedAct9) {
  act9Input.value = lastSavedAct9.value;
};

// get existing data for activity 9 from local storage
const getDataFromLocalStorage = function () {
  // get data from local storage with key name
  const data9 = JSON.parse(localStorage.getItem("lastSavedAct9"));
  // if null,
  if (!data9) {
    // set local storage with default value (empty object)
    localStorage.setItem("lastSavedAct9", JSON.stringify({}));
    return {};
  } else {
    // else return the parsed data from the local storage
    return data9;
  }
};

// event handler function when activity 8 is saved
const save9Text = function (event) {
  event.preventDefault();
  // get activity from local storage
  const lastSavedAct9 = getDataFromLocalStorage();
  // get the user input value (activity)
  const act9 = act9Input.value;
  // update activity on local storage
  lastSavedAct9.value = act9;
  // set activity on local storage with updated data
  localStorage.setItem("lastSavedAct9", JSON.stringify(lastSavedAct9));
  //render last saved activity 9 on local storage
  renderLastSavedAct9(lastSavedAct9);
};

// event handler function on page load
const handleLoad = function () {
  // get data from local storage
  const lastSavedAct9 = getDataFromLocalStorage();
  //render only if object is not empty
  if (lastSavedAct9) {
    //render last saved activity 9 on local storage
    renderLastSavedAct9(lastSavedAct9);
  }
};

// event listener on save button 9
saveButton9.addEventListener("click", save9Text);
// add event listener for window load to show already existing data
window.addEventListener("load", handleLoad);