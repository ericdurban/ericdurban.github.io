// Get the filter dropdown and project elements
const filterSelect = document.getElementById('project-filter');
const projects = document.querySelectorAll('.col');

// Event listener to handle filtering
filterSelect.addEventListener('change', function() {
  const filterValue = filterSelect.value;

  // Loop through each project to apply filtering
  projects.forEach(project => {
    const projectType = project.getAttribute('data-type'); // Get the type (frontend, backend)

    // If the filter is 'all', show all projects
    if (filterValue === 'all') {
      project.style.display = 'block'; // Show the project
    }
    // If the filter is for frontend or backend, check the project type
    else if (filterValue === projectType) {
      project.style.display = 'block'; // Show the matching project
    } else {
      project.style.display = 'none'; // Hide the non-matching project
    }
  });
});
