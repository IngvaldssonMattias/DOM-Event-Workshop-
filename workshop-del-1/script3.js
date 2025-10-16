//Navigator: Mattias
//Driver: Isabelle

const changeButton = document.createElement("button");

document.body.appendChild(changeButton);

changeButton.textContent = "Byt rubrik";

const title = document.querySelector("h1");

changeButton.addEventListener("click", () => {
  title.textContent = "Ny rubrik - nu händer det saker";
});

const textButton = document.createElement("button");
document.body.appendChild(textButton);

textButton.textContent = "Ändra paragraf";
const text = document.querySelector("p");

textButton.addEventListener("click", () => {
  text.textContent = "Jag gillar att koda för att det är kul att koda";
});

const rubrikButton = document.createElement("button");

document.body.appendChild(rubrikButton);

rubrikButton.textContent = "Byt färg på rubrik";

rubrikButton.addEventListener("click", () => {
  title.style.color = "#dc2626";
});
