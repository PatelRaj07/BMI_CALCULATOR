document.getElementById("bmiform").addEventListener("submit", function(e) {
  e.preventDefault();
  const gender = document.getElementById('gender').value;
  const age = parseInt(document.getElementById('age').value);
  const heightfeet = parseInt(document.getElementById('height-feet').value);
  const heightInches = parseInt(document.getElementById('height-inches').value);
  const weight = parseFloat(document.getElementById('weight').value);

  if(gender && age && heightfeet && heightInches && weight) {
    const heightInMeters = ((heightfeet * 12) + heightInches) * 0.0254;//in meters
    const bmi = weight / (heightInMeters * heightInMeters);
    const resultElement = document.getElementById('result');
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    }
    else {
        category = 'Obesity';
    }
    resultElement.innerHTML = `Your BMI is ${bmi.toFixed(2)}<br> and you are ${category}<br>`;
  }
});