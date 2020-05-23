var btns = document.querySelectorAll(".buttons button");
var object = document.getElementsByClassName("object")[0];

for (i = 0; i < btns.length; i++){
	btns[i].addEventListener("click", manage);
}

function manage() {
	if (this.getAttribute("data-add")) {
	 object.classList.add(this.getAttribute("data-add"));
	}

	if (this.getAttribute("data-remove")) {
	 object.classList.remove(this.getAttribute("data-remove"));
	}

}
object.classList.add('move');
object.classList.add('blue');

var sub=document.getElementsById('sub');
sub.addEventListener("click",subscribing);

function subscribing(){
	alert("Thank you");
}