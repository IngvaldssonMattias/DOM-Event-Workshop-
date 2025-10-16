//Driver: Veronica
//Navigator: Isabelle

const div = document.querySelector(".container")

const colorButton = document.createElement("button")
const textButton = document.createElement("button")
const clearButton = document.createElement("button")

document.body.appendChild(colorButton)
document.body.appendChild(textButton)
document.body.appendChild(clearButton)

colorButton.textContent = "Ändra färg"
textButton.textContent = "Lägg till text"
clearButton.textContent = "Rensa text"

const text = document.createElement("p")
text.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ducimus sunt voluptates, similique, facere voluptate quod vel dignissimos sapiente praesentium odio repudiandae delectus magni, totam deleniti itaque. Dolorum, aliquid similique."

document.body.appendChild(text)

colorButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#c8d5b9"
})

textButton.addEventListener("click", () => {
    const newText = document.createElement("p")
    newText.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ducimus sunt voluptates, similique, facere voluptate quod vel dignissimos sapiente"
    text.appendChild(newText)
})

clearButton.addEventListener("click", () => {
    document.body.removeChild(text)
})

const alertButton = document.createElement("button")
alertButton.textContent = "Alert"
document.body.appendChild(alertButton)

function myAlert() {
    alert("Hej")
}

alertButton.addEventListener("click", () => {
    myAlert()
})