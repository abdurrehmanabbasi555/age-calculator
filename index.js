//new code>>
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

btnEl.addEventListener("click", () => {
    const birthdayValue = birthdayEl.value.trim();
    if (birthdayValue === "") {
        alert("Please enter your birthday");
        return;
    }

    resultEl.innerText = calculateAge(birthdayValue);
});

function calculateAge(birthdayValue) {
    const birthdayDate = new Date(birthdayValue);
    const ageDate = new Date(Date.now() - birthdayDate.getTime());
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return `Your age is ${age} ${age === 1 ? "year" : "years"} old`;
}

//old code>>
// let currentDate = new Date();

// let currentYear = currentDate.getFullYear();

// let birthDate = new Date(document.getElementById('birthday').value);

// let birthYear = birthDate.getFullYear();

// let age = currentYear - birthYear;

// function ageCalculator(){
//     if (birthDate === " ") {
//         alert("Please Enter Your Birthday.");
//     } else {
//         alert("Your Age is " + birthDate + " Years Old." );
//     }
// }