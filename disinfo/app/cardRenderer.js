function renderCardToCanvas(canvas, card) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Get layout and theme styles
    const layoutClass = card.layout || 'layout-centered';
    const themeClass = card.theme || 'theme-blue';

    // Create a temporary div to apply CSS styles
    const tempDiv = document.createElement('div');
    tempDiv.className = `card-content ${layoutClass} ${themeClass}`;
    tempDiv.style.width = `${width}px`;
    tempDiv.style.height = `${height}px`;

    let backgroundColor, color;

    try {
        // Append the div to get computed styles
        document.body.appendChild(tempDiv);

        // Get computed styles
        const styles = window.getComputedStyle(tempDiv);
        backgroundColor = styles.backgroundColor;
        color = styles.color;
    } finally {
        // Always remove the temporary div, even if an error occurs
        if (tempDiv.parentNode) {
            document.body.removeChild(tempDiv);
        }
    }

    // Apply theme-specific background color overrides
    backgroundColor = getThemeBackgroundColor(themeClass, backgroundColor);

    // Just draw with the solid background:
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Now apply gradient on top
    const gradient = createCardGradient(ctx, width, height, backgroundColor);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    drawWatermark(ctx, width, height, card);

    // Adjust spacing based on aspect ratio
    const aspectRatio = height / width;
    const isPortrait = aspectRatio > 1;

    // Adjust title Y position for portrait mode
    if (isPortrait) {
        if (layoutClass === 'layout-centered') {
            titleY = 250; // Move title down in portrait mode
        } else if (layoutClass === 'layout-split') {
            titleY = 175; // Adjust split layout title position
        } else if (layoutClass === 'layout-boxed') {
            titleBoxY = 150; // Adjust boxed layout title position
        }
    }

    // Get orientation type
    const orientationSelect = document.getElementById(`orientation-select-${canvas.id.split('-')[1]}`);
    const isStoryMode = orientationSelect?.value === 'story';

    // Adjust font sizes and spacing for story mode
    const titleFontSize = isStoryMode ? 72 : 56; // Larger title for stories
    const bodyFontSize = isStoryMode ? 42 : 32;  // Larger body text for stories
    const topPadding = isStoryMode ? 250 : 100;  // Extra padding for story UI

    // Update layout-specific positions
    if (isStoryMode) {
        if (layoutClass === 'layout-centered') {
            titleY = topPadding;
        } else if (layoutClass === 'layout-split') {
            titleY = topPadding - 50;
        } else if (layoutClass === 'layout-boxed') {
            titleBoxY = topPadding - 75;
        }
    }

    // Draw content based on layout with story mode adjustments
    if (layoutClass === 'layout-centered') {
        renderCenteredLayout(ctx, width, height, card, color, isStoryMode, {
            titleFontSize,
            bodyFontSize,
            topPadding
        });
    } else if (layoutClass === 'layout-split') {
        renderSplitLayout(ctx, width, height, card, color, isStoryMode, {
            titleFontSize,
            bodyFontSize,
            topPadding
        });
    } else if (layoutClass === 'layout-boxed') {
        renderBoxedLayout(ctx, width, height, card, color, isStoryMode, {
            titleFontSize,
            bodyFontSize,
            topPadding
        });
    }
}
function renderCenteredLayout(ctx, width, height, card, color, isStoryMode, options) {
    ctx.fillStyle = color;
    ctx.textAlign = 'center';

    // Draw title with wrapping
    ctx.font = `bold ${options.titleFontSize}px "Segoe UI", sans-serif`;
    const titleLines = wrapText(ctx, card.title, isStoryMode ? width - 160 : width - 200);
    const titleLineHeight = options.titleFontSize + 15;
    let titleY = options.topPadding + (titleLines.length > 1 ? 0 : 50);

    titleLines.forEach(line => {
        ctx.fillText(line, width / 2, titleY);
        titleY += titleLineHeight;
    });

    // Draw points with wrapping
    ctx.font = `${options.bodyFontSize}px "Segoe UI", sans-serif`;
    const lineHeight = options.bodyFontSize + 25;
    let startY = titleY + 80;

    // Calculate text positioning for bullets
    const maxWidth = isStoryMode ? width - 140 : width - 200;

    card.points.forEach((point, index) => {
        // Now wrap text WITHOUT the bullet character
        const pointLines = wrapText(ctx, point, maxWidth);

        // For the first line of each point, draw a custom bullet
        // Calculate where text starts for proper bullet placement
        const textWidth = ctx.measureText(pointLines[0]).width;
        const bulletX = (width / 2) - (textWidth / 2) - 20; // 20px to the left of text start

        // Draw bullet just once for each point
        drawBulletPoint(ctx, bulletX, startY, color, getBulletStyle('centered'), card.theme);

        // Now draw each line of text (without bullets)
        pointLines.forEach((line, lineIndex) => {
            ctx.fillText(line, width / 2, startY);
            startY += lineHeight;
        });

        startY += isStoryMode ? 40 : 10; // More spacing between points in story mode
    });

    renderCardFooter(ctx, width, height, color, isStoryMode);
}

