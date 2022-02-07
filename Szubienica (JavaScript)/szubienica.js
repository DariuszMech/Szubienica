var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var haslo1 ="";

var dobre = new Audio("dobre.wav");
var zle = new Audio("zle.wav");
var koniecgry = new Audio("koniecgry.wav");
var wygrana = new Audio("wygrana.wav");

for(i=0; i<dlugosc; i++)
{
	if(haslo.charAt(i)==" ")
	{
		haslo1 = haslo1 + " ";
	}
	else
	{
		haslo1 = haslo1 + "-";
	}
}

function wypisz_haslo1()
{
	document.getElementById("plansza").innerHTML=haslo1;
}

window.onload = start;

var literki="AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ";

function start()
{
	var tresc_diva="";
	for(i=0; i<35; i++)
	{
		var element = "lit"+ i ;
		tresc_diva= tresc_diva + '<div class="litera"  onclick="sprawdz('+i+')" id="'+element+'">' + literki.charAt(i) + '</div>';	
	}
	 
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	wypisz_haslo1();
}

var zla_proba = 0;

function sprawdz(nr)
{
	var trafiona = false;
	var haslo2 = "";
	
	for(i=0;i<dlugosc;i++)
	{
		if(haslo.charAt(i) == literki.charAt(nr))
		{	
			haslo2 = haslo2 + literki.charAt(nr);
			trafiona = true;
		}
		else
		{
			haslo2 = haslo2 + haslo1.charAt(i);			
		}
	}
	
	haslo1 = haslo2;
	var el = "lit" + nr;
	document.getElementById(el).setAttribute("onclick",";");
	
	if(trafiona == false)
	{	
		zle.play();
		document.getElementById(el).style.background="red";
		document.getElementById(el).style.border="3px solid red";
		
		zla_proba++;
		document.getElementById("szubienica").innerHTML="<img src=\"img/s"+zla_proba+".png\"/>";
		if(zla_proba==8)
		{
			document.getElementById("alfabet").innerHTML = ' </br>  </br> </br> PRZEGRAŁEŚ<p><span class="reset" onclick="location.reload()">ZAGRAJ PONOWNIE</span></p> ';
			koniecgry.play();
		}
	}
	else
	{
		dobre.play();
		document.getElementById(el).style.background="green";
		document.getElementById(el).style.border="3px solid green";
		wypisz_haslo1();
		if(haslo1==haslo)
		{
			document.getElementById("alfabet").innerHTML = ' </br> </br> </br>GRATULACJE!!! WYGRAŁEŚ <p><span class="reset" onclick="location.reload()">ZAGRAJ PONOWNIE</span></p> ';		
			wygrana.play();
		}
	}		
}





