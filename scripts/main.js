//----------------------------------------------

// Grabbing all the elements I will need
let clearButton = document.getElementById("clear");

let divideButton = document.getElementById("divide");
let multiplyButton = document.getElementById("multiply");
let subtractButton = document.getElementById("subtract");
let addButton = document.getElementById("add");
let equalsButton = document.getElementById("equals");

let decimalButton = document.getElementById("decimal");

let zeroButton = document.getElementById("zero");
let oneButton = document.getElementById("one");
let twoButton = document.getElementById("two");
let threeButton = document.getElementById("three");
let fourButton = document.getElementById("four");
let fiveButton = document.getElementById("five");
let sixButton = document.getElementById("six");
let sevenButton = document.getElementById("seven");
let eightButton = document.getElementById("eight");
let nineButton = document.getElementById("nine");

let outputDisplay = document.getElementById("output");


// Creating variables
let runningTotal = "0";
let numberToOperate = "0";
let operator = null;
let reset = false;

//----------------------------------------------

//Simple math functions
function add(a,b)
{
    return Number(a) + Number(b);
}

function multiply(a,b)
{
    return Number(a) * Number(b);
}

function divide(a,b)
{
    if (Number(b) == 0)
    {
        outputDisplay.textContent = "Cannot divide by Zero!"
        return 0;
    }
    else
    {
        return Number(a) / Number(b);
    }
}

function subtract(a,b)
{
    return Number(a) - Number(b);
}

//----------------------------------------------

function clearCalc()
{
    console.log("Attempted clear")
    runningTotal = "0";
    numberToOperate = "0";
    operator = null;
    outputDisplay.textContent = String(runningTotal);
}

function addToNumber(e)
{
    if (reset)
    {
        clearCalc()
        reset = false;
    }

    console.log("Attempted to add " + e.currentTarget.num)
    if (numberToOperate.search("\\.") != -1 && e.currentTarget.num == ".")
    {
        return;
    }

    if (numberToOperate.length >= 20)
    {
        return;
    }

    numberToOperate = numberToOperate + e.currentTarget.num;
    while(numberToOperate[0] == "0" && numberToOperate.length > 1)
    {
        numberToOperate = numberToOperate.substring(1);
    }
    outputDisplay.textContent = String(numberToOperate);
}

function changeNumber(e)
{
    console.log("Attempted Number Change with " + e.currentTarget.action)
    if (reset)
    {
        operator = e.currentTarget.action;
    }
    else if (operator != null)
    {
        calculate(e.currentTarget.action);
        operator = e.currentTarget.action;
    }
    else
    {
        operator = e.currentTarget.action;
        runningTotal = numberToOperate;
    }
    numberToOperate = "0";
    reset = false;
}

function calculate()
{
    if (operator == null)
    {
        return;
    }
    else if (operator == "add")
    {
        runningTotal = add(runningTotal, numberToOperate);
    }
    else if (operator == "subtract")
    {
        runningTotal = subtract(runningTotal, numberToOperate);
    }
    else if (operator == "divide")
    {
        runningTotal = divide(runningTotal, numberToOperate);
    }
    else if (operator == "multiply")
    {
        runningTotal = multiply(runningTotal, numberToOperate);
    }

    numberToOperate = "0"
    outputDisplay.textContent = String(runningTotal);
    reset = true;
}

//----------------------------------------------
// Adding listeners to all the buttons!
clearButton.addEventListener("click", clearCalc);

divideButton.action = "divide";
multiplyButton.action = "multiply";
subtractButton.action = "subtract";
addButton.action = "add";

divideButton.addEventListener("click", changeNumber);
multiplyButton.addEventListener("click", changeNumber);
subtractButton.addEventListener("click", changeNumber);
addButton.addEventListener("click", changeNumber);

equalsButton.addEventListener("click", calculate);

decimalButton.num = "."
zeroButton.num = "0"
oneButton.num = "1"
twoButton.num = "2"
threeButton.num = "3"
fourButton.num = "4"
fiveButton.num = "5"
sixButton.num = "6"
sevenButton.num = "7"
eightButton.num = "8"
nineButton.num = "9"

decimalButton.addEventListener("click", addToNumber);
zeroButton.addEventListener("click", addToNumber);
oneButton.addEventListener("click", addToNumber);
twoButton.addEventListener("click", addToNumber);
threeButton.addEventListener("click", addToNumber);
fourButton.addEventListener("click", addToNumber);
fiveButton.addEventListener("click", addToNumber);
sixButton.addEventListener("click", addToNumber);
sevenButton.addEventListener("click", addToNumber);
eightButton.addEventListener("click", addToNumber);
nineButton.addEventListener("click", addToNumber);
//----------------------------------------------