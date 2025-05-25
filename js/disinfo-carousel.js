document.addEventListener('DOMContentLoaded', function () {
    // Sample disinfo cards from your existing data
    const disinfoCards = [
        {
            "title": "What is Information?",
            "points": [
                "Information as the resolution of uncertainty",
                "The difference that makes a difference (Bateson)",
                "From Shannon's bits to Integrated Information Theory",
                "Where meaning emerges from data"
            ],
            "layout": "layout-centered",
            "theme": "theme-blue",
            "category": "DEFINITIONS"
        },
        {
            "title": "Biological Information Processing",
            "points": [
                "How organisms detect signals vs. noise",
                "The primal dilemma: false positives vs. negatives",
                "Evolution's 'better safe than sorry' principle",
                "DNA as nature's information storage system"
            ],
            "layout": "layout-boxed",
            "theme": "theme-green",
            "category": "BIOLOGICAL INFORMATION"
        },
        {
            "title": "Social Information Dynamics",
            "points": [
                "Information as power and control",
                "Homophily: how 'birds of a feather' shape networks",
                "The 'Ant & Corridor' paradox: when individuals outperform groups",
                "Emotion's influence on belief and decision-making"
            ],
            "layout": "layout-split",
            "theme": "theme-red",
            "category": "SOCIAL INFORMATION"
        },
        {
            "title": "Organizational Learning",
            "points": [
                "How institutions process and adapt to information",
                "Routines vs. rigidity in complex systems",
                "Why organizations might 'fight the last war'",
                "The corporation as a proto-AI cognitive system"
            ],
            "layout": "layout-boxed",
            "theme": "theme-orange",
            "category": "ORGANIZATIONAL LEARNING & INFORMATION"
        },
        {
            "title": "Literacy in Hostile Environments",
            "points": [
                "When the medium is the weapon, literacy becomes armor",
                "Building resilience in rigged information fields",
                "Adversarial literacy as cognitive self-defense",
                "Individual vs. collective navigation of deception"
            ],
            "layout": "layout-centered",
            "theme": "theme-dark",
            "category": "LITERACY IN HOSTILE ENVIRONMENTS"
        },
        {
            "title": "Philosophy of Information",
            "points": [
                "Maxwell's Demon and the reality of information",
                "Gödel's limits and algorithmic irreducibility",
                "Being as subjective narrative construction",
                "The myth of arrival vs. continuous engagement"
            ],
            "layout": "layout-split",
            "theme": "theme-purple",
            "category": "PHILOSOPHY"
        },
        {
            "title": "Information Theory Foundations",
            "points": [
                "Shannon's Channel Capacity and living systems",
                "Statistical vs. algorithmic randomness",
                "Integrated Information Theory and consciousness",
                "Information surprise and meaning measurement"
            ],
            "layout": "layout-boxed",
            "theme": "theme-purple",
            "category": "INFORMATION THEORY"
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