"use strict";

let lightModeClickBox = document.getElementById("lightClick");

lightModeClickBox.innerHTML = "<p> light mode</p>"
lightModeClickBox.classList.add("clickLight");

lightModeClickBox.addEventListener("click", function()
{
    console.log("clicking light box");
    document.querySelector("body").style.backgroundColor = "white";
    document.body.style.color = "black"; 
});

let darkModeClickBox = document.getElementById("darkClick");

darkModeClickBox.innerHTML = "<p> dark mode</p>"
darkModeClickBox.classList.add("clickDark");

darkModeClickBox.addEventListener("click", function()
{
    console.log("clicking dark box");
    document.querySelector("body").style.backgroundColor = "black";
    document.body.style.color = "white"; 
});

let enlargePhoto = document.getElementById("photo"); 
enlargePhoto.addEventListener("click", function() 
{
    enlargePhoto.classList.toggle("enlarged");
});

let enlargePhoto2 = document.getElementById("photo2"); 
enlargePhoto2.addEventListener("click", function() 
{
  enlargePhoto2.classList.toggle("enlarged");
});