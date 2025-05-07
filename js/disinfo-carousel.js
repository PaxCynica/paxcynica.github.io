document.addEventListener('DOMContentLoaded', function () {
    // Sample disinfo cards from your existing data
    const disinfoCards = [
        {
            "title": "Disinformation: An Enduring Playbook",
            "points": [
                "Effective disinformation tactics persist, adapting to new eras and platforms.",
                "This series breaks down their operational logic, drawing on analyses like the 2021 EU Parliament report.",
                "Understanding the 'how' is crucial for cognitive defense."
            ],
            "layout": "layout-centered",
            "theme": "theme-dark",
            "category": "INTRODUCTION TACTICS"
        },
        {
            "title": "Beyond Obvious Fakes: Modern Influence",
            "points": [
                "Today's influence often bypasses simple 'fake news' checks.",
                "Relies on emotional saturation, manufactured polarization, and laundered narratives.",
                "Exploits strategic amplification, sometimes via trusted institutions.",
                "Recognizing the architecture of these tactics is key to resilience."
            ],
            "layout": "layout-boxed",
            "theme": "theme-dark",
            "category": "INTRODUCTION TACTICS"
        },
        {
            "title": "Tactical Breakdown: Naming the Systems",
            "points": [
                "This isn't just about moral outrage; it's about deconstructing methods.",
                "Each tactic exploits specific vulnerabilities with operational precision.",
                "Goal: To recognize, explain, and resist these enduring strategies.",
                "Empower yourself and others with cognitive security."
            ],
            "layout": "layout-split",
            "theme": "theme-dark",
            "category": "INTRODUCTION TACTICS"
        },

        // --- TACTICS FROM THE THREAD ---

        // Laundered Narratives
        {
            "title": "Information Laundering",
            "points": [
                "Introduces false information in fringe spaces",
                "Gradually amplifies through increasingly credible sources",
                "Makes falsehoods appear legitimate over time",
                "Exploits the 'source amnesia' cognitive bias"
            ],
            "layout": "layout-split",
            "theme": "theme-dark",
            "category": "INFORMATION CONTROL"
        },

        // Manufactured Polarization
        {
            "title": "Manufactured Polarization",
            "points": [
                "Artificially inflaming divisions between social groups.",
                "Framing complex issues as binary 'us vs. them' conflicts.",
                "Reduces nuance, making constructive dialogue impossible.",
                "Aims to paralyze societal problem-solving and consolidate power."
            ],
            "layout": "layout-centered",
            "theme": "theme-red",
            "category": "SOCIAL & GROUP MANIPULATION"
        },
        {
            "title": "Divide and Rule",
            "points": [
                "Sows division between groups to weaken unity",
                "Makes a divided population easier to control",
                "Distracts from real issues with manufactured conflicts",
                "As old as empire but still thriving today"
            ],
            "layout": "layout-boxed",
            "theme": "theme-red",
            "category": "SOCIAL & GROUP MANIPULATION"
        },
        {
            "title": "Loyalty Rhetoric",
            "points": [
                "Uses 'us vs them' language to enforce compliance",
                "Makes questioning feel like betrayal of the group",
                "Turns disagreement into disloyalty",
                "Weaponizes belonging to silence critical thinking"
            ],
            "layout": "layout-split",
            "theme": "theme-green",
            "category": "SOCIAL & GROUP MANIPULATION"
        },

        // Virality Engineering
        {
            "title": "Virality Engineering",
            "points": [
                "Designing content for maximum spread, regardless of truth.",
                "Exploits emotional triggers, trending topics, and platform algorithms.",
                "Uses bots, coordinated networks, and influencers for initial boost.",
                "Goal: Achieve organic-looking spread of a controlled message."
            ],
            "layout": "layout-boxed",
            "theme": "theme-purple",
            "category": "INFORMATION CONTROL"
        },
        {
            "title": "Memetic Programming",
            "points": [
                "Creates and spreads contagious ideas or 'memes'",
                "Designed to shape beliefs without conscious awareness",
                "Bypasses critical thinking through humor or emotion",
                "Programs behavior through seemingly harmless content"
            ],
            "layout": "layout-centered",
            "theme": "theme-dark",
            "category": "INFORMATION CONTROL"
        },
        {
            "title": "Social Proof Manipulation",
            "points": [
                "Creates fake consensus through bots and coordinated accounts",
                "Exploits human instinct to follow the crowd",
                "Makes fringe views appear mainstream through volume",
                "Uses herding behavior to override individual judgment"
            ],
            "layout": "layout-boxed",
            "theme": "theme-green",
            "category": "SOCIAL & GROUP MANIPULATION"
        },

        // Authority Hijack / Strategic Amplification from Inside Trusted Institutions
        {
            "title": "Insider Amplification",
            "points": [
                "Leveraging witting or unwitting individuals within trusted institutions.",
                "Using their credibility to amplify or legitimize disinformation.",
                "May involve co-opting existing figures, placing agents, or exploiting vulnerabilities.",
                "Blurs lines between authentic discourse and orchestrated campaigns."
            ],
            "layout": "layout-centered",
            "theme": "theme-dark",
            "category": "AUTHORITY & CREDIBILITY"
        },
        {
            "title": "Appeal to Authority",
            "points": [
                "Uses someone's status rather than evidence",
                "Leverages celebrities to spread misinformation",
                "Confuses expertise in one area with authority in another",
                "Bypasses critical thinking through false credibility"
            ],
            "layout": "layout-boxed",
            "theme": "theme-blue",
            "category": "AUTHORITY & CREDIBILITY"
        },
        {
            "title": "Fifth Column",
            "points": [
                "Covert groups working within a country to undermine it",
                "Aids external enemies without open confrontation",
                "Operates through influence operations and subversion",
                "Creates internal division that weakens resistance"
            ],
            "layout": "layout-boxed",
            "theme": "theme-dark",
            "category": "ADVANCED PSYCHOLOGICAL OPERATIONS"
        },

        // Microtargeting
        {
            "title": "Psychographic Microtargeting",
            "points": [
                "Tailoring disinformation to individuals/small groups based on detailed data profiles.",
                "Uses online behavior, demographics, and psychological traits to craft personalized triggers.",
                "Delivers hyper-relevant manipulative narratives to exploit specific vulnerabilities.",
                "Often automated and operates at scale, making it hard to detect."
            ],
            "layout": "layout-boxed",
            "theme": "theme-purple",
            "category": "ADVANCED PSYCHOLOGICAL OPERATIONS"
        },

        // Trust Erosion
        {
            "title": "Strategic Trust Erosion",
            "points": [
                "Systematically undermining faith in institutions, media, science, and elections.",
                "Flooding information space with contradictions to create cynicism.",
                "Promoting the idea that 'nothing is true and everything is possible'.",
                "Goal: Make citizens disengage or susceptible to simpler, authoritarian narratives."
            ],
            "layout": "layout-split",
            "theme": "theme-dark",
            "category": "ADVANCED PSYCHOLOGICAL OPERATIONS"
        },
        {
            "title": "Poisoning the Well",
            "points": [
                "Discredits a person or source before they speak",
                "Ensures their statements will be dismissed regardless of content",
                "Creates preemptive mistrust of legitimate information",
                "Prevents fair evaluation of evidence or arguments"
            ],
            "layout": "layout-split",
            "theme": "theme-sunset",
            "category": "AUTHORITY & CREDIBILITY"
        },
        {
            "title": "Censorship By Noise",
            "points": [
                "Floods information space with garbage content",
                "Drowns out truth without using force",
                "Overwhelms through distraction and volume",
                "Makes finding accurate information exhausting"
            ],
            "layout": "layout-boxed",
            "theme": "theme-sunset",
            "category": "INFORMATION CONTROL"
        },
        {
            "title": "Narrative Flooding",
            "points": [
                "Pushes multiple conflicting stories simultaneously",
                "Overwhelms public discourse with contradictions",
                "Creates confusion about what is actually happening",
                "Prevents clear conclusions and understanding"
            ],
            "layout": "layout-centered",
            "theme": "theme-sunset",
            "category": "INFORMATION CONTROL"
        },

        // Legal Evasion
        {
            "title": "Plausible Deniability",
            "points": [
                "Disinfo actors create distance from false info.",
                "Uses proxies, shell accounts, or indirect channels.",
                "Denies direct involvement or knowledge.",
                "Hides the hand spreading the lie."
            ],
            "layout": "layout-boxed",
            "theme": "theme-dark",
            "category": "DISINFORMATION TACTICS" // Note: This category was in your file for this card.
        },
        {
            "title": "Dog Whistles",
            "points": [
                "Coded phrases, numbers, and symbols",
                "Allows extremists to signal allegiance covertly",
                "Stays under the radar of general public",
                "Enables deniability while communicating to insiders"
            ],
            "layout": "layout-boxed",
            "theme": "theme-dark",
            "category": "ADVANCED PSYCHOLOGICAL OPERATIONS"
        },
        {
            "title": "Weaponized Irony",
            "points": [
                "Uses sarcasm or humor to introduce extremist ideas",
                "Maintains plausible deniability with \"just joking\"",
                "Shields harmful content behind comedy",
                "Undermines serious critique with mockery"
            ],
            "layout": "layout-split",
            "theme": "theme-blue",
            "category": "LANGUAGE & COMMUNICATION"
        },

        // Crisis-Time Operations
        {
            "title": "Crisis-Based Manipulation",
            "points": [
                "Exploits emergencies to bypass critical thinking",
                "Creates artificial urgency to force quick decisions",
                "Uses fear and chaos to demand instant compliance",
                "Makes questioning feel like dangerous delay"
            ],
            "layout": "layout-boxed",
            "theme": "theme-red",
            "category": "CRISIS & FEAR TACTICS"
        },
        {
            "title": "Fear, Uncertainty, Doubt",
            "points": [
                "Spreads vague threats and scary scenarios",
                "Creates conflicting information to paralyze decision-making",
                "Used by corporations and authoritarian regimes",
                "Prevents action through emotional manipulation"
            ],
            "layout": "layout-centered",
            "theme": "theme-red",
            "category": "CRISIS & FEAR TACTICS"
        },
        {
            "title": "Rotten Herring",
            "points": [
                "Creates fake scandals or distractions",
                "Diverts attention from real problems or crises",
                "Used when damaging news emerges about the powerful",
                "Makes people look elsewhere instead of at real issues"
            ],
            "layout": "layout-boxed",
            "theme": "theme-red",
            "category": "CRISIS & FEAR TACTICS"
        },

        // Emotional Saturation
        {
            "title": "Amygdala Hacking",
            "points": [
                "Triggers fear, rage, and panic responses",
                "Targets the brain's emotional center",
                "Bypasses logic and critical thinking",
                "Makes you react, not reason"
            ],
            "layout": "layout-split",
            "theme": "theme-red",
            "category": "EMOTIONAL MANIPULATION"
        },
        {
            "title": "Emotional Layering",
            "points": [
                "Stacks multiple emotions to disable critical thinking",
                "Uses fear, pride, and rage in calculated sequence",
                "Makes manipulation feel like personal insight",
                "Creates psychological lock-in through layered triggers"
            ],
            "layout": "layout-boxed",
            "theme": "theme-sunset",
            "category": "EMOTIONAL MANIPULATION"
        },
        {
            "title": "Psychological Flooding",
            "points": [
                "Overwhelms with constant crises and conflicting narratives",
                "Bombards with fear-inducing content to exhaust mental resilience",
                "Disables critical thinking through cognitive overload",
                "Creates fatigue that leads to disengagement or surrender"
            ],
            "layout": "layout-boxed",
            "theme": "theme-sunset",
            "category": "INFORMATION CONTROL"
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