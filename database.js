

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
const HomeInventoryDatabase = loadDatabase("HomeInventory")
const art = document.getElementById("myStuff");
const homeInventoryFragment = document.createDocumentFragment()

const populateDomForDataSet = (dataSet) => {
    const invTable = HomeInventoryDatabase[dataSet]
    invTable.forEach(item => {
    let makeElement =  document.createElement("section");
    for(let key in item) {
    
    const newP = document.createElement("p");
    newP.textContent = `${key}: ${item[key]}`
    makeElement.appendChild(newP);
    
    }
    homeInventoryFragment.appendChild(makeElement);

})

}
populateDomForDataSet("furniture")   
art.appendChild(homeInventoryFragment)

     