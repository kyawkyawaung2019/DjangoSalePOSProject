 $(document).ready(function() {
    $("#saveGroup").click(function(){
        var group_name=document.getElementById("group_name").value;
        var no_customer=document.getElementById("no_customer").value;
        var country=document.getElementById("country").value;
        var post_data = {
            "id": 9,
            "group_name": group_name,
            "no_customer":no_customer,
            "country": country,
            "customer_id": []
    }


    $.ajax({
                        type    : 'POST',
                        contentType : 'application/json; charset=utf-8',
                        url     : "http://localhost:8000/Group/",
                        data    : JSON.stringify(post_data),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data){
                            alert("success! Post");
                            window.location.assign("group.html");
                        }
                    });
    });
});


