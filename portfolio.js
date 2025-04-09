document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebarLinks = sidebar.querySelectorAll('a');

    // Show sidebar
    sidebarToggle.addEventListener('click', () => {
        sidebar.style.width = '250px';
    });

    // Close sidebar
    closeSidebarBtn.addEventListener('click', () => {
        sidebar.style.width = '0';
    });

    // Scroll reveal effect
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

    // Show one section at a time
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            if (targetId === "all") {
                // If "All" is clicked, show all sections
                sections.forEach(section => {
                    section.style.display = "block";
                });
            } else {
                // Otherwise, show only the targeted section
                sections.forEach(section => {
                    if (section.id === targetId) {
                        section.style.display = "block";
                    } else {
                        section.style.display = "none";
                    }
                });
            }

            // Highlight active link
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sidebar.style.width = '0'; // Close sidebar on selection
        });
    });
});

// Detect clicks outside the sidebar
document.addEventListener('click', function (event) {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggleButton = sidebarToggle.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnToggleButton) {
        sidebar.style.width = '0'; // Close the sidebar
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const sections = document.querySelectorAll('.carousel-track section');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;

  function updateCarousel() {
    const sectionWidth = sections[0].offsetWidth + 40; // width + margin
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

  updateCarousel(); // Init
});


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        console.log(window.getComputedStyle(section)); // Logs the current styles of sections
    });
});
