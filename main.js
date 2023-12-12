// Câu 1
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function calculatePrimeSum() {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);

    if (isNaN(a) || isNaN(b) || a >= b) {
      alert("Vui lòng nhập số a và b hợp lệ (a < b).");
      return;
    }

    let sum = 0;

    for (let i = a; i <= b; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }

    document.getElementById('result').innerHTML = `Tổng các số nguyên tố từ ${a} đến ${b} là: <strong>${sum}</strong>`;
  }





// Câu 2
function printTriangle() {
  const n = document.getElementById('sideLength').value;
  if (isNaN(n)) {
    alert("Vui lòng nhập một số nguyên dương.");
    return;
  }
  const sideLength = parseInt(n);
  if (sideLength < 1 || sideLength > 10) {
    alert("Vui lòng nhập số nguyên trong khoảng từ 1 đến 10.");
    return;
  }
  let triangle = "";
  for (let i = 1; i <= sideLength; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    triangle += row + "<br>";
  }
  document.getElementById('triangle').innerHTML = triangle;
}