﻿document.getElementById("buttonsend").addEventListener("click", function () {
    alert("From: " + document.getElementById("txtFrom").value +
        ", Subject: " + document.getElementById("txtSubject").value +
        ", Message: " + document.getElementById("txtMessage").value);
    $("#pic").fadeOut("slow");
})