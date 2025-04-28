document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    initParticles();
    
    // Dark mode toggle
    initDarkMode();
    
    // Countdown timers for exams
    updateCountdowns();
    
    // Show love messages on scroll
    initScrollAnimations();
    
    // Update form action with real email
    updateFormEmail();
});

// Dark Mode Toggle
function initDarkMode() {
    const toggleBtn = document.getElementById('mode-toggle-btn');
    const body = document.body;
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleBtn.classList.replace('fa-moon', 'fa-sun');
    }
    
    toggleBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Toggle icon
        if (body.classList.contains('dark-mode')) {
            toggleBtn.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            toggleBtn.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Countdown Timer for Exams
function updateCountdowns() {
    const exams = document.querySelectorAll('.exam');
    
    exams.forEach((exam, index) => {
        if (exam.classList.contains('completed')) {
            return; // Skip completed exams
        }
        
        const dateStr = exam.getAttribute('data-date');
        const examDate = new Date(dateStr);
        const countdownElem = document.getElementById(`countdown-${index}`);
        
        if (!countdownElem) return;
        
        // Update countdown every second
        updateExamCountdown(examDate, countdownElem);
        setInterval(() => updateExamCountdown(examDate, countdownElem), 1000);
    });
}

function updateExamCountdown(targetDate, element) {
    const now = new Date();
    const difference = targetDate - now;
    
    if (difference < 0) {
        element.innerHTML = "Exam day is here!";
        return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Scroll Animations for Love Messages
function initScrollAnimations() {
    const messages = document.querySelectorAll('.love-message');
    
    const checkScroll = () => {
        messages.forEach(message => {
            const messageTop = message.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.8;
            
            if (messageTop < triggerPoint) {
                message.classList.add('visible');
            }
        });
    };
    
    // Check initial position
    checkScroll();
    
    // Listen for scroll
    window.addEventListener('scroll', checkScroll);
}

// Initialize Particles Background
function initParticles() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 30,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#e4a9c1"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#a1c4fd",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

// Update form with actual email
function updateFormEmail() {
    const form = document.querySelector('.feedback-form');
    if (form) {
        // Replace with Atharv's actual email - this is a placeholder
        // Change this to your real email address
        form.action = "https://formsubmit.co/atharv@example.com";
    }
} 