// Write a function called everyXsecsForYsecs that will accept three arguments: 
// a function func, a number interval, and another number duration.

// everyXsecsForYsecs will execute the given function every interval number of milliseconds, 
// but then automatically stop after duration milliseconds.

// Then pass the below sayHi function into an invocation of everyXsecsForYsecs 
// with 1000 interval time an 5000 duration time.What do you expect to happen?

function everyXsecsForYsecs(func , interval , duaration) {
    // ADD CODE HERE
    let funcTime = 0
    let hiTime = 0
    let repeater = () => {
        func()
        funcTime+=1
        if(funcTime == duaration) clearInterval(inputFunc)
    }
    let sayHi = () => {
        console.log("Hi")
        hiTime+=1
        if( hiTime == 5) clearInterval(hiFunc)
    }

    let inputFunc = setInterval(repeater , interval*1000)
    let hiFunc = setInterval(sayHi , 1000)


  }
  // Uncomment the following lines to check your work!
  function theEnd() {
    console.log('This is the end!');
  }
  everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
  