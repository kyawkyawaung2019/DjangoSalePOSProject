$(document).ready(function() {
	$.ajax({
		url: "http://localhost:8000/Register/"
	}).then(function(data) {
		var chrtdata = [];
		var labeldata = [];
		var dt = new Date(data.results[0].transaction_date);
		var transaction_date = dt.toDateString();
		for(var i =0; i < data.results.length; i++)
		{
			labeldata.push(transaction_date);
			chrtdata.push(data.results[i].difference)
		}
		var ctx = document.getElementById("revenue").getContext("2d");
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
			labels: labeldata,
				datasets: [{
					label: 'Revenue',
					data: chrtdata,
					backgroundColor: '#82B1FF',
				}]
			}
		});
	});
});
