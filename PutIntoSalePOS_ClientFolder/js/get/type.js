$(document).ready(function() {

    $.ajax({
        url: "http://localhost:8000/Type/"
    }).then(function(data) {
        console.log(data.results);
      for (var i = 0; i < data.results.length; i++) {
        var tr = $('<tr/>');
        var id=data.results[i].id;
              $(tr).append("<td>" + data.results[i].type_name+"</td>");
              $(tr).append("<td><a href=type.html?"+data.results[i].id+" id='deleteType' class='btn btn-danger'>DELETE</a></td>");
              $(tr).append("<td><a href=update_type.html?"+data.results[i].id+" class='btn btn-primary'>EDIT</a></td>");
              $('#type').append(tr);
          }
           $('#type_table').dataTable();
} );
  });
