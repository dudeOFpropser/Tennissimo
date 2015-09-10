$(document).ready(function(){
    var friendshipDays = getFriendshipDays(); 
    $('footer p b').html(friendshipDays);

    buildTable();
}); 

function buildTable(){
    $.getJSON( "http://localhost:8000/data/notour.json", function( data ) {
        var tbody = $("<tbody />"); 
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
    });  
}
function getFriendshipDays(){
    var oneDay = 86400000; //one day in milliseconds bro
    var firstDate = new Date(2010,08,05);
    var secondDate = new Date();

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
}