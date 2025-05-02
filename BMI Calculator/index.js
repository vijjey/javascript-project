const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  const guide = document.querySelector('#guide'); // Fixed selector here

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${BMI}</span>`;

    // Now guide user based on BMI value
    if (BMI < 18.6) {
      guide.innerHTML = `Underweight! Your BMI is ${BMI}`;
    } else if (BMI >= 18.6 && BMI <= 24.9) { // Fixed the condition with &&
      guide.innerHTML = `Normal Range! Your BMI is ${BMI}`;
    } else {
      guide.innerHTML = `Overweight! Your BMI is ${BMI}`;
    }
  }
});

