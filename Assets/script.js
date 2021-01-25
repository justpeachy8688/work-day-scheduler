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


var timeBlocks = document.getElementById("time-blocks");

var createTimeBlock = function (hour) {
    var timeBlock = document.createElement("div")
    timeBlock.className = "row time-block"

    var hourCol = document.createElement("div")
    hourCol.className = "col-2 hour"
    hourCol.textContent = hour + "AM"

    var noteCol = document.createElement("div")
    noteCol.className = "col"
    var noteTextArea = document.createElement("textarea")
    noteTextArea.className = "description"
    noteCol.append(noteTextArea)

    var saveCol = document.createElement("div")
    saveCol.className = "col-2"
    var saveBtn = document.createElement("button")
    saveBtn.className = "saveBtn"
    var saveIcon = document.createElement("i")
    saveIcon.className = "fas fa-save"
    saveBtn.append(saveIcon)
    saveCol.append(saveBtn)

    saveBtn.addEventListener("click", function () {
        console.log(hour)
    })

    timeBlock.append(hourCol, noteCol, saveCol)
    timeBlocks.append(timeBlock);
}
var startTime = 8;
var endTime = 16;
for (var hour = startTime; hour <= endTime; hour++) {
    createTimeBlock(hour)
}

// createTimeBlock(8)
// createTimeBlock(9)
// createTimeBlock(10)
// createTimeBlock(11)
// createTimeBlock(12)

