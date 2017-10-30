$(document).ready(function(){
	myReq();
})

var myReq = function() {

$.ajax({
  type: "GET",
  url: "http://52.25.225.137:8080/gasses",
  dataType: "json"
})  //end of AJAX


.done(function(data, status) {

var $table = $("<table>");
var $thead = $("<thead>");
var $tbody = $("<tbody>");

data.forEach(function (element){
	var id = element.id;
	var amount = element.amount;
	var date = element.date;
	var $tr = $("<tr>")
	var $td = $("<td>");
	var deleteButton = $("<td>");



	$td.attr("id", id);
	$td.text(date + ": " + amount);
	$tr.append($td);

	
	deleteButton.attr("id", id);
	deleteButton.text("Delete");
	$tr.append(deleteButton);
	

	$td.click(function(e){
		console.log("Clicked");
		console.log(id);
		passElement(element, $table);

	})


				deleteButton.click(function(e){
					e.preventDefault();
					console.log("You are in the delete click event and the id is " + id);
					deleteGas(id); 

					$("#content").empty();	

				}); //end of clicking on the delete button

						if (id%2 === 0) {
						$tr.attr("style", "background-color: white");
						}

						$($tbody).append($tr);

						}); //for each loop ends
	
	$($table).append($tbody);
	$("body").append($table);

}) //end of .done method

.fail(function(xhr, status, error) {
  console.log('It blew up again');

})

} //end of MyReq()

var passElement = function (element, table) { 

	table.hide();

	var $ul = $("<ul>");

	for (var stuff in element) {
		var $li = $("<li>");

		$li.text(element[stuff])
			}
		
		$ul.append($li);
		}

	$("#content").append($ul);

	var button = $("<button>");
	button.attr("id", "emptyButton");
	button.text("Look At Gas Purchase");
	$("#content").append(button);

	$("#emptyButton").click(function (e) {

		$("#content").empty();
		table.show();

	}) //end of empty button click function

 //end of passElement method


$(addGas.submit).click(function(e){ //SUBMIT BUTTON TO ADD POKEMON
	e.preventDefault();
	console.log("Your submit button works!")
	
	var newGas = {
		amount: $(addGas.amount).val(), 
		sMileage: $(addGas.sMileage).val(), 
		eMileage: $(addGas.eMileage).val(), 
		date: $(addGas.date).val() 
		//img: $(addPoke.img).val()
	}

	console.log(newPoke);

	 $.ajax ({
		type: "POST",
		url: "http://52.25.225.137:8080/GasREST/rest/gasses", 
		dataType: "json", 
		contentType: "application/json", 
		data: JSON.stringify(newGas)
		})

	 console.log("In the add gas function " + newGas.id);

	var $td = $("<td>");
	$td.attr("id", newGas.id);
	$td.text(newGas.date +  ": " + newGas.amount);
	var $tr = $("<tr>");

	$tr.append($td);



	var deleteButton = $("<td>");
	deleteButton.attr("id", newGas.id);
	deleteButton.text("Delete Pokemon");
	$tr.append(deleteButton);
	
	if (newGas.id%2 === 0) {
			$tr.attr("style", "background-color: white");
			}

		$("table").append($tr);

});  //end of submit button click event function to add something
	

var deletePoke = function(id) {


	console.log("In the delete function and the id " + id + " was passed.");

	$.ajax({		
			type:"DELETE",
			url: "http://52.25.225.137:8080/GasREST/rest/gasses"+id,
			dataType: "json"
			})

	var row = document.getElementById(id); //remove first column
	row.parentNode.removeChild(row);

	var row2 = document.getElementById(id); //remove second column
	row2.parentNode.removeChild(row2);	
		
}
