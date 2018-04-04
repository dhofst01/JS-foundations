
// Array Methods with Callbacks Practice
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function alertFinished(){
  alert('Finished my homework');
}
doHomework('math', alertFinished);

// Below are exercises in using array methods that use callbacks. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
// Consider this variable:
var numbers = [1, 26, 3, 7, 8]
// Write a function called isOdd that determines if a number is odd. Then use the filter method on the numbers array using the isOdd function as the callback to return all the odd numbers from the numbers array.

function isOdd(num){
    if (num%2 == 0)
    {
      return num
    }
}
var numb2 = numbers.filter(isOdd)



// Exercise 2
// Write a function called isEven that determines if a number is even. Then use the filter method on the numbers array using the isEven function as the callback to return all the even numbers from the  numbers array.

function isOdd(num){
    if (num%2 == 1)
    {
      return num
    }
}
var numb2 = numbers.filter(isOdd)
// Exercise 3
// Consider this variable:
var sites = ["codepen.io", "codecademy.com", "coursera.org", "egghead.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]
// Write a function called dotCom that determines if a string contains .com. Then use the filter method on the sites array using the dotCom function as the callback to return all the sites that contain .com.

function dotCom(com){
    if (com.includes(".com")){
        return com
    }
}
var com1 = sites.filter(dotCom)
// Exercise 4
// Write a function called dotIo that determines if a string contains .io. Then use the filter method on the sites array using the dotIo function as the callback to return all the sites that contain .io.

function dotIo(io){
    if (io.includes(".io")){
        return io
    }
}
var io1 = sites.filter(dotIo)
// Exercise 5
// Write a function called dotOrg that determines if a string contains .org. Then use the filter method on the sites array using the dotOrg function as the callback to retrun all teh sites that contain .org.
function dotOrg(io){
    if (io.includes(".org")){
        return io
    }
}
var io1 = sites.filter(dotOrg)

// Exercise 6
// Write the code that uses an array method that takes the dotCom function as a callback and returns whether or not the sites array contains any .com sites.

var io1 = sites.filter(dotCom)
console.log(io1.length)
if (io1.length >0)
{
   console.log("New Site Arrays Contain .Com Sites: " + io1)
}
else {
    console.log("NADA")
}

// Exercise 7
// Write the code that uses an array method that takes the dotCom function as a callback and returns whether or not the sites array only contains .com sites.


var io1 = sites.filter(dotCom)
console.log(io1.length)
if (io1.length == sites.length)
{
   console.log("Site Arrays Only Contain .Com Sites: " + io1)
}
else
{
    console.log("Contains more than .com ")
}

// Exercise 8
// Write the code that uses an array method that takes the dotIo function as a callback and returns whether or not the sites array contains any .io sites.

// Exercise 9
// Write the code that uses an array method that takes the dotIo function as a callback and returns whether or not the sites array only contains .io sites.

// Exercise 10
// Write the code that uses an array method that takes the dotCom function as a callback and returns the first instance of a .com site.
