const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.style.border = "1px solid black";
    newDiv.style.height = "200px";
    newDiv.style.width = "200px";
    newDiv.style.flex = "1 0 20%";
    newDiv.classList.add("" + i);
    container.appendChild(newDiv);
}