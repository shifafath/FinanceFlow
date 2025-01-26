// Sample spending data
const spendingData = [
    { category: 'Grocery', amount: 500, percentage: 25 },
    { category: 'Transport', amount: 300, percentage: 15 },
    { category: 'Entertainment', amount: 400, percentage: 20 },
    { category: 'Supplies', amount: 200, percentage: 10 },
    { category: 'Others', amount: 600, percentage: 30 }
];

// Initialize pie chart
function initPieChart() {
    const ctx = document.getElementById('spendingPieChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: spendingData.map(item => item.category),
            datasets: [{
                data: spendingData.map(item => item.amount),
                backgroundColor: [
                    '#6E59A5',
                    '#8B5CF6',
                    '#E5DEFF',
                    '#9F7AEA',
                    '#B794F4'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Spending Distribution'
                }
            }
        }
    });
}

// Create category cards
function createCategoryCards() {
    const container = document.querySelector('.categories-container');
    
    spendingData.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        
        card.innerHTML = `
            <div class="category-header">
                <span class="category-name">${category.category}</span>
                <span class="category-amount">$${category.amount}</span>
            </div>
            <div class="progress-container">
                <div class="progress-bar" style="width: ${category.percentage}%"></div>
            </div>
            <div class="category-percentage">${category.percentage}% of total</div>
        `;
        
        container.appendChild(card);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initPieChart();
    createCategoryCards();
});