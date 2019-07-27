function Login(){
	$.ajax({
		url: "http://localhost:8000/Staff/",
	}).then(function(data){
		var username = $('#username').val();
		var pwd = $('#password').val();
		
		for(var i=0; i<data.results.length; i++)
		{
			var u = data.results[i].username;
			var p = data.results[i].password;
			if(username == u && pwd == p)
			{
				window.location.assign("home.html");
			}
			else 
			{
				if(username != u)
				{
					$('#username').val("");
					$('#username').focus();
					var incorrectUsername = $('<p style="color:red;">( Username is incorrect. )</p>');
					$('#lblUsername').empty();
					$('#lblUsername').append(incorrectUsername);
				}
				else if(pwd != p)
				{
					$('#password').val("");
					$('#password').focus();
					var incorrectPassword = $('<p style="color:red;">( Password is incorrect.)</p>');
					$('#lblPassword').empty();
					$('#lblPassword').append(incorrectPassword);
				}
			}
			$('#lblUsername').empty();
			$('#lblPassword').empty();
		}
	});
};

function ClearRegisterModal(){
	$('#rUsername').val("");
	$('#rEmail').val("");
	$('#rPassword').val("");
	
	$('#registerModal').modal('hide');
};

function Register(){
	var username = $('#rUsername').val();
	var email = $('#rEmail').val();
	var pwd = $('#rPassword').val();
	var postData = {
		"username": username,
		"email": email,
		"password": pwd,
	};
	alert(JSON.stringify(postData));
	$.ajax({
		type: "POST",
		contentType: "application/json; charset=utf-8",
		url: "http://localhost:8000/Staff/",
		data: JSON.stringify(postData),
		dataType: "json",
		success: function(){
			ClearRegisterModal();
		}
	});
};