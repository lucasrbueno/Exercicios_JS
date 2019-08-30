function Aluno(numero){
  this.numero = numero
  this.nota = parseInt(Math.random()*10)
  this.status = (this.nota >= 7) ? "Aprovado" : "Reprovado"
}

function start() {
        var body = document.getElementsByTagName("body")[0];

        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");

        let contadorAprovado = 0

        for (var j = 1; j <= 20; j++) {
            var row = document.createElement("tr");
            let obj = new Aluno (j.toString())

                var cell = document.createElement("td");
                var cellText = document.createTextNode(`Número ${j}`);
                cell.appendChild(cellText);
                row.appendChild(cell);

                var cell = document.createElement("td");
                var cellText = document.createTextNode(obj.nota);
                cell.appendChild(cellText);
                row.appendChild(cell);

                var cell = document.createElement("td");
                var cellText = document.createTextNode(obj.status);
                cell.appendChild(cellText);
                row.appendChild(cell);
            
            tblBody.appendChild(row);
        }

        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        tbl.setAttribute("border", "2");
    }
