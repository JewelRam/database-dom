const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
const heh = loadDatabase("HomeInventory")
const art = document.getElementById("myStuff");

for(key in heh) {
    console.log(heh[key])
  for (let i =0; i < heh[key].length; i++) {
    
    let makeElement =  document.createElement("section");
    let newP = document.createElement("p");
    newP.textContent = heh[key][i].name
    makeElement.appendChild(newP);
    art.appendChild(makeElement);
    
     makeElement =  document.createElement("section");
     newP = document.createElement("p");
    newP.textContent = heh[key][i].location
    makeElement.appendChild(newP);
    art.appendChild(makeElement);

    makeElement =  document.createElement("section");
     newP = document.createElement("p");
    newP.textContent = heh[key][i].description
    makeElement.appendChild(newP);
    art.appendChild(makeElement);
  }
}

function makeElement ( ) {
    
}