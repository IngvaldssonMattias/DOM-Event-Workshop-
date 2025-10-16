//Navigator: Isabelle
//Driver: Veronica

const colorButton = document.createElement("button")
colorButton.textContent = "Byt färg"
document.body.appendChild(colorButton)

colorButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#e0f2fe"
})


const sleepButton = document.createElement("button")
sleepButton.textContent = "Lägg till"
document.body.appendChild(sleepButton)

sleepButton.addEventListener("click", () => {
    const sleep = document.createElement("p")
    sleep.textContent = "Jag sov 7 timmar."
    document.body.appendChild(sleep)

    removeButton.addEventListener("click", () => {
    document.body.removeChild(sleep)
    })
})

const removeButton = document.createElement("button")
removeButton.textContent = "Ta bort"
document.body.appendChild(removeButton)


const header = document.querySelector("h1")
header.textContent = "IsabelleMattiasVeronica"