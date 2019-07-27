 $(document).ready(function() {
 	console.log("this is testing");
 	$("#saveBrand").click(function(){
 		var brand_name=document.getElementById("brand_name").value;
 		var description=document.getElementById("description").value;
 		var post_data = {
 		"id":1,
 		"brand_name":brand_name,
 		"description":description,
 	}


    $.ajax({
                        type    : 'POST',
                        contentType : 'application/json; charset=utf-8',
                        url     : "http://localhost:8000/Brand/",
                        data    : JSON.stringify(post_data),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data){
                            alert("success! Post");
                            window.location.assign("brand.html");
                        }
                    });
 	});
});


