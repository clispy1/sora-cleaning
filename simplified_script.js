// Simplified JavaScript for the Landingsite
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.lg\\:hidden .fa-bars');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const nav = document.querySelector('.lg\\:hidden');
            if (nav) {
                nav.classList.toggle('hidden');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ accordion functionality
    const faqButtons = document.querySelectorAll('.bg-gradient-to-br button');
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const faqItem = this.closest('.bg-gradient-to-br, .bg-gradient-to-br');
            const content = faqItem.querySelector('.px-6.pb-5');
            
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
            
            // Rotate chevron icon
            const chevron = this.querySelector('.fa-chevron-down, .fa-chevron-up');
            if (chevron) {
                chevron.classList.toggle('fa-chevron-down');
                chevron.classList.toggle('fa-chevron-up');
            }
        });
    });

    // Form submission handling (simplified)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted! In a real implementation, this would send data to the server.');
        });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.group');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -6px rgba(0, 0, 0, 0.04)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        });
    });

    // Initialize any necessary tracking
    console.log('Landingsite initialized');
});