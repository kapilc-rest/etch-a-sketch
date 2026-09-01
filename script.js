let container = document.querySelector("#container");

function getUserChoice() {
    return +prompt("Number of rows and columns:");
    
}

function addGrid(size) {
    container.innerHTML = "";
    for(let i = 0; i < size; i++){
        let subDiv = document.createElement("div");
        subDiv.classList.add("row");
        for(let j = 0; j < size ; j++) {
            let subSubDiv = document.createElement("div");
            subSubDiv.classList.add("gridMeow");
            subDiv.appendChild(subSubDiv);
        }
        container.appendChild(subDiv);
    }
    playGrid();
}

function makeGrid() {
    let size = getUserChoice();
    if(isNaN(size) || size <= 0 || size > 100) 
        alert("Don't play with me");
    else
        addGrid(size); 
}

function playGrid() {
    let gridElements = document.querySelectorAll(".gridMeow")
    gridElements.forEach( (gridMeow) => {
        gridMeow.addEventListener("mouseenter", () => {
            gridMeow.style.backgroundColor = "black";
        })
    });
}

let button = document.querySelector("button");
button.addEventListener("click", () => makeGrid())

addGrid(16);