var storage = window.localStorage;
var usuario_logado = null

function start(){
	storage.setItem('usuario_logado', usuario_logado)
	if (storage.getItem("usuarios_cadastrados") == null){
		storage.setItem('usuarios_cadastrados', JSON.stringify([]))
	}
	console.log(storage.getItem("usuarios_cadastrados"))
}

function start_logado(){
	usuario_logado = storage.getItem("usuario_logado")
	document.getElementById("msg").innerHTML = `Oi ${usuario_logado}`
}

function logar(){
	cadastrados_no_local_storage = JSON.parse(storage.getItem("usuarios_cadastrados"))
	
	let login_info = document.getElementById("login").value
	let senha_info = document.getElementById("senha").value

	let status_404 = true

	for (element of cadastrados_no_local_storage){
		if(element.username === login_info){
			status_404 = false
			if (element.senha === senha_info){
				usuario_logado = element.username
				storage.setItem('usuario_logado', usuario_logado)
				window.location.assign("login.html")
			}else{
				document.getElementById("resultado").innerHTML = `${element.username}, Senha incorreta`
			}
		}
	}
	if (status_404){
		document.getElementById("resultado").innerHTML = "Usuário não existe!"
	}
}

function cadastro(){
var username = document.getElementById("novo").value
var senha = document.getElementById("nova").value

usuarios_cadastrados = JSON.parse(storage.getItem("usuarios_cadastrados"))

usuarios_cadastrados.push({"username": username, "senha": senha})

storage.setItem('usuarios_cadastrados', JSON.stringify(usuarios_cadastrados))

alert("Cadastro concluído com sucesso")
window.location.assign("index.html")
}

