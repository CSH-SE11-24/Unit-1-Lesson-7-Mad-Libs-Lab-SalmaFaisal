// Console log a welcome message with instructions to mad libs

let Start = prompt("Welcome to my mad libs story game")


// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words

let adjective = prompt("Enter an adjective")
let pluralNoun = prompt("Enter an plural noun")
let verb = prompt("Enter an verb")
let adjectiveTwo = prompt("Enter another adjective")


// Create an array that stores the values the user entered

let newArray = []
newArray.push(adjective)
newArray.push(pluralNoun)
newArray.push(verb)
newArray.push(adjective)

// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive




console.log(`In a small: ${newArray[0]} school in the Bronx, there was a problem with too many: ${newArray[1]} These  ${newArray[2]} loved to  ${newArray[3]} which caused Mr.P so many hedaches. However, no one wanted to remove them because they were too  ${newArray[1]}so they stayed there forever`)



