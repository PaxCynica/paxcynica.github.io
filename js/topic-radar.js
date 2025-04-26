// Chart.js configuration for better colors and readability
Chart.defaults.color = "#ffffff";
Chart.defaults.font.family = "'Segoe UI', 'Arial', sans-serif";

document.addEventListener('DOMContentLoaded', function () {
    // Fetch the topic data from JSON file with a relative path
    fetch('./data/topic_data.json')  // Changed from /data/topic_data.json to relative path
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(topicData => {
            console.log("Successfully loaded topic data:", topicData);
            renderTopicRadar(topicData);
        })
        .catch(error => {
            console.error('Error loading topic data:', error);
            // Fall back to static data if JSON fetch fails
            renderTopicRadar([
                {
                  "topic": "China",
                  "frequency": 54,
                  "agentColor": "#3498db"
                },
                {
                  "topic": "tariffs",
                  "frequency": 40,
                  "agentColor": "#0E76A8"
                },
                {
                  "topic": "Trump",
                  "frequency": 36,
                  "agentColor": "#3498db"
                },
                {
                  "topic": "Russia",
                  "frequency": 36,
                  "agentColor": "#3498db"
                },
                {
                  "topic": "Ukraine",
                  "frequency": 28,
                  "agentColor": "#00ACEE"
                },
                {
                  "topic": "Israel",
                  "frequency": 26,
                  "agentColor": "#3498db"
                },
                {
                  "topic": "Donald Trump",
                  "frequency": 24,
                  "agentColor": "#3498db"
                },
                {
                  "topic": "US",
                  "frequency": 23,
                  "agentColor": "#3498db"
                },
                {
                  "topic": "trade war",
                  "frequency": 20,
                  "agentColor": "#3A5998"
                },
                {
                  "topic": "India",
                  "frequency": 20,
                  "agentColor": "#3498db"
                }
              ]);
        });

    function renderTopicRadar(topicData) {
        // Sort by frequency for better visualization
        topicData.sort((a, b) => b.frequency - a.frequency);

        // Normalize frequencies for better visualization (first item is too large)
        const maxFreq = topicData[0].frequency;
        const normalizedData = topicData.map(item => ({
            ...item,
            normalizedFreq: Math.sqrt(item.frequency) * 10 // Square root scale works well
        }));

        // Get the canvas element
        const ctx = document.getElementById('topicRadar');

        if (ctx) {
            // Create the chart
            const myChart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: normalizedData.map(item => item.topic),
                    datasets: [{
                        data: normalizedData.map(item => item.normalizedFreq),
                        backgroundColor: normalizedData.map(item => item.agentColor + 'B0'), // More opacity
                        borderColor: normalizedData.map(item => item.agentColor),
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            ticks: {
                                display: false
                            },
                            grid: {
                                color: 'rgba(233, 69, 96, 0.15)'
                            },
                            angleLines: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'right',
                            align: 'start',
                            labels: {
                                color: '#ffffff',
                                font: {
                                    size: 12,
                                    weight: 'bold'
                                },
                                padding: 15,
                                boxWidth: 15,
                                usePointStyle: true,
                                generateLabels: function (chart) {
                                    const original = Chart.overrides.polarArea.plugins.legend.labels.generateLabels;
                                    const labels = original.call(this, chart);

                                    // Show actual frequency in parentheses
                                    labels.forEach((label, i) => {
                                        label.text = `${label.text} (${topicData[i].frequency})`;
                                    });

                                    return labels;
                                }
                            },
                            title: {
                                display: true,
                                text: 'Topic Frequency',
                                color: '#ffffff',
                                font: {
                                    size: 14
                                },
                                padding: {
                                    bottom: 10
                                }
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(15, 15, 20, 0.85)',
                            titleColor: '#e94560',
                            bodyColor: '#ffffff',
                            borderColor: 'rgba(233, 69, 96, 0.3)',
                            borderWidth: 1,
                            padding: 12,
                            displayColors: true,
                            titleFont: {
                                size: 14,
                                weight: 'bold'
                            },
                            bodyFont: {
                                size: 13
                            },
                            callbacks: {
                                label: function (context) {
                                    // Show actual frequency, not normalized value
                                    const actualFreq = topicData[context.dataIndex].frequency;
                                    return `Mentions: ${actualFreq}`;
                                }
                            }
                        }
                    }
                }
            });
        }
    }
});