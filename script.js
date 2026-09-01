let container = document.querySelector("#container");

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

addChild(size);

let divSize = subDiv.width;
    console.log(divSize);