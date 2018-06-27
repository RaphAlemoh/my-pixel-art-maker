function makeGrid() {
	//define variables
		var canvasDesign, table_cell, gridHeight, gridWidth, rows;
		
	// Select size input
	canvasDesign = $('#canvasPixel');
	gridHeight = $('#grid_height').val();
	gridWidth = $('#grid_width').val();
	
	//remove the td of the table
	canvasDesign.children().remove()
	
	//a nested for to generate the grid table using height and width
	for (x = 0; x < gridHeight; x++) {
	canvasDesign.append('<tr></tr>');
	}
	//first for create table row
		rows = $('tr');
	
	for (y = 0; y < gridWidth; y++) {
		//second for creates table cell 
	rows.append('<td></td>');
	} 
	
	//design the table cells using table id
	table_cell = canvasDesign.find('td');
	
	// When td is clicked by the user, change color of td
	table_cell.click(function() {
		
		// Select color input
		var pickColor;
		pickColor = $("#pick_color").val();
		//using jquery to set the attribute background with the color picked
		$(this).attr('bgcolor', pickColor);
	});
	
}
// When size is submitted by the user, call makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]');

submitQuery.click(function(event) {
	//event to keep the grid on the window
  event.preventDefault();
  //invoke function grid
  makeGrid();
});

