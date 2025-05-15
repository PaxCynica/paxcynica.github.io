// Categorized spells for organized study
const spellCategories = {
    "Information Evaluation": [
        { name: "SAFE", description: "Source & Story, Agenda, Frame & Feeling, Echo & Evidence", file: "safe-method.md" },
        { name: "SWORD", description: "Slicing Through Information Deception", file: "sword-method.md" },
        { name: "DEPTH", description: "Deep Examination of Persuasive Technique Heuristics", file: "depth-method.md" },
        { name: "REAL", description: "Recognizing Engineered Artificial Likenesses", file: "real-method.md" },
        { name: "LOGIC", description: "Leveraging Or Guarding against Intelligent Computation", file: "logic-method.md" }
    ],
    "Emotional Regulation": [
        { name: "SHIELD", description: "Separate, Hear, Interpret, Evaluate, Let Go, Decide", file: "shield-method.md" },
        { name: "CLEAR", description: "Calibrated Logic & Emotional Awareness Response", file: "clear-method.md" },
        { name: "ANCHOR", description: "Staying Grounded During Information Storms", file: "anchor-method.md" },
        { name: "ROPE", description: "Restraining Our Personal Excesses", file: "rope-method.md" }
    ],
    "Information Management": [
        { name: "FOCUS", description: "Filter, One Task, Curate, Unplug, Strengthen", file: "focus-method.md" },
        { name: "PULSE", description: "Present Understanding & Learning from Sustained Examination", file: "pulse-method.md" },
        { name: "WEAVE", description: "Worldview-Enhancing Analysis & Verification Ecosystem", file: "weave-method.md" },
        { name: "VAULT", description: "Verify Access & Utilize Layered Tactics", file: "vault-method.md" }
    ],
    "Pattern Recognition": [
        { name: "PRISM", description: "Pattern Recognition In Social Media", file: "prism-method.md" },
        { name: "ARMOR", description: "Authority, Repetition, Misdirection, Outrage, Reinforcement", file: "armor-method.md" },
        { name: "CYCLE", description: "Connecting Yesterday's Campaigns to Learn Effectively", file: "cycle-method.md" },
        { name: "TRACE", description: "Tracking & Recording Active Campaigns Effectively", file: "trace-method.md" }
    ],
    "Interpersonal & Community": [
        { name: "TEAMS", description: "Teach, Engage, Amplify, Monitor, Support", file: "teams-method.md" },
        { name: "BRIDGE", description: "Building Reasoned Insight During Group Exchange", file: "bridge-method.md" },
        { name: "ECHO", description: "Evaluate, Context, Halt, Own", file: "echo-method.md" },
        { name: "LANTERN", description: "Listen, Adapt, Nurture, Transparency, Empower, Reflect, Navigate", file: "lantern-method.md" },
        { name: "MAPS", description: "Mindful Approach to Polarized Subjects", file: "maps-method.md" }
    ],
    "Recovery & Growth": [
        { name: "HEAL", description: "Honest Assessment, Examine Effects, Adjust Understanding, Learn", file: "heal-method.md" },
        { name: "SHIFT", description: "Systematic Help In Following Truth", file: "shift-method.md" },
        { name: "HAVEN", description: "Hope And Vitality Even Now", file: "haven-method.md" }
    ]
};

// Standard kit - recommended starting spells
const standardKitNames = ["SAFE", "SHIELD", "FOCUS", "ARMOR", "SWORD", "LANTERN"];

