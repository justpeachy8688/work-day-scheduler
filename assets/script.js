//Display today's date and time
var todayString = moment().format("dddd, MMMM Do YYYY");
console.log(todayString)

var d = moment();
document.getElementById("navbar-subtitle").innerHTML = todayString;

var timeBlocks = document.getElementById("time-blocks")

var createTimeBlock = function (hour) {
    var timeBlock = document.createElement("div")
    timeBlock.className = "row time-block"
    timeBlock.setAttribute("id", hour);

    var hourCol = document.createElement("div")
    hourCol.className = "col-md-1 hour"
    hourCol.textContent = hour + ":00"

    var noteCol = document.createElement("div")
    noteCol.className = "col-md-10"
    var noteTextArea = document.createElement("textarea")
    //ID's on text areas
    noteTextArea.id = "hour" + hour;
    noteTextArea.className = "description"
    noteCol.append(noteTextArea)

    var saveCol = document.createElement("div")
    saveCol.className = "col-md-1"
    var saveBtn = document.createElement("button")
    saveBtn.className = "btn saveBtn"
    var saveIcon = document.createElement("i")
    saveIcon.className = "fas fa-save"
    saveCol.append(saveBtn)
    saveBtn.append(saveIcon)

    timeBlock.append(hourCol, noteCol, saveCol)
    timeBlocks.append(timeBlock);
}
//Local storage item names
var stringTime = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]

$(document).on("click", ".saveBtn", function () {
    var $parent = $(this).parents(".time-block");
    var hour = $parent.attr("id");
    var hourReset = hour - 8;
    var stringVal = stringTime[hourReset]
    localStorage.setItem(stringVal, JSON.stringify($("textarea").eq(hourReset).val()));
});


var startTime = 8;
var endTime = 17;
for (var hour = startTime; hour <= endTime; hour++) {
    createTimeBlock(hour)
}
// to check the time and add the classes for background color
var hourUpdater = function () {
    var currentHour = moment().hour();
    $(".time-block").each(function () {
        var getHour = parseInt($(this).attr("id"));
        if (getHour < currentHour) {
            $(this).addClass("past");
        } else if (getHour === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past")
        } else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });
}
hourUpdater();
var interval = setInterval(hourUpdater, 10000);

for (i = 0; i < 10; i++) {
    // if there is no saved value in local storage continue on
    if (!JSON.parse(localStorage.getItem(stringTime[i]))) {
        console.log("blob")
        continue;
    }
    else {
        // create new variable and set it to the local storage variable = stringTime[i]
        var savedItems = JSON.parse(localStorage.getItem(stringTime[i]))
        // set the value for each textarea element = the local storage saved item
        $("textarea").eq(i).val(savedItems)
        console.log(savedItems)
    }
}
