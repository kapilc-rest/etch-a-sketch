let container = document.querySelector("#container");
let size = 16;

function getUserChoice() {
    return prompt("Number of rows and columns:");
    
}

function addGrid(size) {
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
}

function makeGrid() {
    let size = getUserChoice();
    addGrid(size);
}

let button = document.querySelector("button");
button.addEventListener("click", () => makeGrid())

console.log(size);
addGrid(size);