

//This function takes in array(drivers) and a name and uses a filter to search for matches
function findMatching(drivers,name){
    const newCollection = []; 
  for (const driver of drivers) {  //By using the .toUpperCase() method and .charAt method the first letter can be made uppercase
    let lower = driver.charAt(0).toUpperCase() + driver.slice(1); // This changes the first letter in driver to uppercase and concatanates the rest of the letters to the end
    if (driver == name || name == lower ) {  // By using the or operator the same name with different case can be compared
        newCollection.push(driver);
    }
  }
  return newCollection;
}
//This function matches the first letters in the array drivers with the first letter of name.
function fuzzyMatch(drivers,name) {  
    const newCollection = [];
    for (const driver of drivers) {
      let beginningd = driver.charAt(0);  //Using the .charAt method you can obtain the first letter in a string (at index 0)
      let beginningn = name.charAt(0);   
      if (beginningn == beginningd) {
          newCollection.push(driver);
      }
    }
    return newCollection;
}
// This function searches through an array of objects for a value matching the parameter namez.
function matchName(drivers,namez) {
    const newCollection = [];
    
    for (const driver of drivers) {
      if (driver.name == namez) {
          newCollection.push(driver);
      }
    }
    return newCollection;
}