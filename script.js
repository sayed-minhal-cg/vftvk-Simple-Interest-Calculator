// function to calculate Rate of Interest
function compute() {
  // collect value of Principal Amount into variable
  var principal = document.getElementById("principal").value;

  // collect value of Rate of Interest into variable
  var rate = document.getElementById("rate").value;

  // collect value of Years into variable
  var years = document.getElementById("years").value;

  // Principal Amount Validation - No Negative or Zero
  if (principal <= 0) {
    //Feedback for incorrect input
    alert("Enter a positive number");

    //Set focus to Principal Field
    document.getElementById("principal").focus();
  } else {
    // If user input is valid Calculate the Interest
    var interest = (principal * rate * years) / 100;

    // Generate new string to update result and show to the result
    var result = `If you deposit <strong>${principal}</strong>, 
  at an interest rate of <strong>${rate} %</strong>.
  You will receive an amount of <strong>${interest}</strong>,
  in the year <strong>${
    new Date().getFullYear() + parseInt(years, 10)
  }</strong>`;

    // Set/Update the text in result span
    document.getElementById("result").innerHTML = result;
  }
}

// Funciton to update Rate of interest raible on every change by user and display
function setRate(val) {
  rate = val;
  document.getElementById("rateOfInterest").innerHTML = val + "%";
}
