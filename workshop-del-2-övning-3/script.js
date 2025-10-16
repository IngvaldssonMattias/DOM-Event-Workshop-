//Driver: Mattias
//Navigator: Veronica

const addButton = document.createElement ("button")
const items = document.querySelectorAll ("li")

document.body.appendChild(addButton)
addButton.textContent = "Lägg till"

const listContainer = document.querySelector ("ul")
addButton.addEventListener ("click", ()=>{
const newItem = document.createElement ("li")
newItem.textContent = "itemX"
listContainer.appendChild(newItem)

})
items.forEach(item)