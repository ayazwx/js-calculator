var numbers = document.querySelectorAll("#number");
var value = document.querySelector("#value");
var options = document.querySelectorAll("#option");
var smallValue = document.querySelector('#smallValue');
var optState = false;
var opt = "";
var result = 0;

numbers.forEach(number => {
    number.addEventListener('click',showNumber);
    

    function showNumber(){
        if(value.textContent == "0" || optState)(
            value.textContent = ""
        );

        value.textContent += this.textContent;
        optState = false;
    }
})

options.forEach(operator => {
    operator.addEventListener('click', calculate);

    function calculate(){
        optState = true;
        var newOpt = this.textContent;
        smallValue.textContent = value.textContent;

        switch(opt){
            case "+": 
                result = Number(smallValue) + Number(value.textContent);
                break;

            case "-": 
                result = Number(smallValue) - Number(value.textContent);
                break;

            case "*": 
                result = Number(smallValue) * Number(value.textContent);
                break;

            case "/": 
                result = Number(smallValue) / Number(value.textContent);
                break;

            case "=":
                Number(value.textContent) = result;
                break;
            case "AC":
                value.textContent = "0";
                smallValue.textContent = "0";
                break;
        }
        Number(smallValue) = Number(value.textContent);
        opt = newOpt;
    }
})