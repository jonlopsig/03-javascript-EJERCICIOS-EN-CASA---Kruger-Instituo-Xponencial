function prom() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let num3 = parseInt(document.getElementById("num3").value);

  let suma = num1 + num2 + num3;
  let prom = suma / 3


  alert(prom)

  document.getElementById("myp").innerHTML = `El Promedio es : ${prom}`
}