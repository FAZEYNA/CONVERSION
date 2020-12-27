function CONVERSION10()
{
	b10 = document.getElementById('base10');
	if(!isNaN(b10.value) && b10.value>=0)
	{
		document.getElementById("erreurb10").innerText = "";
		document.getElementById('base2').value = (b10.value - 0).toString(2);
		document.getElementById('base16').value = (b10.value-0).toString(16);
	}else{
		document.getElementById("erreurb10").innerHTML = "LA VALEUR EST INCORRECTE!<br><br>";
		document.getElementById("erreurb10").style.color = 'red';
	}
}
//RECHERCHES TO STRING, PARSE INT
function CONVERSION16()
{	
	b16= document.getElementById('base16');
	if(!isNaN(b16.value))
	{
		document.getElementById('base2').value = (b16.value-0).toString(2);
		document.getElementById('base10').value = (b16.value - 0).toString(10);
		b16.value = (b16.value - 0).toString(16);	
	}else{
		document.getElementById('base2').value = parseInt(document.getElementById('base2').value,16);
		document.getElementById('base10').value = parseInt(document.getElementById('base10').value,16);
		b16.value = parseInt(b16.value,16);	
	}
	
}
function CONVERSION2()
{
	b2= document.getElementById('base2');
	if(!isNaN(b2.value) && b2.value>=0)
	{
		document.getElementById("erreurb2").innerText = "";
		document.getElementById('base16').value = (b2.value-0).toString(16);
		document.getElementById('base10').value = (b2.value - 0).toString(10);
		b2.value = (b2.value - 0).toString(2);
	}else{
		document.getElementById("erreurb2").innerHTML = "LA VALEUR EST INCORRECTE!<br>";
		document.getElementById("erreurb2").style.color = 'red';
	}
}
