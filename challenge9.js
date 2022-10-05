// Write a SecondClock class, with two methods: start and reset.​
// start: upon invocation, invokes a callback (this.cb, defined in the constructor) on an argument every second, 
// with the argument to the callback being the current seconds "value".

// In other words, the callback gets invoked every second on the "seconds hand" of the clock. 
// Always start with 1 and don't utilize the seconds value of the current computer clock time.

// The first "tick" with value 1 occurs 1 second after the initial "secondClock" invocation.
// The second "tick" with value 2 occurs 2 seconds after the initial "secondClock" invocation.
// ...
// The sixtieth "tick" with value 60 occurs 60 seconds after the initial "secondClock" invocation.
// The sixty-first "tick" with value 1 occurs 61 seconds after the initial "secondClock" invocation.
// The sixty-second "tick" with value 2 occurs 62 seconds after the initial "secondClock" invocation.
// etc.
// reset: upon invocation, completely stops the "clock".
// Also resets the time back to the beginning.
// ​
// Hint: look up setInterval and clearInterval.

class SecondClock {
    constructor(cb) {
      // ADD CODE HERE
    }
    // ADD METHODS HERE
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const clock = new SecondClock((val) => { console.log(val) });
  // console.log("Started Clock.");
  // clock.start();
  // setTimeout(() => {
  //     clock.reset();
  //     console.log("Stopped Clock after 6 seconds.");
  // }, 6000);
  