//Handling structures through variables
const bus = document.querySelector(".bus");

const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const l3 = document.querySelector(".l3");
const l4 = document.querySelector(".l4");
const l5 = document.querySelector(".l5");
const l6 = document.querySelector(".l6");
const l7 = document.querySelector(".l7");
const l8 = document.querySelector(".l8");

const codeLines = [
    l1, l2, l3, l4,
    l5, l6, l7, l8
]


let currentColor = "black";
let num = 0;

const btnRun = document.querySelector(".btn-run");

//======================= function =====================

function getCommand() {

    let command = codeLines[num].value;

    if (command !== "" && command === "bus.color = 'yellow';") {

        bus.classList.remove(currentColor);
        currentColor = "yellow";
        bus.classList.add(currentColor);
        console.log("Bus color changed to "+currentColor);

        codeLines[num].classList.remove("bad-command");
        codeLines[num].classList.add("correct-command");
        codeLines[num].disabled = true;

        num++;

        if (num === 8) {
            alert("Ooooopps, you ran out of lines, give it another try ;)");
            location.reload();
        }

        codeLines[num].removeAttribute("disabled");

    } else if (command !== "" && command === "bus.color = 'red';") {

        bus.classList.remove(currentColor);
        currentColor = "red";
        bus.classList.add(currentColor);
        console.log("Bus color changed to "+currentColor);

        codeLines[num].classList.remove("bad-command");
        codeLines[num].classList.add("correct-command");
        codeLines[num].disabled = true;

        num++;

        if (num === 8) {
            alert("Ooooopps, you ran out of lines, give it another try ;)");
            location.reload();
        }

        codeLines[num].removeAttribute("disabled");

    } else if (command !== "" && command === "bus.color = 'green';") {

        bus.classList.remove(currentColor);
        currentColor = "green";
        bus.classList.add(currentColor);
        console.log("Bus color changed to "+currentColor);

        codeLines[num].classList.remove("bad-command");
        codeLines[num].classList.add("correct-command");
        codeLines[num].disabled = true;

        num++;

        if (num === 8) {
            alert("Ooooopps, you ran out of lines, give it another try ;)");
            location.reload();
        }

        codeLines[num].removeAttribute("disabled");

    } else if (command !== "" && command === "bus.color = 'black';") {

        bus.classList.remove(currentColor);
        currentColor = "black";
        bus.classList.add(currentColor);
        console.log("Bus color changed to "+currentColor);

        codeLines[num].classList.remove("bad-command");
        codeLines[num].classList.add("correct-command");
        codeLines[num].disabled = true;

        num++;

        if (num === 8) {
            alert("Ooooopps, you ran out of lines, give it another try ;)");
            location.reload();
        }

        codeLines[num].removeAttribute("disabled");

    } else if (command !== "" && command === "bus.color = 'orange';") {

        bus.classList.remove(currentColor);
        currentColor = "orange";
        bus.classList.add(currentColor);
        console.log("Bus color changed to "+currentColor);

        codeLines[num].classList.remove("bad-command");
        codeLines[num].classList.add("correct-command");
        codeLines[num].disabled = true;

        num++;

        if (num === 8) {
            alert("Ooooopps, you ran out of lines, give it another try ;)");
            location.reload();
        }

        codeLines[num].removeAttribute("disabled");

    } else if (command !== "" && command === "bus.color = 'blue';") {

        bus.classList.remove(currentColor);
        currentColor = "blue";
        bus.classList.add(currentColor);
        console.log("Bus color changed to "+currentColor);

        codeLines[num].classList.remove("bad-command");
        codeLines[num].classList.add("correct-command");
        codeLines[num].disabled = true;

        num++;

        if (num === 8) {
            alert("Ooooopps, you ran out of lines, give it another try ;)");
            location.reload();
        }

        codeLines[num].removeAttribute("disabled");

    } else {
        alert("Please, do not make typos related with indenting and type the commands carefully!")
        codeLines[num].classList.add("bad-command");
        console.log("Syntax error!");
    }

}

//========= attaching function 'getCommand' on click event of 'run-btn'==============
btnRun.addEventListener('click', getCommand);
