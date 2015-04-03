window.onload = function(){
	alert('l am very happying !');
	var btn = document.getElementById('btn');
	btn.style.background = 'red';
	btn.onclick = abc;
};
function abc(){
	console.log('click the button!---first change');
}

