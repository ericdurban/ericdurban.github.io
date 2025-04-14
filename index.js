///////////////////////////////////
//////////HAMBURGER MENU///////////
///////////////////////////////////
const menuIcon = document.getElementsByClassName('menu')[0];
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
const modal = document.getElementById("myModal");
const btn = document.getElementById("modalTrigger"); 
const span = document.getElementsByClassName("close")[0];

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

function projectRedirect4() {
  location.href="https://github.com/ericdurban/The-Rep-Calculator";
}

function openModal5() {
  var videoModal = document.getElementById("videoModal5");
  var iframe = document.getElementById("videoFrame5");
  iframe.src = "https://www.youtube.com/embed/FJX6Quw593I?si=BIxQp2yPQZH2BCfl"; 
  
  videoModal.style.display = "block";
}

function openModal6() {
  var videoModal = document.getElementById("videoModal6");
  var iframe = document.getElementById("videoFrame6");
  iframe.src = "https://www.youtube.com/embed/cbrCycxbkPI?si=eNCWWyWdd1mZpCh6"; 
  
  videoModal.style.display = "block";
}

function openModal7() {
  var videoModal = document.getElementById("videoModal7");
  var iframe = document.getElementById("videoFrame7");
  iframe.src = "https://www.youtube.com/embed/iDw9brB-wS8?si=NupV2F5Y65I5LQ0m"; 
  
  videoModal.style.display = "block";
}

function closeModal(modalNumber) {
  var videoModal = document.getElementById("videoModal" + modalNumber);
  var iframe = document.getElementById("videoFrame" + modalNumber);
  iframe.src = ""; // Stop the video when closing the modal by removing the iframe source
  videoModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display= "none";
    isModalOpen = false;
  }

  var videoModal3 = document.getElementById("videoModal3");
  var videoModal5 = document.getElementById("videoModal5");
  var videoModal6 = document.getElementById("videoModal6");
  var videoModal7 = document.getElementById("videoModal7");

  if (event.target == videoModal3) {
    closeModal(3);
  } else if (event.target == videoModal5) {
    closeModal(5);
  } else if (event.target == videoModal6) {
    closeModal(6);
  } else if (event.target == videoModal7) {
    closeModal(7);  
  }
};

function projectRedirect9() {
  location.href="https://ericdurban.github.io/Resume/index.html";
}

function projectRedirect10() {
  location.href="https://ericdurban.github.io/Simon-Challenge/index.html";
}

    // Prevent the default behavior of the 'View' button and open the modal instead
    document.getElementById('viewBtn').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the link from navigating
      openModal(); 
    });

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' || event.keyCode === 27) { 
        if (modal && modal.style.display === 'block' || getComputedStyle(modal).display === 'block') {
          modal.style.display= 'none'; 
          isModalOpen = false;
      }

      const videoModals = [3, 5, 6, 7]; 
      videoModals.forEach(num => {
        const videoModal = document.getElementById(`videoModal${num}`);
        if (videoModal && videoModal.style.display === 'block' || getComputedStyle(videoModal).display === 'block') {
          closeModal(num); 
        }
      });
      }
    });
});
