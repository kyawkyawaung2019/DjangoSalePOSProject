$(document).ready(function() {
 	$("#saveType").click(function(){
 		var type_name=document.getElementById("type_name").value;
 		var post_data = {
 		"id":1,
 		"type_name":type_name,
 	}


    $.ajax({
                        type    : 'POST',
                        contentType : 'application/json; charset=utf-8',
                        url     : "http://localhost:8000/Type/",
                        data    : JSON.stringify(post_data),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data){
                            alert("success! Post");
                            window.location.assign("type.html");
                        }
                    });
 	});
});