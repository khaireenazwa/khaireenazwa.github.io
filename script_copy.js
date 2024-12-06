
function hideAllSections() {
    const sections = [
        'week4Section',
        'week5Section',
        'chartContainer1',
        'chartContainer2',
        'argumentSection',
        'commentChart1',
        'commentChart2',
        'finalCommentSection',
        'week6Section',
        'week7Section',
        'week8Section',
        'week9Section',
        'week10Section',
        'Week7finalCommentSection',
        'Week9finalCommentSection',
        'dashboardTitle'
    ];

    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            element.style.display = "none";
        }
    });
}


function loadCharts(chartNumber) {
    hideAllSections();

    if (chartNumber === 1) {
        // Week 1 charts
        document.getElementById('chartContainer1').style.display = "block";
        vegaEmbed('#chartContainer1', 'https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/refs/heads/main/charts/library/chartArea5.json');
        document.getElementById('chartContainer2').style.display = "block";
        vegaEmbed('#chartContainer2', 'https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/refs/heads/main/charts/library/chartBar6.json');

    } else if (chartNumber === 3) {
        // Week 2 charts
        document.getElementById('chartContainer1').style.display = "block";
        vegaEmbed('#chartContainer1', 'https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/visualization.vl.json');
        document.getElementById('chartContainer2').style.display = "block";
        vegaEmbed('#chartContainer2', 'https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/visualization.vl%20(1).json');

    } else if (chartNumber === 5) {
        // Week 3 charts
        document.getElementById('argumentSection').style.display = "block";
        document.getElementById('chartContainer1').style.display = "block";
        vegaEmbed('#chartContainer1', 'https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/visualization.vl%20(5).json')
            .then(() => {
                document.getElementById('commentChart1').style.display = "block";
            })
            .catch(console.error);
        document.getElementById('chartContainer2').style.display = "block";
        vegaEmbed('#chartContainer2', 'https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/visualization.vl%20(4).json')
            .then(() => {
                document.getElementById('commentChart2').style.display = "block";
            })
            .catch(console.error);
        document.getElementById('finalCommentSection').style.display = "block";

    } else if (chartNumber === 7) {
        // Week 4 charts
        document.getElementById('week4Section').style.display = "block";
        vegaEmbed('#replicatedChart', 'https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/replication.json');
        vegaEmbed('#improvedChart', 'https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/improved.json');

    } else if (chartNumber === 9) {
        // Week 5 chart
        document.getElementById('week5Section').style.display = "block";
        vegaEmbed('#week5Chart', 'https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/week%205%20chart.json');

    } else if (chartNumber === 11) {
        // Week 6 chart
        document.getElementById('week6Section').style.display = "block";
        vegaEmbed('#week6Chart', 'https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/Week%206%20Dashboard.json');

    } else if (chartNumber === 13) {
        // Week 7 charts
        document.getElementById('week7Section').style.display = "block";
        document.getElementById('chartContainer1').style.display = "block";
        vegaEmbed('#chartContainer1', 'https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/Week%207%20Map%201.json')
            .then(() => {
                document.getElementById('chartContainer2').style.display = "block";
                vegaEmbed('#chartContainer2', 'https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/week%207(2)%20revised.json');
            })
            .catch(console.error);

    } else if (chartNumber === 15) {
        // Week 8 charts
        document.getElementById('week8Section').style.display = "block";
        document.getElementById('chartContainer1').style.display = "block";
        vegaEmbed('#chartContainer1', 'https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/week%208%20(1).json')
            .then(() => {
                document.getElementById('chartContainer2').style.display = "block";
                vegaEmbed('#chartContainer2', 'https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/Week%208(2).json');
            })
            .catch(console.error);

    } else if (chartNumber === 17) {
        // Week 9 charts (images)
        document.getElementById('week9Section').style.display = "block";

    } else if (chartNumber === 19) {
        // Week 10 charts
        document.getElementById('week10Section').style.display = "block";
        document.getElementById('chartContainer1').style.display = "block";
        vegaEmbed('#chartContainer1', 'https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/Week%2010%20(1).json')
            .then(() => {
                document.getElementById('chartContainer2').style.display = "block";
                vegaEmbed('#chartContainer2', 'https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/Week%2010%20(2).json');
            })
            .catch(console.error);
    }
}

