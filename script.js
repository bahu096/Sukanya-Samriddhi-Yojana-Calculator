// Function to Calculate the Sukanya Samriddhi Yojana Maturity Amount
function calculateSSY() {
    const childAge = parseInt(document.getElementById('childAge').value);
    const yearlyInvestment = parseFloat(document.getElementById('yearlyInvestment').value);
    const startYear = parseInt(document.getElementById('startYear').value);
    const interestRate = 8.2 / 100; // SSY interest rate (8.2%)

    const investmentYears = 14; // Contributions for 14 years
    const maturityYear = startYear + 21; // Maturity is 21 years from start

    let totalInvestment = yearlyInvestment * investmentYears; // Total amount invested
    let totalCorpus = 0;

    // Compound Interest Calculation for Each Year
    for (let i = 0; i < investmentYears; i++) {
        totalCorpus += yearlyInvestment * Math.pow(1 + interestRate, maturityYear - (startYear + i));
    }

    // Display Results in the Result Box
    document.getElementById('maturityYear').textContent = maturityYear;
    document.getElementById('totalMaturity').textContent = totalCorpus.toFixed(2);
    document.getElementById('result').style.display = 'block';
}
