var letters = document.getElementsByClassName('kbButton');
var temp = false;
var shiftKey = false;

for(var i = 0; i < letters.length; i++){
	letters[i].addEventListener('click', insertChar, false);
}

function insertChar(){
	var selectchar = event.target.dataset.letter;

	if(temp == true || shiftKey == true){
		selectchar = selectchar.toUpperCase();
	}else{
		selectchar = selectchar.toLowerCase();
	}
	document.getElementById('input').value += selectchar;
	shiftKey = false;
}

	document.getElementById('button48').onclick = onCapsLockClick;

function onCapsLockClick(){
	temp =! temp;
}

	document.getElementById('button64').onclick = shiftClick;
	document.getElementById('button76').onclick = shiftClick;
function shiftClick(){
	shiftKey =! shiftKey;
}

	document.getElementById('button30').onclick = deleteLastChar;

function deleteLastChar(){
	var text = document.getElementById('input').value;
	var lastChar = text.slice(0, -1);
	document.getElementById('input').value = lastChar;
}

	document.getElementById('button83').onclick = insertSpace;

function insertSpace(){
	var text = document.getElementById('input').value;
	text = text + ' ';
	document.getElementById('input').value;
	
}

	document.getElementById('button45').onclick = pressEnter;

function pressEnter(){
	var text = document.getElementById('input').value;
	text = '\n';
	document.getElementById('input').value += text;
}





