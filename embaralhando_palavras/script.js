function shuffle(array){
  array.sort(() => Math.random() - 0.5)
}

function embaralhando(){
  let n = document.getElementById("emb").value
  n = n.split("")
  shuffle(n)
  document.getElementById("embaralhe").innerHTML = n.join("")
}