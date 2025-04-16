async function fetchCardData() {
    try {
        // Instead of fetching a JSON file, use the data from cardData.js
        if (typeof CARD_DATA !== 'undefined') {
            cardData = CARD_DATA;

            // Hide loading indicator
            loadingElement.style.display = 'none';

            // Generate card previews
            generateCardPreviews(cardData);
        } else {
            throw new Error('Card data not loaded');
        }
    } catch (error) {
        console.error('Error loading card data:', error);

        // Show error in UI
        loadingElement.textContent = 'Error loading card data. Using sample data instead.';

        // Use sample data as fallback
        cardData = getSampleCardData();

        // Hide loading indicator after a delay
        setTimeout(() => {
            loadingElement.style.display = 'none';

            // Generate card previews with sample data
            generateCardPreviews(cardData);
        }, 1500);
    }
}

/**
 * Get sample card data (fallback if JSON loading fails)
 */
function getSampleCardData() {
    return [
        {
            "title": "Climate Facts",
            "points": [
                "97% of scientists agree climate change is human-caused",
                "Global temperatures have risen 1.1°C since pre-industrial times",
                "Sea levels rose 8-9 inches since 1880"
            ],
            "layout": "layout-centered",
            "theme": "theme-blue"
        },
        {
            "title": "Media Literacy Tips",
            "points": [
                "Verify sources before sharing",
                "Check publication dates",
                "Look for multiple confirming sources",
                "Be wary of emotionally manipulative content"
            ],
            "layout": "layout-split",
            "theme": "theme-green"
        },
        {
            "title": "Spotting Deepfakes",
            "points": [
                "Look for unnatural eye movements",
                "Watch for strange facial expressions",
                "Check for audio-visual sync issues",
                "Verify with trusted news sources"
            ],
            "layout": "layout-boxed",
            "theme": "theme-purple"
        }
    ];
}