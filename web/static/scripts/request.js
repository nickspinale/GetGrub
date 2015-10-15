function isNumber(obj) { return !isNaN(parseFloat(obj)) }

function test() {
	//alert("Hi.");
	var doLocation = document.getElementById("dropofflocation").value;
	var puLocation = document.getElementById("pickuplocation").value;
	var comments = document.getElementById("comments").value;
	var delFee = document.getElementById("deliveryfee").value;

	if(!isNumber(delFee)){
		alert("illegal value for deliveryfee.")
	} else{
		//we have valid inputs.
		alert(doLocation +" "+ puLocation +" "+ comments +" "+ delFee);
	}
}
