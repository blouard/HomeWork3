function geek() {
    var errorInteger = "Invalid integer input... Please try again...";
    var error101 = "A problem occur... Please try again...";
     var start, end, step, binary = "";
     var numbers = "";
     start = prompt("Enter the start :");
    end = prompt("Enter the end : ");
    step = prompt("Enter the step");
     if (Number.isInteger(parseInt(start)) == false || Number.isInteger(parseInt(end)) == false || Number.isInteger(parseInt(step)) == false) {
         document.getElementById("g").innerHTML = errorInteger;
     }
     else {

         numbers = generateNumbers([start, end, step]);
         document.getElementById("g").innerHTML =
             "The generate array is " + showNumber(numbers) + "<br>The sum is " + sum(numbers) + "<br>The binary of absolute element values are :" + binar(numbers)+"<hr>";

     }
}

function generateNumbers(input){
    var result = [];
    var save, i, j = 0;
    if ((input[0] > input[1]) && input[2] > 0) {
        save = input[1];
        input[1] = input[0];
        input[0] = save;
    }
    i = parseInt(input[0]);

    if (parseInt(input[2]) > 0) {
        while (i <= parseInt(input[1])) {
            result[j] = i;
            console.log("result[j] = " + result[j]);
            i += parseInt(input[2]);
            console.log("new i = " + i);
            j++;
        }
    }
    else {
        while (i >= parseInt(input[1])) {
            result[j] = i;
            console.log("result[j] = " + result[j]);
            i -= parseInt(input[2])*-1;
            console.log("new i = " + i);
            j++;
        }
    }
    return result;
}

function showNumber(input) {
    var result = "";
    for(var i=0; i < input.length; i++){
        if (i < input.length - 1){
            result += input[i] + ", ";
        }
        else {
            result += input[i];
        }
    }
    return result;
}


function sum(input){
    var total =  0;
    for(var i=0;i<input.length;i++)
    {
        if(isNaN(input[i])){
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

function binar(input) {
    var binary;
    var result = "";

    for(var i=0;i<input .length;i++)
    {
        binary = (input[i] >>> 0).toString(2);
        if (i < input.length - 1){
            result += binary + ",";
        }
        else {
            result += binary;
        }
    }
    return result;
}