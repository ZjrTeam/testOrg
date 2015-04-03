window.onload = function(){
	alert('welcome!');
	var btn = document.getElementById('btn');
	btn.style.background = 'red';
	btn.onclick = abc;
};
function abc(){
	alert('click the button!---first change');
}

