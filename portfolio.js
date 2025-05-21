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

function scrollCerts(direction) {
  const container = document.getElementById("certContainer");
  const scrollAmount = 250;

  if (container) {
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  }
}

function scrollRefs(direction) {
  const container = document.getElementById("refContainer");
  const scrollAmount = 250;

  if (container) {
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  }
}

function slideProjects(direction) {
  const slider = document.getElementById('projectSlider');
  const scrollAmount = 300; // Adjust based on card width

  if (direction === 'left') {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

function slideFront(direction) {
  const slider = document.getElementById('frontSlider');
  const scrollAmount = 300; // Adjust based on card width

  if (direction === 'left') {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

function updateScrollButtons() {
  // For each certref-wrapper on the page
  document.querySelectorAll('.certref-wrapper').forEach(wrapper => {
    const container = wrapper.querySelector('.certref-container');
    const leftBtn = wrapper.querySelector('.scroll-button.left');
    const rightBtn = wrapper.querySelector('.scroll-button.right');

    if (!container || !leftBtn || !rightBtn) return;

    if (container.scrollWidth > container.clientWidth) {
      leftBtn.style.display = 'block';
      rightBtn.style.display = 'block';
    } else {
      leftBtn.style.display = 'none';
      rightBtn.style.display = 'none';
    }
  });
}

// Run on page load and window resize
window.addEventListener('load', updateScrollButtons);
window.addEventListener('resize', updateScrollButtons);

// certref images
function openCertModal(src) {
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "flex";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}


// educ&exp modals
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


