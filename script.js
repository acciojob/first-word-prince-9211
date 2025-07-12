function firstWord(s) {
  // your code here
	s=s.trimStart();
	let spacIndex=s.indexof(' ');
	if(spacIndex ==== -1){
		return s;
	}
	return s.substring(0,spacIndex)
}
function handleClick() {
const input=document.getElementById("textInput").value;
	const result=firstWord(input);
	documnet.getElementById("output").textContent=result;
}

// Do not change the code below

 const s = prompt("Enter String:");
 alert(firstWord(s));
