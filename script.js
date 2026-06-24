// Dropdown

const dropdownBtn =
document.getElementById("dropdownBtn");

const dropdownContent =
document.getElementById("dropdownContent");


dropdownBtn.addEventListener(
"click",
function(){

    if(dropdownContent.style.display==="block")
    {
        dropdownContent.style.display="none";
    }
    else
    {
        dropdownContent.style.display="block";
    }

});




// Modal

const openModalBtn =
document.getElementById("openModalBtn");

const closeModalBtn =
document.getElementById("closeModalBtn");

const overlay =
document.getElementById("overlay");


openModalBtn.addEventListener(
"click",
function(){

    overlay.style.display="flex";

});


closeModalBtn.addEventListener(
"click",
function(){

    overlay.style.display="none";

});




// Progress Bar

const increaseBtn =
document.getElementById("increaseBtn");

const progressFill =
document.getElementById("progressFill");

const percentage =
document.getElementById("percentage");


let progress = 0;


increaseBtn.addEventListener(
"click",
function(){

    if(progress < 100)
    {
        progress += 10;

        progressFill.style.width = progress + "%";

        percentage.textContent =
        progress + "%";
    }

});