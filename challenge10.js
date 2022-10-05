// Write a function called debounce that accepts a function and returns a new function 
// that only allows invocation of the given function after interval milliseconds have passed 
// since the last time the returned function ran.

// Additional calls to the returned function within the interval time should not be invoked or queued, 
// but the timer should still get reset.

// For examples of debouncing, check out https://css-tricks.com/debouncing-throttling-explained-examples/

function debounce(callback, interval) {
    // ADD CODE HERE
    let time
    let func = () => 
    {
        if( time == undefined ){ 
            time = 0
            return callback()
        }
        else
        {
            let timer = setInterval( () => {
                time+=1000
                 console.log(time)
            },1000)

            if (time >= interval){
                clearInterval(timer)
                time = 0
                return callback()
            }
        }

    }
    return func
}
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  function giveHi() { return 'hi'; }
  const giveHiSometimes = debounce(giveHi, 3000);
  console.log(giveHiSometimes()); // -> 'hi'
  setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
  setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
  setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'

  
  