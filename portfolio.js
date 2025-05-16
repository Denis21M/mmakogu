document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebarLinks = sidebar.querySelectorAll('a');

    sections.forEach(section => {
        section.style.display = "block";
    });
    
    sidebarToggle.addEventListener('click', () => {
        sidebar.style.width = '250px';
    });

    
    closeSidebarBtn.addEventListener('click', () => {
        sidebar.style.width = '0';
    });

    document.addEventListener('click', function (event) {
      const isClickInsideSidebar = sidebar.contains(event.target);
      const isClickOnToggleButton = sidebarToggle.contains(event.target);
  
      if (!isClickInsideSidebar && !isClickOnToggleButton) {
          sidebar.style.width = '0'; 
      }
  });

    window.addEventListener("scroll", revealSection);
    revealSection();

    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            
            const targetId = link.getAttribute('href').substring(1);

            if (targetId === "all") {
                
                sections.forEach(section => {
                    section.style.display = "block";
                });
            } else if (targetId === "none") {
              // Hide all sections
              sections.forEach(section => {
                  section.style.display = "none";
              });
          } else {
              // Show only the clicked section
              sections.forEach(section => {
                  section.style.display = section.id === targetId ? "block" : "none";
              });
          }

            
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sidebar.style.width = '0'; 
        });
    });
});


const revealSection = () => {
  document.querySelectorAll(".fade-in").forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 50) {
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
      }
  });
};


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        console.log(window.getComputedStyle(section)); 
    });
});



function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// close modal on outside click
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};


