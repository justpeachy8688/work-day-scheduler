// (function () {
//     var nowMoment = moment();
//     var nowDate = newDate();

//     var eDisplayMoment = document.getElementById("displayMoment");
//     eDisplayMoment.innerHTML = nowMoment;

//     var eDisplayDate = document.getElementById("displayJsDate");
//     eDisplayDate.innerHTML = nowDate;
// })();
// var NowMoment = moment();
// var eDisplayMoment = document.getElementById("displayMoment");
// eDisplayMoment.innerHTML = NowMoment.format('YYYY-M-D');
// var date = '2021-01-24';
// var format = 'LLLL';
// var result = moment(date).format(format);
// console.log(result);

// var date = new Date('2021/1/24');
// var dateString = moment(date).add(6, 'months').format('1');
// console.log(date);
var todayString = moment().format("dddd, MMMM Do YYYY");
console.log(todayString)

var d = moment();
document.getElementById("navbar-subtitle").innerHTML = todayString;

//need past, present, future for color of time blocks
// if/else if/else statement setting a different css class in each one//

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

// console.log(moment().hour());
// createTimeBlock(8)
// createTimeBlock(9)
// createTimeBlock(10)
// createTimeBlock(11)
// createTimeBlock(12)

