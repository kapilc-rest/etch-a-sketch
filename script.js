let container = document.querySelector("#container");

function addChild(j) {
    for(let i=0; i<j; i++){
        let subDiv = document.createElement("div");
        subDiv.classList.add("grid");
        container.appendChild(subDiv);
        console.log(i);
    }
}

function addMoreChild() {
    addChild(16);
    for(let i = 0; i < 16; i++){
        let superSubDiv = document.createElement("div");
        superSubDiv.classList.add("meow");
        subDiv.appendChild(superSubDiv);
        console.log(i);
    }
}

addMoreChild();