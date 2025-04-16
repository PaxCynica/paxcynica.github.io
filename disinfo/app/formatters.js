function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = ctx.measureText(currentLine + ' ' + word).width;

        if (width < maxWidth) {
            currentLine += ' ' + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }

    lines.push(currentLine);
    return lines;
}

// Add this function after the wrapText function
/**
 * Create a radial gradient background
 * @param {CanvasRenderingContext2D} ctx - Canvas context
 * @param {number} width - Canvas width
 * @param {number} height - Canvas height
 * @param {string} backgroundColor - Base background color
 * @return {CanvasGradient} The gradient object
 */
function createCardGradient(ctx, width, height, backgroundColor) {
    // Fix transparency issues by ensuring solid background
    // Check if the color includes transparency (rgba)
    if (backgroundColor.includes('rgba')) {
        // Convert any rgba colors to solid rgb equivalents
        const matches = backgroundColor.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);
        if (matches) {
            // Create solid version of the color
            backgroundColor = `rgb(${matches[1]}, ${matches[2]}, ${matches[3]})`;
        }
    }

    // Calculate center and radius
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.max(width, height) * 0.7;

    // Create gradient from center to edges
    const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius
    );

    // Use solid colors for the gradient
    const centerColor = lightenColor(backgroundColor, 0.12);
    const edgeColor = backgroundColor;

    // Add color stops with a more dramatic transition
    gradient.addColorStop(0, centerColor);
    gradient.addColorStop(0.7, lightenColor(backgroundColor, 0.1));
    gradient.addColorStop(1, edgeColor);

    return gradient;
}

/**
 * Lighten a color by a given percentage
 * @param {string} color - CSS color string
 * @param {number} amount - Amount to lighten (0-1)
 * @return {string} Lightened color
 */
function lightenColor(color, amount) {
    // Handle rgba colors
    if (color.startsWith('rgba')) {
        const parts = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        if (!parts) return color;

        const r = Math.min(255, parseInt(parts[1]) + Math.round(amount * 255));
        const g = Math.min(255, parseInt(parts[2]) + Math.round(amount * 255));
        const b = Math.min(255, parseInt(parts[3]) + Math.round(amount * 255));
        const a = parts[4] || 1;

        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    // Handle hex colors
    if (color.startsWith('#')) {
        let r = parseInt(color.slice(1, 3), 16);
        let g = parseInt(color.slice(3, 5), 16);
        let b = parseInt(color.slice(5, 7), 16);

        r = Math.min(255, r + Math.round(amount * 255));
        g = Math.min(255, g + Math.round(amount * 255));
        b = Math.min(255, b + Math.round(amount * 255));

        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    return color; // Return original if format not recognized
}

// Add this helper function right after the lightenColor function
/**
 * Get the correct background color for a theme, ensuring solid colors for all themes
 * @param {string} themeClass - The theme class name
 * @param {string} backgroundColor - The computed background color
 * @return {string} The solid background color to use
 */
function getThemeBackgroundColor(themeClass, backgroundColor) {
    // Define custom solid background colors for each theme
    switch (themeClass) {
        case 'theme-blue':
            return '#e6f2ff'; // Light blue base

        case 'theme-green':
            return '#e6f7e6'; // Light green base

        case 'theme-purple':
            return '#f0e6ff'; // Light purple base

        case 'theme-dark':
            return '#333333'; // Much darker gray base for dark theme

        case 'theme-sunset':
            return '#ffead0'; // Light warm/peach base

        case 'theme-red':
            return '#fff0f0'; // Light red/pink base

        default:
            // For themes without specific overrides, ensure no transparency
            if (backgroundColor.includes('rgba')) {
                const matches = backgroundColor.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);
                if (matches) {
                    return `rgb(${matches[1]}, ${matches[2]}, ${matches[3]})`;
                }
            }
            return backgroundColor;
    }
}
