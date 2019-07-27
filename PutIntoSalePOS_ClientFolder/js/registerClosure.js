$(document).ready(function(){
	$('#registerTableBody').empty();
	$.ajax({
		type: 'GET',
		contentType: 'application/json; charset=utf-8',
		url: 'http://localhost:8000/Register/',
		dataType: 'json',
	}).then(function(data){
		for(var i=0; i<data.results.length; i++){
			var Id = data.results[i].id;
			var Status = data.results[i].status;
			var Opening_balance = data.results[i].opening_balance;
			var Note = data.results[i].note;
			var Expected = data.results[i].expected;
			var Counted = data.results[i].counted;
			var Difference = data.results[i].difference;
			var cash_payment_received = data.results[i].cash_payment_received;
			var Store_credit = data.results[i].store_credit;
			var Total = data.results[i].total;
			var Closing_note = data.results[i].closing_note;
			$('#registerTableBody').append('<tr>'+
												'<td>'+Id+'</td>'+
												'<td>'+Status+'</td>'+
												'<td>'+Opening_balance+'</td>'+
												'<td>'+Note+'</td>'+
												'<td>'+Expected+'</td>'+
												'<td>'+Counted+'</td>'+
												'<td>'+Difference+'</td>'+
												'<td>'+cash_payment_received+'</td>'+
												'<td>'+Store_credit+'</td>'+
												'<td>'+Total+'</td>'+
												'<td>'+Closing_note+'</td>'+												
											'</tr>');
		}
	}); 
});