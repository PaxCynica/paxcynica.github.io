const filterButtons = document.querySelectorAll('.filter-btn');
const dateGroups = document.querySelectorAll('.date-group');
const reportCards = document.querySelectorAll('.report-card');


filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active state
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filter reports
    filterReports();
  });
});

function filterReports() {
  const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

  reportCards.forEach(card => {
    const cardText = card.textContent.toLowerCase();
    const cardType = card.dataset.type;

    const matchesFilter = activeFilter === 'all' || cardType === activeFilter;

    card.style.display = matchesFilter ? 'block' : 'none';
  });

  // Show/hide date groups based on whether they have any visible reports
  dateGroups.forEach(group => {
    const hasVisibleReports = Array.from(group.querySelectorAll('.report-card'))
      .some(card => card.style.display !== 'none');

    group.style.display = hasVisibleReports ? 'block' : 'none';
  });
}

// Apply theme colors to bullets
document.addEventListener('DOMContentLoaded', function () {
  const themeItems = document.querySelectorAll('.topic-list li[data-color]');
  themeItems.forEach(item => {
    const color = item.getAttribute('data-color');
    item.style.setProperty('--bullet-color', color);

    // Create a style element for each item to customize the ::before pseudo-element
    const style = document.createElement('style');
    style.textContent = `
      .topic-list li[data-color="${color}"]::before {
        background-color: ${color};
      }
    `;
    document.head.appendChild(style);
  });
});
