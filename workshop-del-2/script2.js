//Driver: Isabelle
//Navigator: Mattias

const container = document.createElement("section");

container.classList.add("container");

const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");

box1.style.backgroundColor = "#ccf5ac";
box2.style.backgroundColor = "#36413e";
box3.style.backgroundColor = "#beb2c8";

box1.textContent = "Box 1";
box2.textContent = "Box 2";
box3.textContent = "Box 3";

document.body.appendChild(container);
container.appendChild(box1);
container.appendChild(box2);
container.appendChild(box3);

box1.addEventListener("mouseover", () => {
  box1.style.backgroundColor = "#beb2c8";
});

box2.addEventListener("mouseover", () => {
  box2.style.backgroundColor = "#ccf5ac";
});

box3.addEventListener("mouseover", () => {
  box3.style.backgroundColor = "#ccf5ac";
});

box1.addEventListener("mouseout", () => {
  box1.style.backgroundColor = "#ccf5ac";
});

box2.addEventListener("mouseout", () => {
  box2.style.backgroundColor = "#36413e";
});

box3.addEventListener("mouseout", () => {
  box3.style.backgroundColor = "#beb2c8";
});

function colorPicker() {}
