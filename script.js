let container = document.querySelector("#container");

function getUserChoice() {
    return prompt("Number of rows and columns:");
    
}

function addChild(size) {
    for(let i = 0; i < size; i++){
        let subDiv = document.createElement("div");
        subDiv.classList.add("grid");
        for(let j = 0; j < size ; j++) {
            let superSubDiv = document.createElement("div");
            superSubDiv.classList.add("meow");
            subDiv.appendChild(superSubDiv);
        }
        container.appendChild(subDiv);
    }
}


let button = document.querySelector("button");
button.addEventListener("click", () => makeGrid())