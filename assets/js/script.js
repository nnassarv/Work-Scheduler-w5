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

// disable timeblock if time is in the past
if (!before8) {
    $("#activity8").css({"border-color": "red"});
    $("#activity8").attr("disabled", "input");
    $("#saveButton8").attr("disabled", "button");
}

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

// disable timeblock if time is in the past
if (!before9) {
    $("#activity9").css({"border-color": "red"});
    $("#activity9").attr("disabled", "input");
    $("#saveButton9").attr("disabled", "button");
}

// get existing data for activity 9 from local storage
const getDataFromLocalStorage9 = function () {
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
  const lastSavedAct9 = getDataFromLocalStorage9();
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
  const lastSavedAct9 = getDataFromLocalStorage9();
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


// >>>>>> 10 AM <<<<<<

// [A] The Timeblock
// define the corresponding hour on timeblock #10
var timeBlockTime10 = $("#timeblock10");
timeBlockTime10 = moment().set("hour", 10);
console.log("time from timeblock 10 is: " + timeBlockTime10);

// Is the current time before timeblock #10?
if (moment(currentTime).isBefore(timeBlockTime10, "hour")) {
  var before10 = true;
} else {
  before10 = false;
}
console.log("Is the current time before timeblock #10? " + before10);

// disable timeblock if time is in the past
if (!before10) {
    $("#activity10").css({"border-color": "red"});
    $("#activity10").attr("disabled", "input");
    $("#saveButton10").attr("disabled", "button");
}

// [B] SAVE & RENDER Timeblock 10 data
var act10Input = document.querySelector("#activity10");
var saveButton10 = document.querySelector("#saveButton10");

// render the last saved data for Activity 10
const renderLastSavedAct10 = function (lastSavedAct10) {
  act10Input.value = lastSavedAct10.value;
};

// get existing data for activity 10 from local storage
const getDataFromLocalStorage10 = function () {
  // get data from local storage with key name
  const data10 = JSON.parse(localStorage.getItem("lastSavedAct10"));
  // if null,
  if (!data10) {
    // set local storage with default value (empty object)
    localStorage.setItem("lastSavedAct10", JSON.stringify({}));
    return {};
  } else {
    // else return the parsed data from the local storage
    return data10;
  }
};

// event handler function when activity 8 is saved
const save10Text = function (event) {
  event.preventDefault();
  // get activity from local storage
  const lastSavedAct10 = getDataFromLocalStorage10();
  // get the user input value (activity)
  const act10 = act10Input.value;
  // update activity on local storage
  lastSavedAct10.value = act10;
  // set activity on local storage with updated data
  localStorage.setItem("lastSavedAct10", JSON.stringify(lastSavedAct10));
  //render last saved activity 10 on local storage
  renderLastSavedAct10(lastSavedAct10);
};

// event handler function on page load
const handleLoad10 = function () {
  // get data from local storage
  const lastSavedAct10 = getDataFromLocalStorage10();
  //render only if object is not empty
  if (lastSavedAct10) {
    //render last saved activity 10 on local storage
    renderLastSavedAct10(lastSavedAct10);
  }
};

// event listener on save button 10
saveButton10.addEventListener("click", save10Text);
// add event listener for window load to show already existing data
window.addEventListener("load", handleLoad10);


// >>>>>> 11 AM <<<<<<

// [A] The Timeblock
// define the corresponding hour on timeblock #11
var timeBlockTime11 = $("#timeblock11");
timeBlockTime11 = moment().set("hour", 11);
console.log("time from timeblock 11 is: " + timeBlockTime11);

// Is the current time before timeblock #11?
if (moment(currentTime).isBefore(timeBlockTime11, "hour")) {
  var before11 = true;
} else {
  before11 = false;
}
console.log("Is the current time before timeblock #11? " + before11);

// disable timeblock if time is in the past
if (!before11) {
    $("#activity11").css({"border-color": "red"});
    $("#activity11").attr("disabled", "input");
    $("#saveButton11").attr("disabled", "button");
}

// [B] SAVE & RENDER Timeblock 11 data
var act11Input = document.querySelector("#activity11");
var saveButton11 = document.querySelector("#saveButton11");

// render the last saved data for Activity 11
const renderLastSavedAct11 = function (lastSavedAct11) {
  act11Input.value = lastSavedAct11.value;
};

// get existing data for activity 11 from local storage
const getDataFromLocalStorage11 = function () {
  // get data from local storage with key name
  const data11 = JSON.parse(localStorage.getItem("lastSavedAct11"));
  // if null,
  if (!data11) {
    // set local storage with default value (empty object)
    localStorage.setItem("lastSavedAct11", JSON.stringify({}));
    return {};
  } else {
    // else return the parsed data from the local storage
    return data11;
  }
};

// event handler function when activity 8 is saved
const save11Text = function (event) {
  event.preventDefault();
  // get activity from local storage
  const lastSavedAct11 = getDataFromLocalStorage11();
  // get the user input value (activity)
  const act11 = act11Input.value;
  // update activity on local storage
  lastSavedAct11.value = act11;
  // set activity on local storage with updated data
  localStorage.setItem("lastSavedAct11", JSON.stringify(lastSavedAct11));
  //render last saved activity 11 on local storage
  renderLastSavedAct11(lastSavedAct11);
};

// event handler function on page load
const handleLoad11 = function () {
  // get data from local storage
  const lastSavedAct11 = getDataFromLocalStorage11();
  //render only if object is not empty
  if (lastSavedAct11) {
    //render last saved activity 11 on local storage
    renderLastSavedAct11(lastSavedAct11);
  }
};

// event listener on save button 11
saveButton11.addEventListener("click", save11Text);
// add event listener for window load to show already existing data
window.addEventListener("load", handleLoad11);


// >>>>>> 12 <<<<<<

// [A] The Timeblock
// define the corresponding hour on timeblock #12
var timeBlockTime12 = $("#timeblock12");
timeBlockTime12 = moment().set("hour", 12);
console.log("time from timeblock 12 is: " + timeBlockTime12);

// Is the current time before timeblock #12?
if (moment(currentTime).isBefore(timeBlockTime12, "hour")) {
  var before12 = true;
} else {
  before12 = false;
}
console.log("Is the current time before timeblock #12? " + before12);

// disable timeblock if time is in the past
if (!before12) {
    $("#activity12").css({"border-color": "red"});
    $("#activity12").attr("disabled", "input");
    $("#saveButton12").attr("disabled", "button");
}

// [B] SAVE & RENDER Timeblock 12 data
var act12Input = document.querySelector("#activity12");
var saveButton12 = document.querySelector("#saveButton12");

// render the last saved data for Activity 12
const renderLastSavedAct12 = function (lastSavedAct12) {
  act12Input.value = lastSavedAct12.value;
};

// get existing data for activity 12 from local storage
const getDataFromLocalStorage12 = function () {
  // get data from local storage with key name
  const data12 = JSON.parse(localStorage.getItem("lastSavedAct12"));
  // if null,
  if (!data12) {
    // set local storage with default value (empty object)
    localStorage.setItem("lastSavedAct12", JSON.stringify({}));
    return {};
  } else {
    // else return the parsed data from the local storage
    return data12;
  }
};

// event handler function when activity 8 is saved
const save12Text = function (event) {
  event.preventDefault();
  // get activity from local storage
  const lastSavedAct12 = getDataFromLocalStorage12();
  // get the user input value (activity)
  const act12 = act12Input.value;
  // update activity on local storage
  lastSavedAct12.value = act12;
  // set activity on local storage with updated data
  localStorage.setItem("lastSavedAct12", JSON.stringify(lastSavedAct12));
  //render last saved activity 12 on local storage
  renderLastSavedAct12(lastSavedAct12);
};

// event handler function on page load
const handleLoad12 = function () {
  // get data from local storage
  const lastSavedAct12 = getDataFromLocalStorage12();
  //render only if object is not empty
  if (lastSavedAct12) {
    //render last saved activity 12 on local storage
    renderLastSavedAct12(lastSavedAct12);
  }
};

// event listener on save button 12
saveButton12.addEventListener("click", save12Text);
// add event listener for window load to show already existing data
window.addEventListener("load", handleLoad12);


// >>>>>> 13 <<<<<<

// [A] The Timeblock
// define the corresponding hour on timeblock #13
var timeBlockTime13 = $("#timeblock13");
timeBlockTime13 = moment().set("hour", 13);
console.log("time from timeblock 13 is: " + timeBlockTime13);

// Is the current time before timeblock #13?
if (moment(currentTime).isBefore(timeBlockTime13, "hour")) {
  var before13 = true;
} else {
  before13 = false;
}
console.log("Is the current time before timeblock #13? " + before13);

// disable timeblock if time is in the past
if (!before13) {
    $("#activity13").css({"border-color": "red"});
    $("#activity13").attr("disabled", "input");
    $("#saveButton13").attr("disabled", "button");
}

// [B] SAVE & RENDER Timeblock 13 data
var act13Input = document.querySelector("#activity13");
var saveButton13 = document.querySelector("#saveButton13");

// render the last saved data for Activity 13
const renderLastSavedAct13 = function (lastSavedAct13) {
  act13Input.value = lastSavedAct13.value;
};

// get existing data for activity 13 from local storage
const getDataFromLocalStorage13 = function () {
  // get data from local storage with key name
  const data13 = JSON.parse(localStorage.getItem("lastSavedAct13"));
  // if null,
  if (!data13) {
    // set local storage with default value (empty object)
    localStorage.setItem("lastSavedAct13", JSON.stringify({}));
    return {};
  } else {
    // else return the parsed data from the local storage
    return data13;
  }
};

// event handler function when activity 8 is saved
const save13Text = function (event) {
  event.preventDefault();
  // get activity from local storage
  const lastSavedAct13 = getDataFromLocalStorage13();
  // get the user input value (activity)
  const act13 = act13Input.value;
  // update activity on local storage
  lastSavedAct13.value = act13;
  // set activity on local storage with updated data
  localStorage.setItem("lastSavedAct13", JSON.stringify(lastSavedAct13));
  //render last saved activity 13 on local storage
  renderLastSavedAct13(lastSavedAct13);
};

// event handler function on page load
const handleLoad13 = function () {
  // get data from local storage
  const lastSavedAct13 = getDataFromLocalStorage13();
  //render only if object is not empty
  if (lastSavedAct13) {
    //render last saved activity 13 on local storage
    renderLastSavedAct13(lastSavedAct13);
  }
};

// event listener on save button 13
saveButton13.addEventListener("click", save13Text);
// add event listener for window load to show already existing data
window.addEventListener("load", handleLoad13);


// >>>>>> 14 <<<<<<

// [A] The Timeblock
// define the corresponding hour on timeblock #14
var timeBlockTime14 = $("#timeblock14");
timeBlockTime14 = moment().set("hour", 14);
console.log("time from timeblock 14 is: " + timeBlockTime14);

// Is the current time before timeblock #14?
if (moment(currentTime).isBefore(timeBlockTime14, "hour")) {
  var before14 = true;
} else {
  before14 = false;
}
console.log("Is the current time before timeblock #14? " + before14);

// disable timeblock if time is in the past
if (!before14) {
    $("#activity14").css({"border-color": "red"});
    $("#activity14").attr("disabled", "input");
    $("#saveButton14").attr("disabled", "button");
}

// [B] SAVE & RENDER Timeblock 14 data
var act14Input = document.querySelector("#activity14");
var saveButton14 = document.querySelector("#saveButton14");

// render the last saved data for Activity 14
const renderLastSavedAct14 = function (lastSavedAct14) {
  act14Input.value = lastSavedAct14.value;
};

// get existing data for activity 14 from local storage
const getDataFromLocalStorage14 = function () {
  // get data from local storage with key name
  const data14 = JSON.parse(localStorage.getItem("lastSavedAct14"));
  // if null,
  if (!data14) {
    // set local storage with default value (empty object)
    localStorage.setItem("lastSavedAct14", JSON.stringify({}));
    return {};
  } else {
    // else return the parsed data from the local storage
    return data14;
  }
};

// event handler function when activity 8 is saved
const save14Text = function (event) {
  event.preventDefault();
  // get activity from local storage
  const lastSavedAct14 = getDataFromLocalStorage14();
  // get the user input value (activity)
  const act14 = act14Input.value;
  // update activity on local storage
  lastSavedAct14.value = act14;
  // set activity on local storage with updated data
  localStorage.setItem("lastSavedAct14", JSON.stringify(lastSavedAct14));
  //render last saved activity 14 on local storage
  renderLastSavedAct14(lastSavedAct14);
};

// event handler function on page load
const handleLoad14 = function () {
  // get data from local storage
  const lastSavedAct14 = getDataFromLocalStorage14();
  //render only if object is not empty
  if (lastSavedAct14) {
    //render last saved activity 14 on local storage
    renderLastSavedAct14(lastSavedAct14);
  }
};

// event listener on save button 14
saveButton14.addEventListener("click", save14Text);
// add event listener for window load to show already existing data
window.addEventListener("load", handleLoad14);


// >>>>>> 15 <<<<<<

// [A] The Timeblock
// define the corresponding hour on timeblock #15
var timeBlockTime15 = $("#timeblock15");
timeBlockTime15 = moment().set("hour", 15);
console.log("time from timeblock 15 is: " + timeBlockTime15);

// Is the current time before timeblock #15?
if (moment(currentTime).isBefore(timeBlockTime15, "hour")) {
  var before15 = true;
} else {
  before15 = false;
}
console.log("Is the current time before timeblock #15? " + before15);

// disable timeblock if time is in the past
if (!before15) {
    $("#activity15").css({"border-color": "red"});
    $("#activity15").attr("disabled", "input");
    $("#saveButton15").attr("disabled", "button");
}

// [B] SAVE & RENDER Timeblock 15 data
var act15Input = document.querySelector("#activity15");
var saveButton15 = document.querySelector("#saveButton15");

// render the last saved data for Activity 15
const renderLastSavedAct15 = function (lastSavedAct15) {
  act15Input.value = lastSavedAct15.value;
};

// get existing data for activity 15 from local storage
const getDataFromLocalStorage15 = function () {
  // get data from local storage with key name
  const data15 = JSON.parse(localStorage.getItem("lastSavedAct15"));
  // if null,
  if (!data15) {
    // set local storage with default value (empty object)
    localStorage.setItem("lastSavedAct15", JSON.stringify({}));
    return {};
  } else {
    // else return the parsed data from the local storage
    return data15;
  }
};

// event handler function when activity 8 is saved
const save15Text = function (event) {
  event.preventDefault();
  // get activity from local storage
  const lastSavedAct15 = getDataFromLocalStorage15();
  // get the user input value (activity)
  const act15 = act15Input.value;
  // update activity on local storage
  lastSavedAct15.value = act15;
  // set activity on local storage with updated data
  localStorage.setItem("lastSavedAct15", JSON.stringify(lastSavedAct15));
  //render last saved activity 15 on local storage
  renderLastSavedAct15(lastSavedAct15);
};

// event handler function on page load
const handleLoad15 = function () {
  // get data from local storage
  const lastSavedAct15 = getDataFromLocalStorage15();
  //render only if object is not empty
  if (lastSavedAct15) {
    //render last saved activity 15 on local storage
    renderLastSavedAct15(lastSavedAct15);
  }
};

// event listener on save button 15
saveButton15.addEventListener("click", save15Text);
// add event listener for window load to show already existing data
window.addEventListener("load", handleLoad15);


// >>>>>> 16 <<<<<<

// [A] The Timeblock
// define the corresponding hour on timeblock #16
var timeBlockTime16 = $("#timeblock16");
timeBlockTime16 = moment().set("hour", 16);
console.log("time from timeblock 16 is: " + timeBlockTime16);

// Is the current time before timeblock #16?
if (moment(currentTime).isBefore(timeBlockTime16, "hour")) {
  var before16 = true;
} else {
  before16 = false;
}
console.log("Is the current time before timeblock #16? " + before16);

// disable timeblock if time is in the past
if (!before16) {
    $("#activity16").css({"border-color": "red"});
    $("#activity16").attr("disabled", "input");
    $("#saveButton16").attr("disabled", "button");
}

// [B] SAVE & RENDER Timeblock 16 data
var act16Input = document.querySelector("#activity16");
var saveButton16 = document.querySelector("#saveButton16");

// render the last saved data for Activity 16
const renderLastSavedAct16 = function (lastSavedAct16) {
  act16Input.value = lastSavedAct16.value;
};

// get existing data for activity 16 from local storage
const getDataFromLocalStorage16 = function () {
  // get data from local storage with key name
  const data16 = JSON.parse(localStorage.getItem("lastSavedAct16"));
  // if null,
  if (!data16) {
    // set local storage with default value (empty object)
    localStorage.setItem("lastSavedAct16", JSON.stringify({}));
    return {};
  } else {
    // else return the parsed data from the local storage
    return data16;
  }
};

// event handler function when activity 8 is saved
const save16Text = function (event) {
  event.preventDefault();
  // get activity from local storage
  const lastSavedAct16 = getDataFromLocalStorage16();
  // get the user input value (activity)
  const act16 = act16Input.value;
  // update activity on local storage
  lastSavedAct16.value = act16;
  // set activity on local storage with updated data
  localStorage.setItem("lastSavedAct16", JSON.stringify(lastSavedAct16));
  //render last saved activity 16 on local storage
  renderLastSavedAct16(lastSavedAct16);
};

// event handler function on page load
const handleLoad16 = function () {
  // get data from local storage
  const lastSavedAct16 = getDataFromLocalStorage16();
  //render only if object is not empty
  if (lastSavedAct16) {
    //render last saved activity 16 on local storage
    renderLastSavedAct16(lastSavedAct16);
  }
};

// event listener on save button 16
saveButton16.addEventListener("click", save16Text);
// add event listener for window load to show already existing data
window.addEventListener("load", handleLoad16);


// >>>>>> 17 <<<<<<

// [A] The Timeblock
// define the corresponding hour on timeblock #17
var timeBlockTime17 = $("#timeblock17");
timeBlockTime17 = moment().set("hour", 17);
console.log("time from timeblock 17 is: " + timeBlockTime17);

// Is the current time before timeblock #17?
if (moment(currentTime).isBefore(timeBlockTime17, "hour")) {
  var before17 = true;
} else {
  before17 = false;
}
console.log("Is the current time before timeblock #17? " + before17);

// disable timeblock if time is in the past
if (!before17) {
    $("#activity17").css({"border-color": "red"});
    $("#activity17").attr("disabled", "input");
    $("#saveButton17").attr("disabled", "button");
}

// [B] SAVE & RENDER Timeblock 17 data
var act17Input = document.querySelector("#activity17");
var saveButton17 = document.querySelector("#saveButton17");

// render the last saved data for Activity 17
const renderLastSavedAct17 = function (lastSavedAct17) {
  act17Input.value = lastSavedAct17.value;
};

// get existing data for activity 17 from local storage
const getDataFromLocalStorage17 = function () {
  // get data from local storage with key name
  const data17 = JSON.parse(localStorage.getItem("lastSavedAct17"));
  // if null,
  if (!data17) {
    // set local storage with default value (empty object)
    localStorage.setItem("lastSavedAct17", JSON.stringify({}));
    return {};
  } else {
    // else return the parsed data from the local storage
    return data17;
  }
};

// event handler function when activity 8 is saved
const save17Text = function (event) {
  event.preventDefault();
  // get activity from local storage
  const lastSavedAct17 = getDataFromLocalStorage17();
  // get the user input value (activity)
  const act17 = act17Input.value;
  // update activity on local storage
  lastSavedAct17.value = act17;
  // set activity on local storage with updated data
  localStorage.setItem("lastSavedAct17", JSON.stringify(lastSavedAct17));
  //render last saved activity 17 on local storage
  renderLastSavedAct17(lastSavedAct17);
};

// event handler function on page load
const handleLoad17 = function () {
  // get data from local storage
  const lastSavedAct17 = getDataFromLocalStorage17();
  //render only if object is not empty
  if (lastSavedAct17) {
    //render last saved activity 17 on local storage
    renderLastSavedAct17(lastSavedAct17);
  }
};

// event listener on save button 17
saveButton17.addEventListener("click", save17Text);
// add event listener for window load to show already existing data
window.addEventListener("load", handleLoad17);


// >>>>>> 18 <<<<<<

// [A] The Timeblock
// define the corresponding hour on timeblock #18
var timeBlockTime18 = $("#timeblock18");
timeBlockTime18 = moment().set("hour", 18);
console.log("time from timeblock 18 is: " + timeBlockTime18);

// Is the current time before timeblock #18?
if (moment(currentTime).isBefore(timeBlockTime18, "hour")) {
  var before18 = true;
} else {
  before18 = false;
}
console.log("Is the current time before timeblock #18? " + before18);

// disable timeblock if time is in the past
if (!before18) {
    $("#activity18").css({"border-color": "red"});
    $("#activity18").attr("disabled", "input");
    $("#saveButton18").attr("disabled", "button");
}

// [B] SAVE & RENDER Timeblock 18 data
var act18Input = document.querySelector("#activity18");
var saveButton18 = document.querySelector("#saveButton18");

// render the last saved data for Activity 18
const renderLastSavedAct18 = function (lastSavedAct18) {
  act18Input.value = lastSavedAct18.value;
};

// get existing data for activity 18 from local storage
const getDataFromLocalStorage18 = function () {
  // get data from local storage with key name
  const data18 = JSON.parse(localStorage.getItem("lastSavedAct18"));
  // if null,
  if (!data18) {
    // set local storage with default value (empty object)
    localStorage.setItem("lastSavedAct18", JSON.stringify({}));
    return {};
  } else {
    // else return the parsed data from the local storage
    return data18;
  }
};

// event handler function when activity 8 is saved
const save18Text = function (event) {
  event.preventDefault();
  // get activity from local storage
  const lastSavedAct18 = getDataFromLocalStorage18();
  // get the user input value (activity)
  const act18 = act18Input.value;
  // update activity on local storage
  lastSavedAct18.value = act18;
  // set activity on local storage with updated data
  localStorage.setItem("lastSavedAct18", JSON.stringify(lastSavedAct18));
  //render last saved activity 18 on local storage
  renderLastSavedAct18(lastSavedAct18);
};

// event handler function on page load
const handleLoad18 = function () {
  // get data from local storage
  const lastSavedAct18 = getDataFromLocalStorage18();
  //render only if object is not empty
  if (lastSavedAct18) {
    //render last saved activity 18 on local storage
    renderLastSavedAct18(lastSavedAct18);
  }
};

// event listener on save button 18
saveButton18.addEventListener("click", save18Text);
// add event listener for window load to show already existing data
window.addEventListener("load", handleLoad18);