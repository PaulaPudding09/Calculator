function berechnen() {
  let zahl1 = Number(document.getElementById("zahl1").value);
  let zahl2 = Number(document.getElementById("zahl2").value);
  const operator = document.getElementById("operator").value;

  let summe;
  console.log(operator);

  switch (operator) {
    case "+":
      summe = zahl1 + zahl2;
      break;

    case "-":
      summe = zahl1 - zahl2;
      break;

    case "*":
      summe = zahl1 * zahl2;
      break;

    case "/":
      if (zahl2 === 0) {
        summe = "Nicht durch 0 teilen!!";
      } else {
        summe = zahl1 / zahl2;
      }
      break;
  }
  document.getElementById("result").innerHTML = "Ergebnis: " + summe;
}
