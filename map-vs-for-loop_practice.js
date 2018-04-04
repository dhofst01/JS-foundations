
// Map vs. For Loop Practice

// Below are exercises to get you seeing the differences between using a map and a for loop. Beneath each prompt write the code to fulfill the exercise requirement.


// Exercise 1
// Consider this variable:
var nums = [1, 2, 3, 4, 5]
var mult = []
// Write a for loop that saves the result of each number multiplied by 5 to another array.for
for (i=0; i < nums.length; i++){
    mult.push(nums[i]*5)
console.log(mult)
}


// Exercise 2
// Use a map on the nums array that saves the result of each number multiplied by 5 to another array.

let mult2 = nums.map((num) => {
    return num * 5
})

// Consider this variable:
var numbers = [11, 22, 33, 44, 55, 66]

var numb11 = []
for (counter = 0; counter < numbers.length; counter++)
{
    if (numbers[counter]%2){
        numb11[counter] = numbers[counter]
    }
}
// Write a for loop that saves all numbers in the numbers array that are evenly divisible by 3 into another array.
var div3Array = []
for (counter = 0; counter < numbers.length; counter++)
{
    console.log("numbers: xx " + numbers[counter])
     if ((numbers[counter] % 3) == 0)
     {
        console.log("numbers: " + numbers[counter])
        div3Array.push(numbers[counter])
     }

}

// Exercise 4
// Use map on the numbers array to save any numbers from the array that are evenly divisible by 3 into another array.\\\\\\\

let arrayDiv4 = numbers.filter((num1)=>{
    return (num1%3 == 0)
})

// Exercise 5
// Consider this variable:
var toons = [{name: "Tom", animal: "cat"}, {name: "Jerry", animal: "mouse"}, {name: "Bugs", animal: "rabbit"}, {name: "Daffy", animal: "duck"}, {name: "Felix", animal: "cat"}, {name: "Oswald", animal: "rabbit"}]
// Write a for loop that saves all cat characters to another array.
var catChar = []
for (name = 0; name < toons.length; name ++){
    if (toons[name].animal == "cat"){
    catChar.push(toons[name])
    }
}

// Exercise 6
// Use map on the toons array to save all rabbit characters to another array.

var toonsArray1 = toons.map((toon)=>{
    if (toon.animal == "rabbit")
        return toon
})

// Exercise 7
// Write a for loop to save the names of each character to another array.
var animalName = []
for (j=0; j < toons.length; j++){
    animalName[j] = toons[j].name
}

// Exercise 8
// Use map on the toons array to save a description of each character to another array.
var anName = toons.map((toon)=>{
    return toon.name
})
// Exercise 9
// Consider this variable:
var people = [{firstName: "Alan", lastName: "Grant"}, {firstName: "Ellie", lastName: "Sattler"}, {firstName: "Ian", lastName: "Malcolm"}]
// Write a for loop that creates a new object for every person that has a key value for firstName, lastName, and fullName and saves each new object into another array.
var aa = []
for (k=0; k < people.length; k++){
    aa[k] = people[k]
    aa[k].fullName = people[k].firstName + " " + people[k].lastName
}

console.log(aa)

// Exercise 10
// Refactor the above code to use a map on the people array to achieve the same result.

var bb = people.map((pep)=>{
    pep.fullName = (pep.firstName + " " + pep.lastName )
    return pep
})

// Exercise 11

var people = [{firstName: "Alan", lastName: "Grant"}, {firstName: "Ellie", lastName: "Sattler"}, {firstName: "Ian", lastName: "Malcolm"}]
// Consider this function:
function addTitle(person){
  return "Dr. " + person.firstName + " " + person.lastName
}
// Write a for loop that iterates through each person in the people array and stores the result of addTitle on each element to another array.
var titleArray = []
    for (tt=0; tt < people.length; tt++){
        titleArray[tt] = addTitle(people[tt])
    }

// Exercise 12
// Use map on the run addTitle on each element in the people array and store the result of each call into another array.

var aTitle = people.map(addTitle)
******Look at below for syntax
var peoplewithtitles = people.map(x => { addDr(x)})

var bb = people.map(addT)
