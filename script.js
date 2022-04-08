const btn = document.getElementById('go-button')
btn.addEventListener('click', ageCalculator)

function ageCalculator() {
    let userinput = document.getElementById("dob").value;
    let dob = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.getElementById("age-display").innerHTML = "**Choose a date please!";  
      return false; 
    } else {
    

    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between the current day and the DOB
    const diffInTime = Date.now() - dob.getTime();

    // Calculating the no. of days 
    const diffInDays = Math.round(diffInTime / oneDay);
    
    //display the calculated age
    return document.getElementById("age-display").innerHTML =  "You are " + diffInDays + " days old";
    }
}