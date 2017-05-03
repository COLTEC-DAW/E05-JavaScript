function cifraCesar(char, key){
	return String.fromCharCode(char.charCodeAt()+key);
}
 
function cifrar(text,key) {
	var out = "";

	for(var i=0;i<text.length;i++){

		out = out.concat(cifraCesar(text[i],key));
	}
	return out;
}

var char = "teste";
var key =3;
document.write(char+"</br>");
document.write(cifrar(char,key)+"</br>");