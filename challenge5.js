// Create a function limitedRepeat that console logs hi for now every second, 
// but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.

function limitedRepeat() {
    // ADD CODE HERE
    let time = 0
    let timer = () => {
        time+=1
        console.log("hi")

    if(time == 5) clearInterval(repeater)

    }

    let repeater = setInterval( timer , 1000)
}
    
    
  // Uncomment the following line to check your work!
  limitedRepeat(); // should log (every second, for 5 seconds): hi for now
  