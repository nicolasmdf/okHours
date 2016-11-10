let time = {
  counter: 0,
  hours: 0,
  update: () => {
	         if (time.counter === 60) {
		         time.hours++;
		         time.counter = 0;
           }
           time.display();
    	     time.counter++;
           console.log(time.counter);
	         setTimeout(time.update, 100);
  },
  reset: () => {
                time.counter = 0;
                time.hours = 0;  
                time.display();
  },
  display: () => {
    document.getElementById("hoursPassed").innerHTML = time.hours + " hours without incident, well done!";
  }
};

time.update();