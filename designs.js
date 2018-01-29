//JQuery for Jeff Choate's Pixel Maker Project

// When size is submitted by the user, call makeGrid()
function makeGrid() {
// Your code goes here!
	let parentCanvas = $('#pixelCanvas');
	let columnHTML = '<td></td>';
	let rowHTML = '<tr></tr>';

	//remove all old cells
	$('tr').remove();

	//add rows
	let height = $('#inputHeight').val();
	for (var row = 0; row < height; row++) {
		parentCanvas.append(rowHTML);
	}

	//add column cells
	let width = $('#inputWidth').val();
	for(var column = 0; column < width; column++){
		$('tr').append(columnHTML);
	}
	console.log($('#inputHeight').val() + '  '+ $('#inputWidth').val());
}

$('#addGrid').on('click', function(evt){
	evt.preventDefault();
	makeGrid();
	console.log('Finished addGrid call');
});

//colorize a cell
$('#pixelCanvas').on('click','td', function(evt){
	$(this).css('background', $("#colorPicker").val());
});