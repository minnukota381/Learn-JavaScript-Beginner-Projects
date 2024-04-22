document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();
    calculateBMI();
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        showError("Please enter valid positive numbers for weight and height.");
        return;
    }

    const bmi = weight / Math.pow(height / 100, 2);
    displayResult(bmi);
}

function displayResult(bmi) {
    const resultDiv = document.getElementById('result');
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    const bmiInterpretation = document.getElementById('bmi-interpretation');

    bmiValue.textContent = bmi.toFixed(1);
    
    let category, interpretation, colorClass;

    if (bmi < 18.5) {
        category = "Underweight";
        interpretation = "You may need to gain some weight. Consult with a healthcare professional for advice.";
        colorClass = "underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
        interpretation = "You have a healthy weight. Maintain a balanced diet and regular exercise.";
        colorClass = "normal";
    } else if (bmi < 30) {
        category = "Overweight";
        interpretation = "You may need to lose some weight. Focus on a healthy diet and increased physical activity.";
        colorClass = "overweight";
    } else {
        category = "Obese";
        interpretation = "It's important to lose weight for your health. Consult with a healthcare professional for a weight loss plan.";
        colorClass = "obese";
    }

    bmiCategory.textContent = category;
    bmiInterpretation.textContent = interpretation;
    
    bmiCategory.className = 'h5 mb-3 ' + colorClass;

    resultDiv.style.display = 'block';

    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showError(message) {
    alert(message);
}