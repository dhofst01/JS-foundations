
// Array Methods Practice

// Below are exercises in using array methods. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
// Consider this variable:
var groceryList1 = ["apples", "carrots", "oatmeal"]
// Write the code that will add "granola" to the end of array without altering the original array.

var newList = ["granola"]
newList = groceryList1.concat(newList)
console.log(newList)

// Exercise 2
// Consider this variable:
var groceryList2 = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
console.log(groceryList2.push("soda"))
// Exercise 3
// Consider this variable:
var numbers1 = [1, 2, 3, 4, 5]
// Write the code that will add the number 0 to the beginning of the array without altering the original array.
var newArry =[0]
newArry.concat(numbers1)

// Exercise 4
// Consider this variable:
var numbers2 = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the original array.
numbers2.unshift(0)
// Exercise 5
// Consider this variable:
var numbers3 = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
for (l = 0; l < numbers3.length; l++)
{
    if (numbers3[l] == 2)
    {
      console.log(l)
      break;
    }
}
console.log("done")

function findFirstMatchingNumber(element){
    return element == 2
}
numbers3.findIndex(findFirstMatchingNumber)

// Exercise 6
// Write the code that finds the index of the last appearance of the number 2.
var size = numbers3.length - 1
for (l = size; l > 0; l--)
{
    console.log("going through " + l)
    if (numbers3[l] == 2)
    {
      console.log(l)
      break;
    }
}
console.log("done")

// Exercise 7
// Consider this variable:
var chars = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the chars array together into a string.
console.log(chars.join(''))


// Exercise 8
// Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.
var char1 = []
char1 = char1.concat(chars)
console.log((char1.reverse().join('')))

// Exercise 9
// Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.
var char1 = []
char1 = char1.concat(chars)
console.log((char1.reverse().join('-')))
// Exercise 10
// Write the code that brings all the letters in the charsReversed Array together into a string without separato