/**
 * Render the split layout
 */
function renderSplitLayout(ctx, width, height, card, color, isStoryMode, options) {
    ctx.fillStyle = color;

    // Draw title with wrapping
    ctx.textAlign = 'center';
    ctx.font = `bold ${options.titleFontSize}px "Segoe UI", sans-serif`;
    const titleLines = wrapText(ctx, card.title, isStoryMode ? width - 160 : width - 200);
    const titleLineHeight = options.titleFontSize + 15;
    let titleY = options.topPadding + (titleLines.length > 1 ? 0 : 50);

    // Draw title text
    titleLines.forEach(line => {
        ctx.fillText(line, width / 2, titleY);
        titleY += titleLineHeight;
    });

    // Draw separator line with consistent spacing
    const separatorY = titleY + (isStoryMode ? 50 : 30);
    ctx.beginPath();
    ctx.moveTo(100, separatorY);
    ctx.lineTo(width - 100, separatorY);
    ctx.lineWidth = 5;
    ctx.strokeStyle = color;
    ctx.stroke();

    // Draw points with wrapping
    ctx.textAlign = 'left';
    ctx.font = `${options.bodyFontSize}px "Segoe UI", sans-serif`;
    const lineHeight = options.bodyFontSize + 25;
    let startY = separatorY + (isStoryMode ? 90 : 70);

    card.points.forEach((point, index) => {
        const pointLines = wrapText(ctx, point, isStoryMode ? width - 180 : width - 250);

        // Draw bullet just once for each point
        drawBulletPoint(ctx, 100, startY, color, getBulletStyle('split'), card.theme);

        // Draw each line with proper indentation
        pointLines.forEach((line, lineIndex) => {
            ctx.fillText(line, 130, startY);
            startY += lineHeight;
        });

        // Add extra space between different points
        startY += isStoryMode ? 40 : 15;
    });

    renderCardFooter(ctx, width, height, color, isStoryMode);

}

/**
 * Render the boxed layout
 */
