
// Objects Practice 1: Accessing Properties

// Below are exercises in accessing the properties of Javascript Objects. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
// Consider this variable:
var person = { fName: "Arthur", lastName: "Dent" ,fullName:function(){
    return this.fName + " " + this.lastName}
}
// Write the code that uses dot notation to access the first name of the person object.
console.log(person.fName)
// Exercise 2
// Write the code that uses dot notation to access the last name of the person object.
console.log(person.lastName)

// Exercise 3
// Write the code that uses bracket notation to access the first name of the person object.
console.log(person["fName"])
// Exercise 4
// Write the code that uses bracket notation to access the last name of the persion object.
console.log(person["lastName"])

// Exercise 5
// Update the person object to have a method called fullName that returns the first and last name of the person object in one string. Call the method below.
console.log(person.fullName())
// Exercise 6
// Consider this variable.
var lunch = { name: "PB and Banana", type: "sandwich", ingredients: ["bread", "peanut butter", "banana"] }
// Write the code that accesses the ingredients property of the lunch object. Provide the answer in dot and bracket notation.
console.log(lunch.ingredients)
console.log(lunch['ingredients'])

// Exercise 7
// Write the code that accesses the first item in the ingredients property of the lunch object. Provide the answer in dot and bracket notation.
console.log(lunch.ingredients[0])

console.log(lunch['ingredients'][0])

// Exercise 8
// Write the code that accesses the second item in the ingredients property of the lunch object. Provide the answer in dot and bracket notation.
console.log(lunch.ingredients[1])

console.log(lunch['ingredients'][1])
// Exercise 9
// Write a function that takes an object like the one above and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

function combine(){
    console.log("Ingredients are "+lunch.ingredients[0]+", "+lunch.ingredients[1]+", "+lunch.ingredients[2])
}
// Exercise 10
// Add a method to the object that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

var lunch = { name: "PB and Banana", type: "sandwich", ingredients: ["bread", "peanut butter", "banana"], combine1:function(){
    return("Ingredients are " + this.ingredients[0] + ", " + this.ingredients[1] + ", " + this.ingredients[2]
    )} }
