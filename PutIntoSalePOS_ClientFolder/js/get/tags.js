$(document).ready(function() {

    $.ajax({
        url: "http://localhost:8000/Tags/"
    }).then(function(data) {
        console.log(data.results);
      for (var i = 0; i < data.results.length; i++) {
        var tr = $('<tr/>');
        var id=data.results[i].id;

              $(tr).append("<td>" + data.results[i].tags_name+"</td>");
              $(tr).append("<td><a href=tags.html?"+data.results[i].id+" id='deleteProduct' class='btn btn-danger'>DELETE</a></td>");
              $(tr).append("<td><a href=update_tags.html?"+data.results[i].id+" class='btn btn-primary'>EDIT</a></td>");
              $('#tags').append(tr);
          }
           $('#tags_table').DataTable();
} );
  });
