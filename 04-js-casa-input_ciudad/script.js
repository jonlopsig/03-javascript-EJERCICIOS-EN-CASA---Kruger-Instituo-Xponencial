function det() {
  let country = document.getElementById("country").value
  let city = document.getElementById("city").value

  alert(`Ciudad: ${city}  \nPaís: ${country}`);

  document.getElementById("myp1").innerHTML = `Ciudad: ${city}`;
  document.getElementById("myp2").innerHTML = `País: ${country}`
  
}