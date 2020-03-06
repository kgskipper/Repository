
var numberField=document.getElementById("numberInput");
numberField.addEventListener("blur", goodLuck);

function goodLuck() {
var numberField=document.getElementById("numberInput");
alert ('GoodLuck');
}


var nameField=document.getElementById("nameInput");
nameField.addEventListener("change", outputText);

function outputText() {
	var nameField = document.getElementById("nameInput");
	var theName = nameField.value;
	var nameOutputString = "Have we met before, " + theName;
	var paragraphField =document.getElementById("output");
	paragraphField.innerHTML=nameOutputString;
}

var selectField=document.getElementById("dishSelect");
selectField.addEventListener("change", selectFieldFunction);

function selectFieldFunction(){
	
	var paragraphField=document.getElementById("userSelect");
	paragraphField.style.color = "blue";
	paragraphField.style.backgroundColor = "red";
	paragraphField.innerHTML = "Good Choice";
} 

var actualRangeInput=document.getElementById("rangeInput");
actualRangeInput.addEventListener("mouseup", readInUserRating);

function readInUserRating(){
	var value=document.getElementById("rangeInput").value;
	if (value <= 4){
		var paragraphField =document.getElementById("rateInput");
		paragraphField.innerHTML="Are you sure?";
	} else if (value >= 6){
		var paragraphField =document.getElementById("rateInput");
		paragraphField.innerHTML="Great";
	}
}

var userReset=document.getElementById("resetButton");
userReset.addEventListener("click", whenUserReset);

function whenUserReset(){
	var userReset =document.getElementById("resetButton");
	alert('Get it right this time!');
	document.body.style.backgroundColor = "yellow";
}

var hitSubmit =document.getElementById("submitButton");
hitSubmit.addEventListener("click", submissionFunction);

function submissionFunction() {
	var numberField =document.getElementById("numberInput");
	var phoneNum =document.getElementById("numberInput").value;
	var paragraphField =document.getElementById("parasub");
	if(phoneNum == null || phoneNum == "")
	{
		paragraphField.innerHTML ="Tricked you--phone number is required!";
		paragraphField.style.color ="red";
		paragraphField.style.backgroundColor ="gray";
		return false;
		
	}
	else
	{
		paragraphField.innerHTML ="Thanks--can I call you tomorrow?";
		paragraphField.style.color ="orange";
		paragraphField.style.backgroundColor ="blue";
		return true;
	}
}
	







	