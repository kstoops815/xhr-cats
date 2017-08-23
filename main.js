



function domString(getCat){
	var catString = ""
	for(var i = 0; i < getCat.length; i++){
		catString += `<div class="cat">`;
		catString += `<div>${getCat[i].name}</div>`;
		catString += `<img src="${getCat[i].url}">`;
		catString += `</div>`;
	}
	writeToDom(catString);

}


function writeToDom(shit){
	document.getElementById("kat-koral").innerHTML=shit;

}



domString(cats);