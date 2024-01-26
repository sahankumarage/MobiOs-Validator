const data = {
    datasets: [{
        label: 'My First Dataset',
        data: [300, 100],
        backgroundColor: ['#f61c09', '#78cd32'],
        hoverOffset: 4,
    }],
};

const config = {
    type: 'doughnut',
    data: data,
};

const ctx = document.getElementById('myDoughnutChart').getContext('2d');
new Chart(ctx, config);

