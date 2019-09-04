function reverter_numero(){
  let n = document.getElementById("reverter").value
  document.getElementById("reverta").innerHTML = n.split("").reverse().join("");
}

