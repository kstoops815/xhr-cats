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



//domString(cats);
function executeThisCodeAfterFileLoads(){
	var data = JSON.parse(this.responseText);
	domString(data.cats);
}

function executeThisCodeIfFileErrors(){
	console.log("Shit broke");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "cats.json")
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest2.addEventListener("error", executeThisCodeIfFileErrors);
myRequest2.open("GET", "dogs.json");
myRequest2.send();