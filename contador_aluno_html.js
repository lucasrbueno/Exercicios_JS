function Aluno(numero){
  this.numero = numero
  this.nota = parseInt(Math.random()*10)
  this.status = (this.nota >= 7) ? "Aprovado" : "Reprovado"
}

function start() {
        // get the reference for the body
        var body = document.getElementsByTagName("body")[0];

        // creates a <table> element and a <tbody> element
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");

        let contadorAprovado = 0
        // creating all cells
        for (var j = 1; j <= 20; j++) {
            // creates a table row
            var row = document.createElement("tr");
            let obj = new Aluno (j.toString())

          
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
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
            

            // add the row to the end of the table body
            tblBody.appendChild(row);
        }

        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tbl);
        // sets the border attribute of tbl to 2;
        tbl.setAttribute("border", "2");
    }
