function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;

	if(nombre == ""){
		var hermano = document.getElementById("name");
		var mensaje = document.createTextNode("Debe llenar el espacio con su nombre");
		return aviso(hermano,mensaje);

	}
	else{
			if(nombre.charAt(0) == nombre.charAt(0).toLowerCase()){
			var hermano = document.getElementById("name");
			var mensaje = document.createTextNode("La primera letra debe ser mayúscula");
			return aviso(hermano,mensaje);
		}
	}
	if(apellido == ""){
		var hermano = document.getElementById("lastname");
		var mensaje = document.createTextNode("Debe llenar el espacio con su apellido");
		return aviso(hermano,mensaje);

	}
	else{
		if(apellido.charAt(0) == apellido.charAt(0).toLowerCase() || nombre.charAt(0) == nombre.charAt(0).toLowerCase()){
			var hermano = document.getElementById("lastname");
			var mensaje = document.createTextNode("La primera letra debe ser mayúscula");
			return aviso(hermano,mensaje);
		}	
	}
	if(email == ""){
		var hermano = document.getElementById("input-email");
		var mensaje = document.createTextNode("Debe llenar el espacio con su email");
		return aviso(hermano,mensaje);

	}
    var formato = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !formato.test(email) ){
        var hermano = document.getElementById("input-email");
        var mensaje = document.createTextNode("Verifique su email");
         return aviso(hermano,mensaje);
    }
		if(contraseña.length < 5 ){
			var hermano = document.getElementById("input-password");
			var mensaje = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
			aviso(hermano,mensaje);
		}else if(contraseña == "123456" || contraseña =="password" || contraseña == "098754"){
			alert("Por favor escriba otra contraseña");
		}

	if (document.getElementsByTagName("select")[0].value == 0){
		var hermano = document.getElementsByTagName("select")[0];
		var mensaje = document.createTextNode("Debes seleccionar una opción");
		aviso(hermano, mensaje);
		
	}
}

function aviso (hermano, mensaje){
	var avisoBlack = document.createElement("span");
	var mensaje_aviso = hermano.parentNode;

	mensaje_aviso.insertBefore(avisoBlack,hermano);

	avisoBlack.appendChild(mensaje);
	return avisoBlack;
}
