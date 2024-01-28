// Define initial doughnut chart data
const chartData = {
    datasets: [{
        label: 'My First Dataset',
        data: [0, 0], // Initialize with 0 counts
        backgroundColor: ['#78cd32', '#f61c09'],
        hoverOffset: 4,
    }],
};

// Create the initial chart
const chartConfig = {
    type: 'doughnut',
    data: chartData,
};

const chartCtx = document.getElementById('myDoughnutChart').getContext('2d');
const doughnutChart = new Chart(chartCtx, chartConfig);

// Fetch data from the API
fetch('http://localhost:8080/nic/nics')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Populate the table with data
        populateTable(data);

        // Update doughnut chart with total counts
        updateDoughnutChart(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

function populateTable(data) {
    const tableBody = document.getElementById('nicTableBody');

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.checkedId}</td>
            <td>${item.birthday}</td>
            <td>${item.gender}</td>
            <td>${item.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

function updateDoughnutChart(data) {
    const activeCount = data.filter(item => item.status === '🟢 Active').length;
    const inactiveCount = data.filter(item => item.status === '🔴 Deactivate').length;

    doughnutChart.data.datasets[0].data = [activeCount, inactiveCount];

    doughnutChart.update();
}
