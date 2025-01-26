document.addEventListener("DOMContentLoaded", () => {
    const budgetInput = document.getElementById("budgetInput");
    const budgetForm = document.getElementById("budgetForm");
    const progressBar = document.getElementById("progressBar");
    const spentAmountElement = document.getElementById("spentAmount");
    const remainingAmountElement = document.getElementById("remainingAmount");
    const progressText = document.getElementById("progressText");
    const realTimeSpent = document.getElementById("realTimeSpent");
    const realTimeRemaining = document.getElementById("realTimeRemaining");
    const toast = document.getElementById("toast");
  
    // Initialize budget and spending
    let monthlyBudget = 0;
    let spentAmount = 0;
  
    // Function to update progress
    const updateProgress = () => {
      const remainingAmount = monthlyBudget - spentAmount;
      const progressPercentage = (spentAmount / monthlyBudget) * 100;
  
      // Update displayed amounts
      spentAmountElement.textContent = `$${spentAmount.toFixed(2)}`;
      remainingAmountElement.textContent = `$${remainingAmount.toFixed(2)}`;
      progressText.textContent =
      progressPercentage >= 100
        ? "You've exceeded your budget!"
        : `You're ${progressPercentage.toFixed(0)}% through your budget.`;
    
  
      // Update progress bar
      progressBar.style.width = `${Math.min(progressPercentage, 100)}%`;
      progressBar.style.backgroundColor =
        progressPercentage >= 100 ? "#e63946" : "#4caf50"; // Red if exceeded, green otherwise
    };
  
    // Function to update real-time stats as user enters budget
    const updateRealTimeStats = () => {
      const inputBudget = parseFloat(budgetInput.value) || 0; // Fallback to 0 if input is invalid
      const remainingAmount = inputBudget - spentAmount;
  
      realTimeSpent.textContent = `$${spentAmount.toFixed(2)}`;
      realTimeRemaining.textContent = `$${remainingAmount.toFixed(2)}`;
    };
  
    // Function to show toast notifications
    const showToast = (message) => {
      toast.textContent = message;
      toast.classList.add("show");
  
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    };
  
    // Handle form submission to set budget
    budgetForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const budgetValue = parseFloat(budgetInput.value);
  
      if (isNaN(budgetValue) || budgetValue <= 0) {
        showToast("Please enter a valid budget amount.");
        return;
      }
  
      monthlyBudget = budgetValue;
      spentAmount = 0; // Reset spent amount when setting a new budget
      budgetInput.value = ""; // Clear input field
  
      updateProgress();
      showToast(`Monthly budget set to $${monthlyBudget.toFixed(2)}.`);
    });
  
    // Update real-time stats when budget input changes
    budgetInput.addEventListener("input", updateRealTimeStats);
  });