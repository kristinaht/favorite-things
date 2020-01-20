$(document).ready(function(){
	$("form.form").submit(function(){
		var food=$("input#food").val();
		var color=$("input#color").val();
		var city=$("input#city").val();
		var country=$("input#country").val();
		var favoriteThings=[food, color, city, country];
		//favoriteThings[1],[0],[2];
		var someFavorites = [];
		someFavorites.push(favoriteThings[1], favoriteThings[2], favoriteThings[0]);
		$(".output").text(someFavorites);
		event.preventDefault();
	});

});