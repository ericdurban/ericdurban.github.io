///////////////////////////////////
//////////HAMBURGER MENU///////////
///////////////////////////////////
const menuIcon = document.getElementById('menu');
const navLinks = document.querySelector('.nav-pills')
const navLinksItems = document.querySelectorAll('.nav-link');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinksItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  })
})

///////////////////////////////////////////////////////
///////////////////Rotating Titles/////////////////////
//Credit to https://codepen.io/alphardex/pen/WNNVJeZ///
///////////////////////////////////////////////////////
let words = document.querySelectorAll(".word");
words.forEach(word => {
  let textContent = word.textContent; // Get the full text including spaces.
  word.textContent = ""; // Clear original word text.

  // Split the word into letters, including spaces.
  let letters = textContent.split(""); 

  // Create a span for each letter, keeping spaces intact.
  letters.forEach(letter => {
    let span = document.createElement("span");
    span.textContent = letter === " " ? "\u00A0" : letter; // Use non-breaking space for the space character.
    span.className = "letter"; // Add "letter" class to each span.
    word.append(span); // Append the letter span to the word.
  });
});

// Initially, set the first word to be visible.
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1"; 

let resetWords = () => {
  // Reset all words' opacity and animation states.
  words.forEach(word => {
    word.style.opacity = "0"; // Hide all words.
    Array.from(word.children).forEach(letter => {
      letter.classList.remove("behind", "in", "out"); // Reset all animations.
    });
  });
};

let rotateText = () => {
  resetWords(); // Reset the word states before rotating.
  
  let currentWord = words[currentWordIndex]; // Get the current word.
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1]; // Get the next word.

  // Rotate out letters of current word.
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.classList.add("out"); // Add "out" class for rotation effect.
    }, i * 80); // Delay based on the letter index.
  });

  // Make next word visible and rotate in letters.
  nextWord.style.opacity = "1"; 
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.classList.add("behind"); // Set letters to "behind" state initially.
    setTimeout(() => {
      letter.classList.remove("behind"); // Remove "behind" class.
      letter.classList.add("in"); // Add "in" class to start the rotation.
    }, 340 + i * 80); // Timing for the animation of each letter.
  });

  // Update the current word index for the next rotation.
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

// Start rotating and continue every 4 seconds.
rotateText();
setInterval(rotateText, 4000); // Rotate every 4 seconds.


////////////////////////////////
//Course Certificate PDF Modal//
////////////////////////////////
var modal = document.getElementById("myModal");
var btn = document.getElementById("modalTrigger"); 
var span = document.getElementsByClassName("close")[0];

let isModalOpen = false; // Add a flag to prevent multiple triggers.

btn.onclick = function() {
  if (!isModalOpen) {
    modal.style.display = "block";
    isModalOpen = true;
}
};

span.onclick = function() {
  modal.style.display = "none";
  isModalOpen = false;
};

// Closes modal when there's a click outside of the modal (window).
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//////////////////////////
//Project Drop Down List//
//////////////////////////
const filterSelect = document.getElementById('project-filter');
const projects = document.querySelectorAll('.col');

filterSelect.addEventListener('change', function() {
  const filterValue = filterSelect.value;

  // Loops through each project to apply filtering
  projects.forEach(project => {
    const projectType = project.getAttribute('data-type'); // Get the type (frontend, backend)

    if (filterValue === 'all') {
      project.style.display = 'block'; 
    }
    else if (filterValue === projectType) {
      project.style.display = 'block'; 
    } else {
      project.style.display = 'none'; 
    }
  });
});

function projectRedirect1() {
  location.href="https://ericdurban.github.io/Jeri-Urban-Studios/index.html";
}

function projectRedirect2() {
  location.href="https://ericdurban.github.io/Alphabet/index.html";
}

function openModal3() {
  var videoModal = document.getElementById("videoModal3");
  var iframe = document.getElementById("videoFrame3");
  iframe.src = "https://www.youtube.com/embed/zJTLkTQSkos"; 
  
  videoModal.style.display = "block";
}

function openModal4() {
  var videoModal = document.getElementById("videoModal4");
  var iframe = document.getElementById("videoFrame4");
  iframe.src = "https://www.youtube.com/embed/FJX6Quw593I?si=BIxQp2yPQZH2BCfl"; 
  
  videoModal.style.display = "block";
}

function closeModal(modalNumber) {
  var videoModal = document.getElementById("videoModal" + modalNumber);
  var iframe = document.getElementById("videoFrame" + modalNumber);
  iframe.src = ""; // Stop the video when closing the modal by removing the iframe source
  videoModal.style.display = "none";
}

window.onclick = function(event) {
  var videoModal3 = document.getElementById("videoModal3");
  var videoModal4 = document.getElementById("videoModal4");

  if (event.target == videoModal3) {
    closeModal(3);
  } else if (event.target == videoModal4) {
    closeModal(4);
  }
};

function projectRedirect5() {
  location.href="https://ericdurban.github.io/Simon-Challenge/index.html";
}

function projectRedirect7() {
  location.href="https://github.com/ericdurban/To-Do-List/blob/main/README.md";
}

function projectRedirect9() {
  location.href="https://ericdurban.github.io/Resume/index.html";
}

    // Prevent the default behavior of the 'View' button and open the modal instead
    document.getElementById('viewBtn').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the link from navigating
      openModal(); 
    });
