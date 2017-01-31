
function validarNombreVacio(nombre){
		console.log(nombre);
		if(nombre == ""){
		var hermano = document.getElementById("name");
		var mensaje = document.createTextNode("Debe llenar el espacio con su nombre");
		
		return aviso(hermano,mensaje);

		}
	};
function validarApellidoVacio(apellido){
		if(apellido == ""){
			var hermano = document.getElementById("lastname");
			var mensaje = document.createTextNode("Debe llenar el espacio con su apellido");
			return aviso(hermano,mensaje);
			}
		};
function validarNombreMayuscula(nombre){
		if(nombre.charAt(0) == nombre.charAt(0).toLowerCase()){
			var hermano = document.getElementById("name");
			var mensaje = document.createTextNode("La primera letra debe ser mayúscula");
			return aviso(hermano,mensaje);
			}
			if(hermano!=""){
				removeAviso();
			}
		};

	function validarApellidoMayuscula(apellido){
		if(apellido.charAt(0) == apellido.charAt(0).toLowerCase()){
			var hermano = document.getElementById("lastname");
			var mensaje = document.createTextNode("La primera letra debe ser mayúscula");
			return aviso(hermano,mensaje);
		}	
	};
	function validarEmailVAcio(email){
		if(email == ""){
		var hermano = document.getElementById("input-email");
		var mensaje = document.createTextNode("Debe llenar el espacio con su email");
		return aviso(hermano,mensaje);
		}	
	};
	function validarEmail(email){
		var formato = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !formato.test(email) ){
        var hermano = document.getElementById("input-email");
        var mensaje = document.createTextNode("Verifique su email");
         return aviso(hermano,mensaje);
    	}
	};
	function validarLargoContraseña(contraseña){
			if(contraseña.length < 5 ){
			var hermano = document.getElementById("input-password");
			var mensaje = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
			aviso(hermano,mensaje);
			}
			else if(contraseña == "123456" || contraseña =="password" || contraseña == "098754"){
			alert("Por favor escriba otra contraseña");
			}
	};
	function validarLlenado(select){
		if (document.getElementsByTagName("select")[0].value == 0){
		var hermano = document.getElementsByTagName("select")[0];
		var mensaje = document.createTextNode("Debes seleccionar una opción");
		return aviso(hermano, mensaje);
		}
	};

function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;
    validarNombreVacio(nombre);
    validarApellidoVacio(apellido);
    validarApellidoMayuscula(apellido);
    validarEmail(email);
    validarLargoContraseña(contraseña);
    if(validateForm()==true){
    	return removeAviso();
    }
    else{
    	return aviso();
    }
	
	
};	
function aviso (hermano, mensaje){
	var avisoBlack = document.createElement("span");
	var mensaje_aviso = hermano.parentNode;

	mensaje_aviso.insertBefore(avisoBlack,hermano);
	avisoBlack.appendChild(mensaje);
	return avisoBlack;
};
function removeAviso(hermano){
	var elemento=document.getElementById(hermano);
	if(elemento.nextSibling!=null){
		elemento.parentNode.removeChild(elemento.nextSibling);
	}

};
