var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var describe = document.getElementById("describe")




function inputLength() {
    return input.value.length;
}

// this makes the customizeable textbox turn into an input when clicked

describe.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("empty").innerHTML = describe.value;
        describe.value = ""

    }

})

function createListElement() {
    var li = document.createElement("li");
    li.classList.add("list");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    // this will add the line strike upon clicking the item
    li.addEventListener("click", function() {
            li.classList.toggle("done");
        })
        // adds a button enxt to the list element
    var bu = document.createElement("button");
    bu.classList.add("removeButton");
    bu.appendChild(document.createTextNode("x"));
    li.appendChild(bu)
    bu.onclick = removeParent;
}

function removeParent(event) {
    event.target.parentElement.remove();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// remove item when clicked