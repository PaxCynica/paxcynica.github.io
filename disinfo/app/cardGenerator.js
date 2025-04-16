function createCardPreviewElement(card, index) {
    // Create container for the card preview
    const cardPreview = document.createElement('div');
    cardPreview.className = 'card-preview';
    cardPreview.dataset.index = index;

    // Create header with title
    const cardPreviewHeader = document.createElement('div');
    cardPreviewHeader.className = 'card-preview-header';

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    cardTitle.textContent = card.title;

    cardPreviewHeader.appendChild(cardTitle);
    cardPreview.appendChild(cardPreviewHeader);

    // Create canvas container
    const canvasContainer = document.createElement('div');
    canvasContainer.className = 'card-canvas-container';

    const canvasWrapper = document.createElement('div');
    canvasWrapper.className = 'card-canvas-wrapper';

    const canvas = document.createElement('canvas');
    canvas.className = 'card-canvas';
    canvas.width = 1024;
    canvas.height = 1024;
    canvas.id = `canvas-${index}`;

    canvasWrapper.appendChild(canvas);
    canvasContainer.appendChild(canvasWrapper);
    cardPreview.appendChild(canvasContainer);

    // Create controls
    const controls = document.createElement('div');
    controls.className = 'card-controls';

    // Layout selection
    const layoutGroup = document.createElement('div');
    layoutGroup.className = 'control-group';

    const layoutLabel = document.createElement('label');
    layoutLabel.textContent = 'Layout:';
    layoutLabel.htmlFor = `layout-select-${index}`;

    const layoutSelect = document.createElement('select');
    layoutSelect.id = `layout-select-${index}`;
    layoutSelect.addEventListener('change', () => updateCardPreview(index));

    // Create options for each layout
    LAYOUTS.forEach(layout => {
        const option = document.createElement('option');
        option.value = layout.id;
        option.textContent = layout.name;
        option.selected = card.layout === layout.id;
        layoutSelect.appendChild(option);
    });

    layoutGroup.appendChild(layoutLabel);
    layoutGroup.appendChild(layoutSelect);
    controls.appendChild(layoutGroup);

    // Theme selection
    const themeGroup = document.createElement('div');
    themeGroup.className = 'control-group';

    const themeLabel = document.createElement('label');
    themeLabel.textContent = 'Theme:';
    themeLabel.htmlFor = `theme-select-${index}`;

    const themeSelect = document.createElement('select');
    themeSelect.id = `theme-select-${index}`;
    themeSelect.addEventListener('change', () => updateCardPreview(index));

    // Create options for each theme
    THEMES.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme.id;
        option.textContent = theme.name;
        option.selected = card.theme === theme.id;
        themeSelect.appendChild(option);
    });

    themeGroup.appendChild(themeLabel);
    themeGroup.appendChild(themeSelect);
    controls.appendChild(themeGroup);

    // Add orientation selection before download button
    const orientationGroup = document.createElement('div');
    orientationGroup.className = 'control-group';

    const orientationLabel = document.createElement('label');
    orientationLabel.textContent = 'Format:';
    orientationLabel.htmlFor = `orientation-select-${index}`;

    const orientationSelect = document.createElement('select');
    orientationSelect.id = `orientation-select-${index}`;
    orientationSelect.addEventListener('change', () => {
        updateCanvasSize(index);
        updateCardPreview(index);
    });

    // Create options for each orientation
    ORIENTATIONS.forEach(orientation => {
        const option = document.createElement('option');
        option.value = orientation.id;
        option.textContent = orientation.name;
        orientationSelect.appendChild(option);
    });

    orientationGroup.appendChild(orientationLabel);
    orientationGroup.appendChild(orientationSelect);
    controls.appendChild(orientationGroup);

    // Download individual card button
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'download-btn';
    downloadBtn.textContent = 'Download this card';
    downloadBtn.addEventListener('click', () => downloadCard(index));
    controls.appendChild(downloadBtn);

    cardPreview.appendChild(controls);

    // Render initial preview
    setTimeout(() => {
        updateCardPreview(index);
    }, 100);

    return cardPreview;
}

function updateCardPreview(index) {
    const card = cardData[index];
    const canvas = document.getElementById(`canvas-${index}`);
    const layoutSelect = document.getElementById(`layout-select-${index}`);
    const themeSelect = document.getElementById(`theme-select-${index}`);

    // Update card data with current selections
    card.layout = layoutSelect.value;
    card.theme = themeSelect.value;

    // Render the card on the canvas
    renderCardToCanvas(canvas, card);
}
