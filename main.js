const message = document.getElementById("message");

const today = new Date();
const dateString = today.toDateString();

message.textContent = "Today is " + dateString;