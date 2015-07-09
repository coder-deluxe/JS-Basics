//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
    if (name === "Tyler") {
        return true;
    }
    else {
        return false;
    }
}
    isTyler("Robert");


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName() {
    var aName = prompt("What is your name ?");
    return aName;
}
  var gName = getName();
  console.log(gName);

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome() {
    var response = getName();
    alert("Welcome," + " " + response);
}
  welcome();

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
Arguments are the values placed in ( ) in a call to a function.  The arguments are handed into the function.getName()
Parameters are the variable names that are in the ( ) of the function definition.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
0, false, undefined, null, NaN, '', use an if statement , like if (booleanVar1 === false) {}


//Next Problem



//Create a function called myName that returns your name

  //Code Here
function myName(name) {
    var theName = name;
    return theName;
}
  myName("Robert");

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

  var newMyName = myName("John");

//Now alert the result of invoking newMyName
  alert(newMyName);



//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn() {
    return function(name) {
        return name;
    }
}


//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();


//Now invoke innerFn.
innerFn("Robert");