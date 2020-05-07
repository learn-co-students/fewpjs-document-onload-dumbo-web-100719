// Your code goes here
document.addEventListener("DOMContentLoaded", () => {
    let n = document.getElementById("text");
    console.log("The DOM has loaded");
    n.textContent = ("This is really cool!")
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  