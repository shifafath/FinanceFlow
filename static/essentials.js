document.addEventListener("DOMContentLoaded", () => {
    const monthSelector = document.getElementById("month");
    const saveButton = document.getElementById("saveEssentials");
  
    // Prepopulate the month dropdown
    const currentDate = new Date();
    for (let i = 0; i < 12; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
      const option = document.createElement("option");
      option.value = date.toISOString();
      option.textContent = date.toLocaleString("default", { month: "long", year: "numeric" });
      monthSelector.appendChild(option);
    }
  
    // Save Essentials
    saveButton.addEventListener("click", () => {
      const essentials = {
        month: monthSelector.value,
        electricity: document.getElementById("electricity").value,
        utilities: document.getElementById("utilities").value,
        rent: document.getElementById("rent").value,
      };
  
      // Show success message (temporary example)
      alert("Essentials Saved: " + JSON.stringify(essentials, null, 2));
    });
  });