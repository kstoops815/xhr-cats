var cats = [
	{name: "Fluffy", color: "Green", url:"http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"},
	{name: "Killer", color: "White", url:"https://ichef.bbci.co.uk/news/660/cpsprodpb/0452/production/_96360110_crabbycat.jpg"},
	{name: "Sabrina", color: "Black", url:"https://www.petfinder.com/wp-content/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg"}
];



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