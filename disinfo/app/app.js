const logoImage = new Image();
logoImage.src = '../images/hound.png';
const CARD_DATA = [...CARD_DATA_0, ...CARD_DATA_1, ...CARD_DATA_2, ...IRREGULAR_WARFARE, ...CARD_DATA_4, ...CARD_DATA_5];
const CARD_IMAGES = {};
Object.assign(CARD_IMAGES, CARD_IMAGES_0, CARD_IMAGES_1, CARD_IMAGES_2, CARD_IMAGES_3, CARD_IMAGES_4, CARD_IMAGES_5);

const categoryImages = {};
function loadCategoryImages() {
    for (const key in CARD_IMAGES) {
        if (CARD_IMAGES.hasOwnProperty(key)) {
            categoryImages[key] = new Image();
            categoryImages[key].src = CARD_IMAGES[key];
        }
    }
}
// Card layouts and themes
const LAYOUTS = [
    { id: 'layout-centered', name: 'Centered' },
    { id: 'layout-split', name: 'Split' },
    { id: 'layout-boxed', name: 'Boxed' }
];

const THEMES = [
    { id: 'theme-blue', name: 'Blue' },
    { id: 'theme-green', name: 'Green' },
    { id: 'theme-purple', name: 'Purple' },
    { id: 'theme-dark', name: 'Dark' },
    { id: 'theme-sunset', name: 'Sunset' }
];

// Add orientation constants after existing LAYOUTS and THEMES
const ORIENTATIONS = [
    { id: 'square', name: 'Square (1:1)', width: 1024, height: 1024 },
    { id: 'portrait', name: 'Portrait (4:5)', width: 1024, height: 1280 },
    { id: 'story', name: 'Story (9:16)', width: 1080, height: 1920 }  // Instagram Story dimensions
];

// DOM Elements
const cardGrid = document.getElementById('card-grid');
const loadingElement = document.getElementById('loading');
const downloadAllBtn = document.getElementById('download-all-btn');

// Store card data globally
let cardData = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Load card data from JSON
    fetchCardData();

    loadCategoryImages();
    // Set up event listeners
    downloadAllBtn.addEventListener('click', downloadAllCards);
});

function generateCardPreviews(data) {
    // Clear existing cards
    cardGrid.innerHTML = '';

    // Generate a preview for each card
    data.forEach((card, index) => {
        const cardPreviewElement = createCardPreviewElement(card, index);
        cardGrid.appendChild(cardPreviewElement);
    });
}

function downloadCard(index) {
    const card = cardData[index];
    const canvas = document.getElementById(`canvas-${index}`);

    // Get category info for filename
    const category = card.category || "Uncategorized";

    // Create category prefix (first 3 letters capitalized)
    const categoryPrefix = category
        .split(/\s+/)
        .map(word => word.substring(0, 1).toUpperCase())
        .join('')
        .substring(0, 3);

    // Add a small delay to ensure rendering completes
    setTimeout(() => {
        try {
            // Format index with leading zeros for proper sorting
            const paddedIndex = String(index).padStart(3, '0');

            // Create organized filename structure:
            // [CategoryPrefix]_[Index]_[Title].png
            const safeTitle = card.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
            const filename = `${categoryPrefix}_${paddedIndex}_${safeTitle}.png`;

            // Convert canvas to data URL and download
            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = filename;
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('Error downloading card:', error);
            alert('Sorry, there was a problem downloading the card. Please try again.');
        }
    }, 500); // 500ms delay to ensure image loading completes
}

function downloadAllCards() {
    const globalFormat = document.getElementById('global-format-select').value;

    // Show loading indicator
    loadingElement.style.display = 'block';
    loadingElement.textContent = 'Generating cards for download...';

    // Get current deck name if available for file prefix
    const deckSelect = document.getElementById('deck-select');
    const deckPrefix = deckSelect ? deckSelect.value.substring(0, 3).toUpperCase() + "_" : "";

    // Track how many cards have been downloaded
    let cardsProcessed = 0;

    // Update all canvases to selected format
    cardData.forEach((card, index) => {
        const canvas = document.getElementById(`canvas-${index}`);
        const orientationSelect = document.getElementById(`orientation-select-${index}`);

        // Update orientation select
        orientationSelect.value = globalFormat;

        // Update canvas size
        const selectedOrientation = ORIENTATIONS.find(o => o.id === globalFormat);
        canvas.width = selectedOrientation.width;
        canvas.height = selectedOrientation.height;

        // Re-render card
        renderCardToCanvas(canvas, card);

        // Download after short delay
        setTimeout(() => {
            try {
                // Get category info for filename
                const category = card.category || "Uncategorized";

                // Create category prefix (first 3 letters capitalized)
                const categoryPrefix = category
                    .split(/\s+/)
                    .map(word => word.substring(0, 1).toUpperCase())
                    .join('')
                    .substring(0, 3);

                // Format index with leading zeros for proper sorting
                const paddedIndex = String(index).padStart(3, '0');

                // Create organized filename structure:
                // [DeckPrefix][CategoryPrefix]_[Index]_[Title].png
                const safeTitle = card.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
                const filename = `${deckPrefix}${categoryPrefix}_${paddedIndex}_${safeTitle}.png`;

                // Convert canvas to data URL and download
                const dataUrl = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.download = filename;
                link.href = dataUrl;
                link.click();

                // Update progress
                cardsProcessed++;
                if (cardsProcessed >= cardData.length) {
                    loadingElement.style.display = 'none';
                }
            } catch (error) {
                console.error('Error downloading card:', error);
            }
        }, index * 500);
    });
}

