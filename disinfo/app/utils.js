function getBulletStyle(layout) {
    switch (layout) {
        case 'split':
            return 'diamond';
        case 'box':
            return 'shield';
        case 'centered':
            return 'arrow';
        default:
            return 'circle';
    }
}
/**
 * Draw a custom bullet point with accent color
 * @param {CanvasRenderingContext2D} ctx - Canvas context
 * @param {number} x - X position
 * @param {number} y - Y position
 * @param {string} color - Text color
 * @param {string} style - Bullet style
 * @param {string} themeClass - Current theme class
 */
function drawBulletPoint(ctx, x, y, color, style = 'diamond', themeClass = 'theme-blue') {
    const size = 14; // Slightly larger size for better visibility
    let centerY = y - size / 2 - 5;

    // Adjust vertical position for boxed layout
    if (style === 'shield') {
        centerY = y - size / 2 + 5; // Lower the bullet point
    }

    // Get accent color using color theory
    const accentColor = getBulletAccentColor(color, themeClass);

    ctx.save();

    // Add subtle shadow for depth
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    // Use accent color instead of text color
    ctx.fillStyle = accentColor;

    switch (style) {
        case 'diamond':
            // Diamond shape
            ctx.beginPath();
            ctx.moveTo(x, centerY - size / 2);
            ctx.lineTo(x + size / 2, centerY);
            ctx.lineTo(x, centerY + size / 2);
            ctx.lineTo(x - size / 2, centerY);
            ctx.closePath();
            ctx.fill();
            break;

        case 'shield':
            // Shield shape for protection themes
            ctx.beginPath();
            ctx.moveTo(x, centerY - size / 2);
            ctx.lineTo(x + size / 2, centerY - size / 3);
            ctx.lineTo(x + size / 2, centerY + size / 4);
            ctx.lineTo(x, centerY + size / 2);
            ctx.lineTo(x - size / 2, centerY + size / 4);
            ctx.lineTo(x - size / 2, centerY - size / 3);
            ctx.closePath();
            ctx.fill();
            break;

        case 'arrow':
            // Arrow for directional emphasis
            ctx.beginPath();
            ctx.moveTo(x - size / 2, centerY - size / 3);
            ctx.lineTo(x + size / 2, centerY);
            ctx.lineTo(x - size / 2, centerY + size / 3);
            ctx.closePath();
            ctx.fill();
            break;

        case 'circle':
            // Simple circle with gradient for depth
            const gradient = ctx.createRadialGradient(
                x, centerY, 0,
                x, centerY, size / 2
            );
            gradient.addColorStop(0, lightenColor(accentColor, 0.2));
            gradient.addColorStop(1, accentColor);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, centerY, size / 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            break;
    }

    ctx.restore();
}

/**
 * Get an accent color for bullet points based on color theory
 * @param {string} baseColor - The text/main theme color
 * @param {string} themeClass - The theme class
 * @return {string} An accent color that pops
 */
function getBulletAccentColor(baseColor, themeClass) {
    // Extract RGB components from the base color
    let r, g, b;

    if (baseColor.startsWith('#')) {
        r = parseInt(baseColor.slice(1, 3), 16);
        g = parseInt(baseColor.slice(3, 5), 16);
        b = parseInt(baseColor.slice(5, 7), 16);
    } else if (baseColor.startsWith('rgb')) {
        const parts = baseColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
        if (parts) {
            r = parseInt(parts[1]);
            g = parseInt(parts[2]);
            b = parseInt(parts[3]);
        }
    }

    // If no valid color format was found, return a fallback
    if (r === undefined) return '#fc6d26';

    // Create different accent strategies based on themes
    switch (themeClass) {
        case 'theme-blue':
            // Complementary orange accent for blue theme
            return '#fc6d26'; // Vibrant orange

        case 'theme-green':
            // Rose/magenta accent for green theme
            return '#e64980'; // Vibrant pink

        case 'theme-purple':
            // Gold accent for purple theme
            return '#fcc419'; // Bright gold

        case 'theme-sunset':
            // Teal accent for sunset theme
            return '#0ca678'; // Teal

        case 'theme-dark':
            // Vibrant accent for dark theme that stands out
            return '#3bc9db'; // Bright cyan

        case 'theme-red':
            // Contrasting accent for red theme
            return '#4dabf7'; // Bright blue

        default:
            // Create a complementary color by inverting the RGB values
            return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    }
}

function getCardCategory(card) {
    // Check if this card is a category header (title is in ALL CAPS)
    if (card.title === card.title.toUpperCase() && card.title in categoryImages) {
        return card.title;
    }

    // Look for "Fighting Disinformation" in the title - these belong to counter-strategies
    if (card.title.includes("Fighting Disinformation")) {
        return "COUNTER-STRATEGIES & DEFENSE";
    }

    // For other cards, scan through cardData to find their category
    let currentCategory = "INTRODUCTION";

    for (const dataCard of CARD_DATA) {
        if (dataCard.title === dataCard.title.toUpperCase() && dataCard.title in categoryImages) {
            currentCategory = dataCard.title;
        }

        if (dataCard.title === card.title) {
            return currentCategory;
        }
    }

    return "INTRODUCTION"; // Default fallback
}
