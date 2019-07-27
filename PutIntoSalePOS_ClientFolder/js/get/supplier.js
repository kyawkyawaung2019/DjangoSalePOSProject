$(document).ready(function() {

    $.ajax({
        url: "http://localhost:8000/Supplier/"
    }).then(function(data) {
        console.log(data.results);
      for (var i = 0; i < data.results.length; i++) {
        var tr = $('<tr/>');
        var id=data.results[i].id;

              $(tr).append("<td>" + data.results[i].supplier_name+"</td>");
              $(tr).append("<td>" + data.results[i].company + "</td>");
              $(tr).append("<td>" + data.results[i].phone+"</td>");
              $(tr).append("<td>" + data.results[i].email+"</td>");
              $(tr).append("<td>" + data.results[i].state+"</td>");
              $(tr).append("<td>" + data.results[i].country+ "</td>");
              $(tr).append("<td><a href=supplier.html?"+data.results[i].id+" id='deleteProduct' class='btn btn-danger'>DELETE</a></td>");
              $(tr).append("<td><a href=update_supplier.html?"+data.results[i].id+" class='btn btn-primary'>EDIT</a></td>");
              $('#supplier').append(tr);
          }
           $('#supplier_table').DataTable();
} );
  });
