document.getElementById("akanform").addEventListener("submit", function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!day || !month || !year || !gender) {
    alert("Please fill in all fields and select your gender.");
    return;
  }

  if (day < 1 || day > 31 || month < 1 || month > 12) {
    alert("Invalid date or month");
    return;
  }

  const CC = Math.floor(year / 100);
  const YY = year % 100;
  const MM = month;
  const DD = day;

  const d = Math.floor(
    ((4 * CC - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7
  );

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  let akanName = gender.value === "male" ? maleNames[d] : femaleNames[d];

  document.getElementById("result").innerHTML =
    `You were born on a <strong>${days[d]}</strong>.<br>
     Your Akan name is <span>${akanName}</span>.`;

  document.getElementById("akanform").reset();
});