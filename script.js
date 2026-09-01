let container = document.querySelector("#container");

function addChild(k) {
    for(let i=0; i<k; i++){
        let subDiv = document.createElement("div");
        subDiv.classList.add("grid");
        let divSize = subdiv.width;
        console.log(divSize);
        for(let j = 0; j < k ; j++) {
            let superSubDiv = document.createElement("div");
            superSubDiv.classList.add("meow");
            subDiv.appendChild(superSubDiv);
        }
        container.appendChild(subDiv);
        console.log(i);
    }
}

addChild(16);