// Create a function to populate the standard kit section
function createStandardKit() {
    const container = document.getElementById('standard-kit-spells');
    const kitSpells = [];
    
    // Find the full spell details for each standard kit spell
    standardKitNames.forEach(spellName => {
        for (const category of Object.values(spellCategories)) {
            const spell = category.find(s => s.name === spellName);
            if (spell) {
                kitSpells.push(spell);
                break;
            }
        }
    });
    
    // Create the spell grid for the standard kit
    const spellGrid = document.createElement('ul');
    spellGrid.className = 'spell-list standard-kit-list';
    
    kitSpells.forEach(spell => {
        const spellItem = document.createElement('li');
        spellItem.className = 'standard-kit-item';
        
        const spellLink = document.createElement('a');
        spellLink.href = `#${spell.name.toLowerCase()}`;
        spellLink.textContent = spell.name;
        spellLink.addEventListener('click', (e) => {
            e.preventDefault();
            loadSpell(spell);
        });
        
        const spellDescription = document.createElement('span');
        spellDescription.className = 'spell-description';
        spellDescription.textContent = spell.description;
        
        spellItem.appendChild(spellLink);
        spellItem.appendChild(spellDescription);
        spellGrid.appendChild(spellItem);
    });
    
    container.appendChild(spellGrid);
}

// Load spell content from markdown file
async function loadSpell(spell) {
    try {
        const response = await fetch(`../spells/${spell.file}`);
        if (!response.ok) {
            throw new Error(`Failed to load spell: ${response.status}`);
        }
        
        const markdown = await response.text();
        const html = marked.parse(markdown);
        
        document.getElementById('spell-content').innerHTML = html;
        document.getElementById('spell-content').classList.remove('hidden');
        document.getElementById('back-button').classList.remove('hidden');
        document.querySelector('.spell-categories').classList.add('hidden');
        
        // Update URL for bookmarking
        history.pushState(null, null, `#${spell.name.toLowerCase()}`);
        
        // Update page title
        document.title = `${spell.name} - Information Defense Spellbook`;
        
    } catch (error) {
        console.error('Error loading spell:', error);
        document.getElementById('spell-content').innerHTML = `
            <div class="error-message">
                <h2>Error Loading Spell</h2>
                <p>Sorry, we couldn't load the ${spell.name} spell. Please try again later.</p>
                <p>Technical details: ${error.message}</p>
            </div>
        `;
    }
}

// Create the table of contents
function createSpellbook() {
    const container = document.querySelector('.spell-categories');
    
    for (const [category, spells] of Object.entries(spellCategories)) {
        const categorySection = document.createElement('div');
        categorySection.className = 'category';
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categorySection.appendChild(categoryTitle);
        
        const spellList = document.createElement('ul');
        spellList.className = 'spell-list';
        
        spells.forEach(spell => {
            const spellItem = document.createElement('li');
            
            const spellLink = document.createElement('a');
            spellLink.href = `#${spell.name.toLowerCase()}`;
            spellLink.textContent = spell.name;
            spellLink.addEventListener('click', (e) => {
                e.preventDefault();
                loadSpell(spell);
            });
            
            const spellDescription = document.createElement('span');
            spellDescription.className = 'spell-description';
            spellDescription.textContent = spell.description;
            
            spellItem.appendChild(spellLink);
            spellItem.appendChild(spellDescription);
            spellList.appendChild(spellItem);
        });
        
        categorySection.appendChild(spellList);
        container.appendChild(categorySection);
    }
}

// Handle back button
function setupBackButton() {
    document.getElementById('back-button').addEventListener('click', () => {
        document.getElementById('spell-content').classList.add('hidden');
        document.getElementById('back-button').classList.add('hidden');
        document.querySelector('.spell-categories').classList.remove('hidden');
        history.pushState(null, null, window.location.pathname);
        document.title = "Information Defense Spellbook";
    });
}

// Handle print button
function setupPrintButton() {
    document.getElementById('print-button').addEventListener('click', () => {
        window.print();
    });
}

// Check for deep linking on page load
function checkForDeepLink() {
    if (window.location.hash) {
        const spellName = window.location.hash.substring(1).toUpperCase();
        
        // Search through all categories for the matching spell
        for (const category of Object.values(spellCategories)) {
            const spell = category.find(s => s.name.toLowerCase() === spellName.toLowerCase());
            if (spell) {
                loadSpell(spell);
                break;
            }
        }
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    createStandardKit();
    createSpellbook();
    setupBackButton();
    setupPrintButton();
    checkForDeepLink();
});