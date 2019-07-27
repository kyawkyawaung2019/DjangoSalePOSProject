 $(document).ready(function() {
 	$("#saveTags").click(function(){
 		var tags_name=document.getElementById("tags_name").value;
 		var post_data = {
 		"id":1,
 		"tags_name":tags_name,
 	}


    $.ajax({
                        type    : 'POST',
                        contentType : 'application/json; charset=utf-8',
                        url     : "http://localhost:8000/Tags/",
                        data    : JSON.stringify(post_data),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data){
                            alert("success! Post");
                            window.location.assign("tags.html");
                        }
                    });
 	});
});


