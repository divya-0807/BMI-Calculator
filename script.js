const button = document.querySelector('.calculate');
const weightInput = document.querySelector('.weight');
const heightInput = document.querySelector('.height');
const bmiValue = document.querySelector('.bmi-value');
const bmiCategory = document.querySelector('.bmi-category');

button.addEventListener('click', function() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }
    

    const bmi = (weight *10000)/ (height * height);
    bmiValue.textContent = bmi.toFixed(2);

    if (bmi < 18.6) {
        bmiCategory.textContent = 'Underweight';
        bmiCategory.style.color = 'red';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        bmiCategory.textContent = 'Normal Range';
        bmiCategory.style.color = 'green';
    } else {
        bmiCategory.textContent = 'Overweight';
        bmiCategory.style.color = 'red';
    }
});
