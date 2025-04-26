document.addEventListener('DOMContentLoaded', function() {
    // Sample disinfo cards from your existing data
    const disinfoCards = [
        {
            title: "Amygdala Hacking",
            category: "EMOTIONAL MANIPULATION",
            points: [
                "Triggers fear, rage, and panic responses",
                "Targets the brain's emotional center",
                "Bypasses logic and critical thinking",
                "Makes you react, not reason"
            ],
            theme: "theme-red"
        },
        {
            title: "False Dilemma",
            category: "COGNITIVE EXPLOITATION",
            points: [
                "Reduces complex issues to just two choices",
                "Hides nuance and eliminates middle ground",
                "Forces artificial decisions",
                "Pressures conformity through limited options"
            ],
            theme: "theme-purple"
        },
        {
            title: "Information Flooding",
            category: "INFORMATION CONTROL",
            points: [
                "Overwhelms with contradictory information",
                "Bombards with fear-inducing content",
                "Creates fatigue that leads to disengagement",
                "Disables critical thinking through overload"
            ],
            theme: "theme-sunset"
        },
        {
            title: "Strategic Ambiguity",
            category: "ADVANCED PSYCHOLOGICAL OPERATIONS",
            points: [
                "Uses vague, contradictory messaging",
                "Keeps adversaries confused and hesitant",
                "Prevents effective response through uncertainty",
                "Weaponizes confusion as a strategy"
            ],
            theme: "theme-dark"
        },
        {
            title: "Fighting Disinformation",
            category: "COUNTER-STRATEGIES & DEFENSE",
            points: [
                "Slow down when others demand instant action",
                "Follow evidence instead of crowds",
                "Notice when content triggers strong reactions",
                "Recognize when fear is being used as control"
            ],
            theme: "theme-green"
        }
    ];

    const carouselContainer = document.querySelector('.carousel-cards');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    let interval;
    
    // Create carousel cards
    disinfoCards.forEach((card, index) => {
        // Create card element
        const cardElement = document.createElement('div');
        cardElement.className = `disinfo-card ${card.theme} ${index === 0 ? 'active' : ''}`;
        
        // Create card content
        cardElement.innerHTML = `
            <div class="category">${card.category}</div>
            <h4>${card.title}</h4>
            <ul>
                ${card.points.map(point => `<li>${point}</li>`).join('')}
            </ul>
        `;
        
        carouselContainer.appendChild(cardElement);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    // Navigation functions
    function goToSlide(index) {
        // Clear autoplay interval when manual navigation occurs
        clearInterval(interval);
        
        // Ensure index is within bounds
        if (index < 0) {
            index = disinfoCards.length - 1;
        } else if (index >= disinfoCards.length) {
            index = 0;
        }
        
        // Update active card
        const cards = document.querySelectorAll('.disinfo-card');
        const indicators = document.querySelectorAll('.carousel-indicator');
        
        cards.forEach(card => card.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        cards[index].classList.add('active');
        indicators[index].classList.add('active');
        
        currentIndex = index;
        
        // Restart autoplay
        startAutoplay();
    }
    
    function startAutoplay() {
        // Clear any existing interval
        clearInterval(interval);
        
        // Set new interval
        interval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000); // Change slide every 5 seconds
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    
    // Start autoplay
    startAutoplay();
    
    // Pause autoplay when hovering over carousel
    const carousel = document.querySelector('.disinfo-carousel-container');
    carousel.addEventListener('mouseenter', () => clearInterval(interval));
    carousel.addEventListener('mouseleave', startAutoplay);
});