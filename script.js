/* getting variable */

const capLetter = document.getElementsByTagName("li")[0];
const smLetter = document.getElementsByTagName("li")[1];
const numLetter = document.getElementsByTagName("li")[2];
const eightLetter = document.getElementsByTagName("li")[3];
const strLetter = document.getElementsByTagName("li")[4];


let regNum = /[0-9]/;
let regStrSm = /[a-z]/;
let regStrCap = /[A-Z]/;

/* variable got. ready for work */

function red(element) {
    element.classList.add("red");
    element.classList.remove("green");
};

function green(element) {
    element.classList.add("green");
    element.classList.remove("red");
};

function noColor(element) {
    element.removeAttribute("class");
};

function showHide_pass(checkbox) {
    if (checkbox.checked == true) {
        document.querySelector("#pwd").type = 'text';
    } else {
        document.querySelector("#pwd").type = 'password';
    }
}

document.querySelector("#pwd").addEventListener("input", () => {

    let inputed = document.querySelector("#pwd").value;

    if ((regNum.test(inputed)) && (regStrSm.test(inputed)) && (regStrCap.test(inputed)) && inputed.length >= 8) {
        green(capLetter);
        green(smLetter);
        green(numLetter);
        green(eightLetter);
        green(strLetter);
        return;
    };

    if (regNum.test(inputed)) {
        green(numLetter);
    } else {
        red(numLetter);
        red(strLetter)
    };

    if (regStrSm.test(inputed)) {
        green(smLetter);
    } else {
        red(smLetter);
        red(strLetter)
    };

    if (regStrCap.test(inputed)) {
        green(capLetter);
    } else {
        red(capLetter);
        red(strLetter)
    };

    if (inputed.length >= 8) {
        green(eightLetter)
    } else if (inputed.length == '') {
        noColor(capLetter);
        noColor(smLetter);
        noColor(numLetter);
        noColor(eightLetter);
        noColor(strLetter);
    } else if (inputed.length < 8) {
        red(eightLetter);
        red(strLetter);
    };

})

function login() {

    let inputed = document.querySelector("#pwd").value;
    if ((regNum.test(inputed)) && (regStrSm.test(inputed)) && (regStrCap.test(inputed)) && inputed.length >= 8) {
        window.alert("Strong Password\nLogin Successful");
    } else if (inputed == "") {
        window.alert("Password can't be blanked");
    } else {
        window.alert("Weak Password\nLogin Failed");
    };

};