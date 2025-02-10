function calculateEMI() {
    event.preventDefault()
    let loanAmount = document.getElementById("loanAmount").value;
    let interestRate = document.getElementById("interestRate").value;
    let loanTenure = document.getElementById("loanTenure").value;

    if (loanAmount === "" || interestRate === "" || loanTenure === "") {
        alert("Please fill in all fields!");
        return;
    }

    let principal = parseFloat(loanAmount);
    let annualRate = parseFloat(interestRate) / 100;
    let monthlyRate = annualRate / 12;
    let months = parseInt(loanTenure);

    let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
              (Math.pow(1 + monthlyRate, months) - 1);

    document.getElementById("emiResult").innerText = emi.toFixed(2);
}
