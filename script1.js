//Navigator: Veronica
//Driver: Mattias

const h2= document.createElement("h2")
h2.textContent="Min rubrik för dagen"
h2.style.color="#1e3a8a"
document.body.appendChild(h2)

const p= document.createElement("p")
p.textContent="Soligt, blå himmel, 10 grader"
p.style.color="#fef3c7"
h2.appendChild(p)

const div= document.createElement("div")
div.textContent="Det här är en färgad ruta"
div.style.color="#10b981"
p.appendChild(div)

const p2= document.querySelector ("p")
p2.textContent="2025-10-16"



