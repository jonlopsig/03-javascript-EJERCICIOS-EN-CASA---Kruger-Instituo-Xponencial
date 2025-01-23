function suma() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);

  alert(n1 + n2)
  
  document.getElementById("suma").innerHTML = `La suma es: ${n1+n2}`
}