window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    let Height = parseFloat(document.querySelector("#Height").value);
    let Weight = parseFloat(document.querySelector("#Weight").value);
    let result = document.querySelector("#result");

    if (isNaN(Height) || Height <= 0) {
        result.innerHTML = "Provide a valid height!";
    } else if (isNaN(Weight) || Weight <= 0) {
        result.innerHTML = "Provide a valid weight!";
    } else {
        let bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `Underweight: ${bmi}`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal: ${bmi}`;
        } else {
            result.innerHTML = `Overweight: ${bmi}`;
        }
    }
}
