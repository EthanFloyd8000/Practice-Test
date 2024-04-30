//This file contains the practice exam for the test you will 
//be taking on thursday. Please go through it, and if you have
//any questions regarding any part of it, please let me know
//and we will go over it together


/*   
QUESTION 1
Below this comment, please make 3 variables.
the first variable needs to be a integer value,
the second variable needs to be a string value
and the third value needs to be a boolean value
you can name the variables whatever you want
*/
let egg = 12
let bird = "chicken"
let yolk = false
/* 
QUESTION 2
Inside this comment, i want you to type out the following answers to the questions
1: What is an integer data type?
2: What is a string data type
3: What is a boolean data type?
*/
/*
1. An integer data type is a variable with a number in it.
1. A string data type is a variable surrounded by quotes.
1. A boolean data type contains the statements (true or false).
*/
 
/* 
QUESTION 3
Below, you will see an integer value declared with the value of 12
below this comment, i want you to use an if else statement to check to see if
the variable is greater than 12. If it is greater than 12, console.log("hi")
if the variable is not greater than 12, use an else statement.
inside the else statement, console.log("bye")
*/
let number = 12;
if(number > 12){
    console.log("hi");
}
else{
    console.log("bye");
}
/*  
QUESTION 4
Below this comment, i want you to create a for loop. This for loop will check to see
if i is less than 12, and then increment the value
inside the for loop statement, console.log("hi")
*/
for(let i = 0; i < 12;i++){
    console.log("hi");
}

/*
QUESTION 5
Below, you will see that there is a variable declared
create a while loop that checks to see if the variable is less than 12
*/
while(number > 12){

}
/*
QUESTION 6
I want you to create a function named hello that console.log("hello")
then, i want you to call that function.
*/
function hello(){
    console.log("hello");
    hello();
}
/*
QUESTION 7
Inside the index.html, you will see a h1 ID of hello,
using getElementByID, i want you to select that h1 using the proper
syntax
*/
let hello = document.getElementById("hello");
/*Question 8
Now, using the selected HTML element, i want you to change the text
content of the h1 using .innerHTML
*/
h1.innerHTML = "hello"
/* Question 9
Inside the index.html file, you will notice that there is a p tag with
the class of hi. Using getElementByClassName, i want you to select that
paragraph
*/
let hi = document.getElementsByClassName("hi");
/*Question 10
Inside the index.html file, you will notice that there are 3 buttons
with the same class name associated with it. Using querySelectorAll, i want
you to select the 3 buttons.
*/
let hello = document.querySelectorAll("hello");