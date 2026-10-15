const pageTitle = document.getElementById("page-title");
const description = document.querySelector(".description");
const message = document.getElementById("message");

pageTitle.textContent = "Working with the DOM";

description.textContent = "The description was updated using querySelector.";

message.textContent = "The message was updated using getElementById.";

message.style.color = "green";

message.classList.add("active");