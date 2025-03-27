///////////////////////////////////////////////////////
///////////////////Rotating Titles/////////////////////
//Credit to https://codepen.io/alphardex/pen/WNNVJeZ///
///////////////////////////////////////////////////////
let words = document.querySelectorAll(".word");
words.forEach(word => {
  let textContent = word.textContent; // Get the full text including spaces
  word.textContent = ""; // Clear original word text

  // Split the word into letters, including spaces
  let letters = textContent.split(""); 

  // Create a span for each letter, keeping spaces intact
  letters.forEach(letter => {
    let span = document.createElement("span");
    span.textContent = letter === " " ? "\u00A0" : letter; // Use non-breaking space for the space character
    span.className = "letter"; // Add "letter" class to each span
    word.append(span); // Append the letter span to the word
  });
});

// Initially, set the first word to be visible
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1"; // Make the first word visible

let resetWords = () => {
  // Reset all words' opacity and animation states
  words.forEach(word => {
    word.style.opacity = "0"; // Hide all words
    Array.from(word.children).forEach(letter => {
      letter.classList.remove("behind", "in", "out"); // Reset all animations
    });
  });
};

let rotateText = () => {
  resetWords(); // Reset the word states before rotating
  
  let currentWord = words[currentWordIndex]; // Get the current word
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1]; // Get the next word

  // Rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.classList.add("out"); // Add "out" class for rotation effect
    }, i * 80); // Delay based on the letter index
  });

  // Make next word visible and rotate in letters
  nextWord.style.opacity = "1"; // Set the opacity of the next word to 1
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.classList.add("behind"); // Set letters to "behind" state initially
    setTimeout(() => {
      letter.classList.remove("behind"); // Remove "behind" class
      letter.classList.add("in"); // Add "in" class to start the rotation
    }, 340 + i * 80); // Timing for the animation of each letter
  });

  // Update the current word index for the next rotation
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

// Start rotating and continue every 4 seconds
rotateText();
setInterval(rotateText, 4000); // Rotate every 4 seconds.


////////////////////////////////
//Course Certificate PDF Modal//
////////////////////////////////
// Get the modal
var modal = document.getElementById("myModal");

// Get the element that opens the modal
var btn = document.getElementById("modalTrigger");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//////////////////////////
//Project Drop Down List//
//////////////////////////

// Gets the filter dropdown and project elements
const filterSelect = document.getElementById('project-filter');
const projects = document.querySelectorAll('.col');

// Event listener to handle filtering
filterSelect.addEventListener('change', function() {
  const filterValue = filterSelect.value;

  // Loops through each project to apply filtering
  projects.forEach(project => {
    const projectType = project.getAttribute('data-type'); // Get the type (frontend, backend)

    // If the filter is 'all', shows all projects
    if (filterValue === 'all') {
      project.style.display = 'block'; // Shows all the projects
    }
    // If the filter is for 'frontend' or 'backend', it will display that selected project type
    else if (filterValue === projectType) {
      project.style.display = 'block'; // Shows the matching project
    } else {
      project.style.display = 'none'; // Hides the non-matching project
    }
  });
});

function projectRedirect1() {
  location.href="https://ericdurban.github.io/Jeri-Urban-Studios/index.html";
}

function projectRedirect2() {
  location.href="https://ericdurban.github.io/Simon-Challenge/index.html";
}

function projectRedirect3() {
  location.href="https://ericdurban.github.io/LyricHunt/";
}

function projectRedirect4() {
  location.href="https://github.com/ericdurban/World-Travel-Tracker/blob/main/README.md";
}

function projectRedirect5() {
  location.href="https://ericdurban.github.io/Drum-Kit/index.html";
}

// function projectRedirect6() {
//   location.href="#";
// }

function projectRedirect7() {
  location.href="https://github.com/ericdurban/To-Do-List/blob/main/README.md";
}

// function projectRedirect8() {
//   location.href="#";
// }

function projectRedirect9() {
  location.href="https://ericdurban.github.io/Resume/index.html";
}

// function projectRedirect10() {
//   location.href="#";
// }