document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebarLinks = sidebar.querySelectorAll('a');

    
    sidebarToggle.addEventListener('click', () => {
        sidebar.style.width = '250px';
    });

    
    closeSidebarBtn.addEventListener('click', () => {
        sidebar.style.width = '0';
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

    window.addEventListener("scroll", revealSection);
    revealSection();

    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            if (targetId === "all") {
                
                sections.forEach(section => {
                    section.style.display = "block";
                });
            } else {
                
                sections.forEach(section => {
                    if (section.id === targetId) {
                        section.style.display = "block";
                    } else {
                        section.style.display = "none";
                    }
                });
            }

            
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sidebar.style.width = '0'; 
        });
    });
});


document.addEventListener('click', function (event) {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggleButton = sidebarToggle.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnToggleButton) {
        sidebar.style.width = '0'; 
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const sections = document.querySelectorAll('.carousel-track section');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;

  function updateCarousel() {
    const sectionWidth = sections[0].offsetWidth + 40; 
    track.style.transform = `translateX(-${currentIndex * sectionWidth}px)`;

    sections.forEach((sec, idx) => {
      sec.classList.remove("active");
      if (idx === currentIndex) sec.classList.add("active");
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % sections.length;
    updateCarousel();
  });

  updateCarousel(); 
});


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        console.log(window.getComputedStyle(section)); 
    });
});


  function toggleAboutSection() {
    const content = document.getElementById('aboutExtra');
    const button = document.getElementById('toggleAbout');
    if (content.style.display === 'none') {
      content.style.display = 'block';
      button.textContent = 'Show less';
    } else {
      content.style.display = 'none';
      button.textContent = 'Show more';
    }
  }


function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Optional: close modal on outside click
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};


