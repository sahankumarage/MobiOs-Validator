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
    })
    .catch(error => {
        console.error('Error:', error);
    });

function populateTable(data) {
    // Get the table body element
    const tableBody = document.getElementById('nicTableBody');

    // Iterate over the data and create table rows
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.checkedNic}</td>
            <td>${item.birthday}</td>
            <td>${item.gender}</td>
            <td>${item.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

