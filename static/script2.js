// Chart data
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Income',
            data: [4000, 3000, 2000, 2780, 1890, 2390],
            backgroundColor: '#9b87f5',
        },
        {
            label: 'Spending',
            data: [2400, 1398, 9800, 3908, 4800, 3800],
            backgroundColor: '#7E69AB',
        }
    ]
};

// Initialize chart
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('financialChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Add click handlers for buttons
    document.querySelectorAll('.action-btn').forEach(button => {
        button.addEventListener('click', function() {
            // You can add specific functionality for each button here
            console.log('Button clicked:', this.textContent.trim());
        });
    });
});