//1. Make a button appear on the page and make it alert a nice message
let button = $('<button class="btn btn-success m-2">CLICK ME TO ALERT A NICE MESSAGE</button>');
$('body').append(button);
button.click(function () {
    alert("HELLO THERE");
})

//2. When second button is clicked - display an alert with the message in input field
$('#secondButton').click(function (e) {
    e.preventDefault();
    let textValue = $("input[type=text]").val()
    alert(textValue);
})

//3a. hover over div to change color
let divHover = $('#randomDiv')
$(divHover).mouseover(function () {
    divHover.css('background-color', 'purple');
})

//3b. change back to originial color when mouse off
$(divHover).mouseout(function () {
    divHover.removeAttr('style'); 
})

//4. Click paragraph to change to random color
let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'black'];

function getRandomColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}
let para = $('#para');
$(para).click(function () {
    let randomColor = getRandomColor();
    para.css('color', randomColor);
})

//5a. add button and empty div
let buttonTwo = $('<button class="btn btn-success m-2">CLICK ME TO WRITE NAME</button>');
$('body').append(buttonTwo);
let emptyDiv = $('<div></div>')
$('body').append(emptyDiv);

//5b. When the button is clicked, add a span that contains your name to the empty div
$(buttonTwo).click(function () {
    let span = $('<span>Amanda</span>')
    $(emptyDiv).append(span);
})

//6. Create an array of friends, when button clicked add each friend as an li to ul
let friends = ["Alex", "Alexandra", "Roger", "Adam", "Carolyn", "Matt", "Kim", "Amanda", "Adrianna", "Marissa", "Juliana"]
let index = 0;

$('#friendBtn').click(function () {
    if (index < friends.length) {
        let listItem = $('<li></li>');
        $('#list').append(listItem);
        let listName = friends[index];
        $(listItem).append(listName);
        index++;
    } else{
        index = 0;
    }
})
