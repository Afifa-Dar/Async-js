// Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.

function helloGoodbye() {
    // ADD CODE HERE
    console.log("hello")
    setTimeout( () => {
        console.log("good bye")
    } , 2000)
  }
  // Uncomment the following line to check your work!
  helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye
  
  