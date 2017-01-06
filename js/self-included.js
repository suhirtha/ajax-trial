$(document).ready(function() {
		var dataArray = "<table class='table'><tr><th>User-Name</th><th>Phone number</th><th>City</th><th>Company</th></tr>";
        var subArray;
    $('#btn').click(function() {
        $($.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',
            })
            .done(function(data) {
                console.log("success");

                for (var i = 0; i < data.length; i++) {
                    dataArray += "<tr id='tr" + i + "'><td id='" + i + "'>" + data[i]["username"] + "</td></tr>";
                }
                dataArray += "</table>";
                $('#formdata').append(dataArray);
            })
        )
    });
    $('#formdata').on("click", "td", function() {
    	var that = this;
        $($.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',
            })
            .done(function(data) {
                clickedRowId = $(that).attr("id");
                for (var j = 0; j < data.length; j++) {
                	if(parseInt(clickedRowId) == j) { 
                    	subArray = "<td>" + data[j]["phone"] + "</td><td>"+data[j]["address"]["city"]+"</td><td>"+data[j]["company"]["name"]+"</td>";
                    	$('#tr'+ j).append(subArray);
                   }
                }
            })
        )

    });
});
