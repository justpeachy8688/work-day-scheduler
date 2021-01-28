//Display today's date and time
var todayString = moment().format("dddd, MMMM Do YYYY");
console.log(todayString)

var d = moment();
document.getElementById("navbar-subtitle").innerHTML = todayString;

$(document).ready(function () {
    // saveBtn click listener
    $(".saveBtn").on("click", function () {
        localStorage.setItem("time", "text");
    })
});
//     var text = $(this).siblings(".description").val();
//     var time = $(this).parent().attr("id");
//     // Save text in local storage
//     localStorage.setItem(hour, text);
// })
// // });
// console.log($(this).parent());
// console.log($(this)siblings);

var timeBlocks = document.getElementById("time-blocks");

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

    saveBtn.addEventListener("click", function () {
        console.log(hour)
    })

    timeBlock.append(hourCol, noteCol, saveCol)
    timeBlocks.append(timeBlock);
}
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

