const budgetInput = document.getElementById('budget');
const budgetOutput = document.getElementById('budget-output');


if (budgetInput && budgetOutput) {
    
    budgetOutput.textContent = `Rp ${budgetInput.value} Juta`;

   
    budgetInput.addEventListener('input', () => {
        budgetOutput.textContent = `Rp ${budgetInput.value} Juta`;
    });

}
