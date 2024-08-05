let nums = document.querySelectorAll(".numBtn");
let ops = document.querySelectorAll(".opBtn");
let clearAll = document.querySelector("#item1");
let del = document.querySelector("#item2");
let equal = document.querySelector("#item3");

let prev = document.querySelector(".prev");
let curr = document.querySelector(".curr");

clearAll.addEventListener("click", function(){
    curr.innerText = "";
    prev.innerText = "";
});

del.addEventListener("click", () => {
    curr.innerText = curr.innerText.slice(0, -1);
});

equal.addEventListener("click", () => {
    compute();
    prev.innerText = "";
});


let operation;

function append(num){
    if(num === "." && curr.innerText.includes(".")){
        return;
    }

    curr.innerText += num;
}

function chooseOperation(operand) {
    if(curr.innerText === "" && prev.innerText === ""){
        return;
    }
    else if(curr.innerText === "" && prev.innerText !== ""){
        operation = operand;
        return;
    }
    else if (prev.innerText !== ""){
        compute();
    }
    operation = operand;
    // curr.innerText = operand;
    prev.innerText = curr.innerText;
    curr.innerText = "";
}

function compute(operand) {
    let result = 0;
    const prevValue = parseFloat(prev.innerText);
    const currValue = parseFloat(curr.innerText);

    switch(operation) {
        case "/":
            result = prevValue / currValue;
            break;
        
        case "+":
            result = prevValue + currValue;
            break;

        case "-":
            result = prevValue - currValue;
            break;  

        case "*":
            result = prevValue * currValue;
            break;      
            
        default:
            return;
    }

    curr.innerText = result;
}

nums.forEach((num) => {
    num.addEventListener("click", () => {
        append(num.innerText);
    });
});

ops.forEach((op) => {
    op.addEventListener("click", () => {
        chooseOperation(op.innerText);
    });
});





