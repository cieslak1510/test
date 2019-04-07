var tgstatus = false;

function tgnav () {
	var getSidebar = document.querySelector(".nav-side");
	var getSidebarUl = document.querySelector(".nav-side ul");
	var getSidebarTi = document.querySelector(".nav-side span");
	var getSidebarA = document.querySelectorAll(".nav-side a");
	
	if (tgstatus === false){
		getSidebarUl.style.visibility = "visible";
		getSidebar.style.width = "280px";
		getSidebarTi.style.opacity = "0.5";
		
		var arrayLength = getSidebarA.length;
		
	for (var i = 0; i < arrayLength; i++){
		getSidebarA[i].style.opacity = "1";
	}
	
	tgstatus = true;
	}
	
	else if (tgstatus === true){
		getSidebarUl.style.visibility = "hidden";
		getSidebar.style.width = "50px";
		getSidebarTi.style.opacity = "0";
		
		var arrayLength = getSidebarA.length;
		
	for (var i = 0; i < arrayLength; i++){
		getSidebarA[i].style.opacity = "0";
	}
	
	tgstatus = false;
	}
}
function res(){
	var getdiv = document.querySelector(".main1");
	
	if (tgstatus === true)
	{
		getdiv.style.left = "400px";
	}
	else if (tgstatus === false){
		getdiv.style.left = "120px";
	}
}


function zamiana210(){
    let tytul = document.title;
    let kin = tytul.charAt(0);
    let get = document.getElementById("binin").value;
    let con = parseInt(get, kin);
    document.getElementById("decout").value=con;
    }

function zamiana102(){
   let tytul = document.title;
   let kin = tytul.charAt(0);
   let get = document.getElementById("decin").value;
   let con = (+get).toString(kin);
   document.getElementById("binout").value=con;
}

function mateusz_kocham_cie(){
    let get = document.getElementById("binin").value;
    let con = parseInt(get, 16);
    document.getElementById("decout").value=con;
}

function zamiana(){
   let get = document.getElementById("decin").value;
   let con = (+get).toString(16);
   document.getElementById("binout").value=con;
    
}





