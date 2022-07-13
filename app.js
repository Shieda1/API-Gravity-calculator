const type =  document.getElementById('typeOfGravity');
const gravity = document.getElementById('gravity');
const label = document.getElementById('labal');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

type.addEventListener('click', function() {
  if(type.value === 'api')
    label.textContent = 'Enter the Specific Gravity : ';
  else if(type.value === 'spesific')
    label.textContent = 'Enter the API Gravity : ';
}) 

btn.addEventListener('click', function() {
  if(type.value === 'api')
    result.textContent = `The API Gravity is ${computeApi().toFixed(2)}°`;
  else if(type.value === 'spesific')
    result.textContent = `The Spesific Gravity is ${computeSpecific().toFixed(2)}`;
})


function computeApi() {
  return (141.5 / Number(gravity.value)) - 131.5;
}

function computeSpecific() {
  return 141.5 / (131.5 + Number(gravity.value));
}