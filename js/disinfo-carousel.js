document.addEventListener('DOMContentLoaded', function () {
    // Sample disinfo cards from your existing data
    const disinfoCards = [
        {
            "title": "LITERACY IN HOSTILE ENVIRONMENTS",
            "points": [
                "How to build resilience in a hostile information landscape",
                "Adversarial literacy as a form of self-defense",
                "Practical skills for navigating disinformation",
                "When the medium is the weapon, literacy becomes armor"
            ],
            "layout": "layout-centered",
            "theme": "theme-dark",
            "category": "LITERACY IN HOSTILE ENVIRONMENTS"
        },
        {
            "title": "LITERACY IN HOSTILE ENVIRONMENTS",
            "points": [
                "You can’t teach people to swim in a flood.",
                "You can’t build media literacy in an ecosystem engineered to drown it.",
                "Learning when the medium is the weapon requires a new approach."
            ],
            "layout": "layout-centered",
            "theme": "theme-dark",
            "category": "LITERACY IN HOSTILE ENVIRONMENTS"
        },
        {
            "title": "The Rigged Information Field",
            "points": [
                "Most media literacy efforts assumed a neutral field, but it isn't.",
                "The field is rigged, reactive, and hostile.",
                "Algorithms favor speed; polarization is profitable; virality selects for outrage.",
                "Manipulation is often a feature, not a flaw."
            ],
            "layout": "layout-boxed",
            "theme": "theme-dark",
            "category": "LITERACY IN HOSTILE ENVIRONMENTS"
        },
        {
            "title": "Media Literacy as Warfighting",
            "points": [
                "Teaching literacy in this system is like teaching calm in a burning building.",
                "It's not impossible, but it is warfighting.",
                "Literacy must be tactically aware, emotionally grounded, and built for resistance.",
                "It must be able to operate under narrative pressure."
            ],
            "layout": "layout-split",
            "theme": "theme-dark",
            "category": "LITERACY IN HOSTILE ENVIRONMENTS"
        },
        {
            "title": "Literacy-as-Armor: Practical Skills",
            "points": [
                "Train for ambiguity and practice emotional self-regulation.",
                "Identify coercive patterns and build community around truth-seeking.",
                "Treat attention as a resource to defend.",
                "This is literacy-as-armor, a frontline skillset."
            ],
            "layout": "layout-boxed",
            "theme": "theme-dark",
            "category": "LITERACY IN HOSTILE ENVIRONMENTS"
        },
        {
            "title": "Core Tenets of Adversarial Literacy",
            "points": [
                "Resilience, narrative mobility, cognitive stamina, strategic doubt.",
                "It's not just knowing — but staying whole while knowing.",
                "Most media ecosystems are now adversarial; literacy is self-defense.",
                "Emotional/relational tools are non-negotiable; resilience is a collective act."
            ],
            "layout": "layout-split",
            "theme": "theme-dark",
            "category": "LITERACY IN HOSTILE ENVIRONMENTS"
        },
        {
            "title": "Beyond Literacy: Reforming the Terrain",
            "points": [
                "You can’t build mental defense in an economy that rewards manipulation.",
                "We don’t just need better literacy; we need better terrain.",
                "Fighting for structural reform is also essential."
            ],
            "layout": "layout-boxed",
            "theme": "theme-dark",
            "category": "LITERACY IN HOSTILE ENVIRONMENTS"
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