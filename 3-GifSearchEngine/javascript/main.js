//1. Grab the input

var updateButton = document.querySelector(".js-go");
var userInput = document.querySelector(".js-userinput");

updateButton.addEventListener('click', function() {
    var input = document.querySelector("input").value;
    console.log(input);
    pushToDOM(input);
    
})

userInput.addEventListener('keypress', function(event) {

    var input = document.querySelector("input").value;
    console.log(input);

    //if the key ENTER is pressed...
    if(event.which === 13) {
        pushToDOM(input);
    }
    
})


//2. Work with API data



//3. Show the GIFs

function pushToDOM(input) {
    var container = document.querySelector(".js-container");
    container.innerHTML = input;
}