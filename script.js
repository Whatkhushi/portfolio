// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        // Note: localStorage is not supported in Claude.ai artifacts
        // localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        // Note: localStorage is not supported in Claude.ai artifacts
        // localStorage.setItem('theme', 'light');
    }
}

// Initialize theme and animations
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Set default theme to dark
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    if (themeToggle) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    }

    // Add intersection observer for animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Update social links with your personal information
    updateSocialLinks();
});

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});

// Back to Top Button
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Form Submission
function submitForm(e) {
    e.preventDefault();
    const form = document.getElementById('contactForm');
    if (form) {
        const formData = new FormData(form);
        
        // Get form values
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Validate form data
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For demo purposes, we'll just show an alert
        alert(`Thank you ${name}! I will get back to you soon.`);
        form.reset();
        
        // Optional: Add visual feedback
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Message Sent!';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 3000);
        }
    }
}

// Resume Download
function downloadResume() {
    // Replace this URL with your actual resume link
    const resumeUrl = 'https://drive.google.com/file/d/YOUR_RESUME_ID/view'; // Update with your Google Drive link
    
    // In a real implementation, this would link to your actual PDF file
    window.open(resumeUrl, '_blank');
    
    // Optional: Track download event
    console.log('Resume download initiated');
}

// Update social links with your personal information
function updateSocialLinks() {
    // Replace these with your actual social media links and information
    const socialData = {
       github: {
            url: 'https://github.com/Whatkhushi', // Replace with your GitHub
            username: 'My GitHub',
            description: 'Check out my repositories'
        },
        
        linkedin: {
            url: 'https://www.linkedin.com/in/khushi-sharma-621013285/', // Replace with your LinkedIn
            username: 'My LinkedIn',
            description: 'Connect with me professionally'
        },
       
        email: {
            url: 'mailto:your.email@example.com', // Replace with your email
            username: 'your.email@example.com',
            description: 'Send me an email'
        },
        twitter: {
            url: 'https://twitter.com/your-handle', // Replace with your Twitter
            username: '@your-handle',
            description: 'Follow me on Twitter'
        }
    };

    // Update existing social links if they exist
    const linkedinLink = document.querySelector('.social-link[href*="linkedin"]');
    if (linkedinLink) {
        linkedinLink.href = socialData.linkedin.url;
        const linkedinText = linkedinLink.querySelector('.social-text');
        if (linkedinText) {
            linkedinText.innerHTML = `
                <strong>${socialData.linkedin.username}</strong>
                <p>${socialData.linkedin.description}</p>
            `;
        }
    }

    const githubLink = document.querySelector('.social-link[href*="github"]');
    if (githubLink) {
        githubLink.href = socialData.github.url;
        const githubText = githubLink.querySelector('.social-text');
        if (githubText) {
            githubText.innerHTML = `
                <strong>${socialData.github.username}</strong>
                <p>${socialData.github.description}</p>
            `;
        }
    }

    const emailLink = document.querySelector('.social-link[href^="mailto"]');
    if (emailLink) {
        emailLink.href = socialData.email.url;
        const emailText = emailLink.querySelector('.social-text');
        if (emailText) {
            emailText.innerHTML = `
                <strong>${socialData.email.username}</strong>
                <p>${socialData.email.description}</p>
            `;
        }
    }

    const twitterLink = document.querySelector('.social-link[href*="twitter"]');
    if (twitterLink) {
        twitterLink.href = socialData.twitter.url;
        const twitterText = twitterLink.querySelector('.social-text');
        if (twitterText) {
            twitterText.innerHTML = `
                <strong>${socialData.twitter.username}</strong>
                <p>${socialData.twitter.description}</p>
            `;
        }
    }
}

// Typing Animation Effect (optional)
function typeWriter(element, text, speed = 100) {
    if (!element) return;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Project Filtering (if you have project categories)
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
            project.style.animation = 'fadeIn 0.5s ease-in-out';
        } else {
            project.style.display = 'none';
        }
    });
}

// Skills Progress Animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const percentage = progressBar.dataset.percentage || '0';
                
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.transition = 'width 2s ease-in-out';
                    progressBar.style.width = percentage + '%';
                }, 100);
                
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize additional features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize skills animation if skills section exists
    animateSkills();
    
    // Add click handlers for project filters if they exist
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const category = btn.dataset.filter;
            filterProjects(category);
        });
    });
    
    // Add typing effect to hero title if desired
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && heroTitle.dataset.typewriter) {
        const text = heroTitle.textContent;
        typeWriter(heroTitle, text, 100);
    }
});

// Contact form enhancement with better UX
function enhanceContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        // Add floating label effect
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value.trim()) {
                input.parentElement.classList.remove('focused');
            }
        });
        
        // Real-time validation
        input.addEventListener('input', () => {
            validateField(input);
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Remove previous error styling
    field.classList.remove('error');
    
    switch(field.type) {
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(value);
            break;
        case 'text':
        case 'textarea':
            isValid = value.length >= 2;
            break;
    }
    
    if (!isValid && value.length > 0) {
        field.classList.add('error');
    }
    
    return isValid;
}

// Initialize contact form enhancements
document.addEventListener('DOMContentLoaded', () => {
    enhanceContactForm();
});