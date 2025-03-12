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
