//create new div

let container = document.querySelector("#container");

function addChild(j) {
    for(let i=0; i<j; i++){
        let subDiv = document.createElement("div");
        subDiv.classList.add("grid");
        container.appendChild(subDiv);
        console.log(i);
    }
}

addChild(16);