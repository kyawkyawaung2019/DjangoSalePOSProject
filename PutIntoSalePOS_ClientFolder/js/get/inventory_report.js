$(document).ready(function() {
	var SearchString = window.location.search.substring(1);
	$.ajax({
		url: "http://localhost:8000/Product/"
	}).then(function(data) {
		for (var i = 0; i < data.results.length; i++) {
			var tr = $('<tr/>');
			var id=data.results[i].id;
			var product_price=data.results[i].product_price;
			var quantity=data.results[i].quantity;
			var total_stock=product_price * quantity;
			$(tr).append("<td>" + data.results[i].product_name+"</td>");
			$(tr).append("<td>" + data.results[i].quantity+"</td>");
			$(tr).append("<td>" + data.results[i].product_price+"</td>");
			$(tr).append("<td>" + total_stock+"</td>");
			$('#inventory').append(tr);
		}
	});
});


