document.body.addEventListener("keydown", down);
document.body.addEventListener("keyup", up);

function down(e) {
	// body...
	console.log(e.key);
	var audio = new Audio('assets/key.wav');
audio.play();
	document.getElementById(e.key).style.backgroundColor = "green";
	document.getElementById(e.key).style.color = "black";

}
function up(e) {
	// body...
	document.getElementById(e.key).style.backgroundColor = "";
	document.getElementById(e.key).style.color = "";
}
