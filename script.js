var numbers = document.querySelectorAll("#number");
var value = document.querySelector("#value");
var options = document.querySelectorAll("#option");
var smallValue = document.querySelector('#smallValue');
var optState = false;
var opt = "";
var final = 0;

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
    smallValue = value.textContent;

    function calculate(){
        optState = true;
        var newOpt = this.textContent;

        switch(opt){
            case "+": 
                value.textContent = final + Number(value.textContent);
                break;

            case "-": 
                value.textContent = final - Number(value.textContent);
                break;

            case "*": 
                value.textContent = final * Number(value.textContent);
                break;

            case "/": 
                value.textContent = final / Number(value.textContent);
                break;

            case "=":
                final = Number(value.textContent);
                break;
            case "AC":
                value.textContent = "";
                break;
        }
        final = Number(value.textContent);
        opt = newOpt;
    }
})