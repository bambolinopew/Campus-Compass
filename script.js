function attendance() {

let attended =Number(document.getElementById("attended").value);

let total =Number(document.getElementById("total").value);

let percentage =(attended / total) * 100;

document.getElementById("attendanceResult").innerHTML =
"Your attendance is " +
percentage.toFixed(2) + "%";

}

function gpa() {

let g1 =Number(document.getElementById("g1").value);
let g2 =Number(document.getElementById("g2").value);
let g3 =Number(document.getElementById("g3").value);
let g4 =Number(document.getElementById("g4").value);

let result =(g1 + g2 + g3 + g4) / 4;

document.getElementById("gpaResult").innerHTML =
"Your GPA is " + result.toFixed(2);

}


function mood(message) {

document.getElementById("moodResult").innerHTML =
message;

}


function stress() {

let s1 =Number(document.getElementById("stress1").value);
let s2 =Number(document.getElementById("stress2").value);
let s3 =Number(document.getElementById("stress3").value);
let total =s1 + s2 + s3;

if (total <= 6) {

document.getElementById("stressResult").innerHTML =
"🌱 Low stress level.";

}
else if (total <= 11) {

document.getElementById("stressResult").innerHTML =
"🌤️ Moderate stress level.";

}
else {

document.getElementById("stressResult").innerHTML =
"🌧️ Higher stress level. Consider taking a break.";

}

}


function capsule() {

let message =document.getElementById("message").value;
let date =document.getElementById("date").value;

if (message == "" || date == "") {

document.getElementById("capsuleResult").innerHTML =
"Please write a message and select a date.";

}
else {

    document.getElementById("capsuleResult").innerHTML =
"🔒 Your time capsule has been sealed!";

}

}

