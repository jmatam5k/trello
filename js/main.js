
function agregaLista(){


	var contenedorInput = document.getElementById('entrada');
	//se crea formulario
	var myform=document.createElement('form');
	myform.setAttribute('id','mform');

	//texto
	var elementoText=document.createElement('input');
	elementoText.setAttribute('type','text');
	elementoText.setAttribute('placeholder','Escriba aquí..');
	elementoText.setAttribute('class','tarjeta textarea');
	elementoText.setAttribute("id", "inputTarea");
	elementoText.value;
	elementoText.value='';

	//boton
	var elementoInput = document.createElement('input');
	elementoInput.setAttribute('type','button');
	elementoInput.setAttribute('class','primary');
	elementoInput.setAttribute('value','Guardar');
	elementoInput.setAttribute('id','boton');

	//sacar valor del textarea y guardar en la tarjeta
	

	myform.appendChild(elementoText);
	myform.appendChild(elementoInput);
	contenedorInput.appendChild(myform);

	//al enviar se limpia el input
   elementoInput.addEventListener('click', function(){
		myform.reset();
	})
	//creando tarjeta que contradra datos del primer formulario
	/*var tarjeta=createElement('div');
	tarjeta.setAttribute('id','mform2');
	tarjeta.setAttribute('class','lista')
	//se le pasa el input del formulario como titulo
	var titulo=createElement('elementoText');
	titulo.setAttribute('class','titulo');

	tarjeta.appendChild(titulo);*/
}

