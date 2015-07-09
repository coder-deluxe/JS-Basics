//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
var inner = outer();

//Once you do that, invoke inner.

  //Code Here
inner();


//Next problem


var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
var getSentence = callFriend();
console.log(getSentence("435-215-9248"));

//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

/* NEED HELP */

  //Code Here
var counter = 0;

function makeCounter() {
    counter = counter + 1;
    console.log(counter);
}

var count = function() {
    makeCounter();
}

count() // 1
count() // 2
count() // 3
count() // 4


//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
*/

  //Code Here

var myFunction = function(pFunction) {
    return function newFunc() {
        return pFunction();
    }
};

console.log(myFunction(function() {
        return 'Only executed once';
    }
)());

//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters.
  The first parameter will be an anonymous function and the second parameter, 'N', will be a number.
  Now, in 'fnCounter', allow the anonymous function to be invoked 'N' number of times.
  After it's been invoked 'N' number of times, return 'STOP'.
*/

function fnCounter(pFunction, N) {
    var num1 = N;

    for(var i = 0; i <= num1; i++) {
        console.log(pFunction());
    }
    return "STOP";
}

var result = fnCounter(function(){return "I am the anonymous function";}, 5);

console.log(result);

//Next Problem




  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you
   expect to happen when the function is invoked. *Hint: setTimeout calls a function or evaluates an expression
    after a specified number of milliseconds.

    //Answer Here
    When the function "counter" is invoked, I believe that after 1 second of time a console.log statement will print
     1 on the console, then after 2 seconds console.log will print 2 on the console, then after 3 seconds the same
      will occur with 3 printed on the console, and again and again with 4 and 5.


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here
    I was wrong, it printed 5 "6" characters , one on each line, the first one starting after 2 seconds, and thereafter
    immediately after the prior one.


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

    //Code Here
for (var i = 1; i <= 5; i++) {

    (function(index) {
        setTimeout(function() {
            console.log(index)
        }, index*1000);
    })(i);
}


//Next Problem
var funcArray = [0, 1, 2, 3, 4, 5];

for (i in funcArray; i <= funcArray.length; i++) {
    console.log(funcArray[i]);
})


/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/

var funcArray = [0, 1, 2, 3, 4, 5];

for (var i = 0; i <= funcArray.length; i++) {
    console.log(funcArray[i]);
}