function renderBoxedLayout(ctx, width, height, card, color, isStoryMode, options) {
    ctx.fillStyle = color;

    // Draw title with wrapping
    ctx.textAlign = 'center';
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;

    // Measure title to determine box height
    ctx.font = `bold ${options.titleFontSize}px "Segoe UI", sans-serif`;
    const titleLines = wrapText(ctx, card.title, isStoryMode ? width - 160 : width - 240);
    const titleLineHeight = options.titleFontSize + 15;
    const titleBoxHeight = Math.max(120, titleLines.length * titleLineHeight + (isStoryMode ? 100 : 80));

    // Adjust the width of the title box for story mode
    const titleBoxX = isStoryMode ? 50 : 100; // Reduce left margin for story mode
    const titleBoxWidth = isStoryMode ? width - 100 : width - 200; // Increase width for story mode
    const titleBoxY = options.topPadding;

    // Draw title box with adjusted width
    ctx.strokeRect(titleBoxX, titleBoxY, titleBoxWidth, titleBoxHeight);

    // Calculate vertical centering within box
    const totalTextHeight = titleLines.length * titleLineHeight;
    const verticalPadding = (titleBoxHeight - totalTextHeight) / 2;
    let titleY = titleBoxY + verticalPadding + titleLineHeight * 0.8;

    // Draw title text
    titleLines.forEach(line => {
        ctx.fillText(line, width / 2, titleY);
        titleY += titleLineHeight;
    });

    // Set up for points
    ctx.textAlign = 'left';
    ctx.font = `${options.bodyFontSize}px "Segoe UI", sans-serif`;
    const lineHeight = options.bodyFontSize + 25;
    let startY = titleBoxY + titleBoxHeight + (isStoryMode ? 90 : 70);

    // Get background color based on theme
    const boxBackground = card.theme === 'theme-dark'
        ? 'rgba(255, 255, 255, 0.25)'
        : 'rgba(0, 0, 0, 0.1)';

    // Offset value for the boxes (only in story mode)
    const boxOffset = isStoryMode ? -35 : 0;

    // Padding for the text inside the box
    const textPadding = 10;

    // Draw each point
    card.points.forEach((point, index) => {
        // Reduce maxWidth for story mode
        let maxWidth = isStoryMode ? width - 190 : width - 250;
        // Increase maxWidth by 20px in story mode

        const pointLines = wrapText(ctx, point, maxWidth);
        const pointBoxHeight = Math.max(60, pointLines.length * lineHeight + (isStoryMode ? 30 : 20));

        // Draw box for each point with offset
        ctx.fillStyle = boxBackground;
        ctx.fillRect(80 + boxOffset, startY - 35, width - 160 - (2 * boxOffset), pointBoxHeight);

        // Draw bullet and text with proper color
        ctx.fillStyle = color;

        drawBulletPoint(ctx, 100 + boxOffset, startY, color, getBulletStyle('box'), card.theme);

        // Draw each line of text with padding
        pointLines.forEach((line, lineIndex) => {
            ctx.fillText(line, 130 + boxOffset, startY + textPadding);
            startY += lineHeight;
        });

        // Add space between points
        startY += isStoryMode ? 50 : 35;
    });

    renderCardFooter(ctx, width, height, color, isStoryMode);
}
function drawWatermark(ctx, width, height, card) {
    // Get category, or use a customWatermark if specified
    const imageKey = card.customWatermark || card.category || "INTRODUCTION";
    const image = categoryImages[imageKey];

    if (image && image.complete && image.naturalHeight !== 0) {
        ctx.save();

        // Set global alpha for transparency
        ctx.globalAlpha = 0.10; // Very subtle watermark

        // Calculate sizing to maintain aspect ratio while covering the canvas
        const aspectRatio = image.naturalWidth / image.naturalHeight;
        let drawWidth, drawHeight, x, y;

        if (width / height > aspectRatio) {
            // Canvas is wider than image
            drawWidth = width;
            drawHeight = width / aspectRatio;
            x = 0;
            y = (height - drawHeight) / 2;
        } else {
            // Canvas is taller than image
            drawHeight = height;
            drawWidth = height * aspectRatio;
            x = (width - drawWidth) / 2;
            y = 0;
        }

        // Draw the image
        ctx.drawImage(image, x, y, drawWidth, drawHeight);

        // Restore the context
        ctx.restore();
    }
}
function renderCardFooter(ctx, width, height, color, isStoryMode) {
    // Use the pre-loaded logo
    if (logoImage.complete) {
        // Logo is already loaded, draw immediately
        drawFooterContent();
    } else {
        // Wait for logo to load
        logoImage.onload = drawFooterContent;
    }

    function drawFooterContent() {
        const logoHeight = isStoryMode ? 80 : 60;
        const logoWidth = (logoImage.width / logoImage.height) * logoHeight;
        const logoY = height - (isStoryMode ? 80 : 40) - logoHeight;

        // Draw logo on the left
        ctx.drawImage(logoImage, 40, logoY, logoWidth, logoHeight);

        // Draw link text on the right
        ctx.font = `500 ${isStoryMode ? '24px' : '20px'} "Segoe UI", sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = 'right';
        ctx.fillText('', width - 40, height - (isStoryMode ? 100 : 60));
    }
}

function updateCanvasSize(index) {
    const canvas = document.getElementById(`canvas-${index}`);
    const orientationSelect = document.getElementById(`orientation-select-${index}`);
    const selectedOrientation = ORIENTATIONS.find(o => o.id === orientationSelect.value);

    canvas.width = selectedOrientation.width;
    canvas.height = selectedOrientation.height;
}

function renderCardBorder(ctx, width, height, color) {
    // Add subtle corner accents
    const cornerSize = 40;
    const margin = 20;

    ctx.strokeStyle = adjustColor(color, 0.5);
    ctx.lineWidth = 2;

    // Top left corner
    ctx.beginPath();
    ctx.moveTo(margin, margin + cornerSize);
    ctx.lineTo(margin, margin);
    ctx.lineTo(margin + cornerSize, margin);
    ctx.stroke();

    // Similar for other corners...
}
