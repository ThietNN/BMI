let w = parseInt(prompt('Input your weight (in kg)'));
let h = parseInt(prompt('input your height (in m)'));
let bmi

bmi = w / (h ^ 2);
if (bmi < 18.5) {
    alert('Underweight');
}
else if (bmi < 25) {
        alert('Normal');
}
    else if (bmi < 30) {
            alert('Overweight');
    }
        else {
            alert('Obese');
        }