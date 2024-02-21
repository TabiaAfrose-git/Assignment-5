console.log("Hello promi!!! I am your friend JS.");

document.getElementById("seat-count").innerText = 5;
document.getElementById("Total-price").innerText = 500;
const div =  document.createElement("div");
div.classList.add("flex-s");

const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

p1.innerText = "A1";
p2.innerText = "Economic";
p3.innerText = "550";
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);
document.getElementById("selected-seat-container").appendChild(div);
console.log(div);


