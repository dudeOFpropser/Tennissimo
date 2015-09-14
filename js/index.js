$(document).ready(function(){
    var friendshipDays = getFriendshipDays(); 
    $('footer p b').html(friendshipDays);

    buildTable();
}); 

function buildTable(){
    var content = '[{"id":"1","player1":"Bill","player2":"Jordan","winner":"Bill","score": "20-2"}]';

    $.ajax({
        type: 'POST',
        data: JSON.stringify(content),
        contentType: 'application/json',
        url: 'http://localhost:3000/additem',                      
        success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
        }
    });

    $.getJSON( "/data/notour.json", function( data ) {
        var tbody = $("<tbody />"); 

        if(data != null && data.length > 0){
            data = JSON.parse(data);
            for(var i = 0; i < data.length; i++) {
                var row = $("<tr />");
                row.html("<td>"+data[i].id+"</td>"+
                    "<td>"+data[i].player1+"</td>"+
                    "<td>"+data[i].player2+"</td>"+
                    "<td>"+data[i].winner+"</td>"+
                    "<td>"+data[i].score+"</td>"); 

                row.appendTo(tbody);
            }
            var $tennisTable = $('#tennisTable');
            tbody.appendTo($tennisTable);
        }
        else{
            $("<h1> There are currently no tennis games! </h1>").insertBefore("#tennisTable");
            $("#tennisTable").remove(); 
        }
    }); 
}
function getFriendshipDays(){
    var oneDay = 86400000; //one day in milliseconds bro
    var firstDate = new Date(2010,08,05);
    var secondDate = new Date();

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
}