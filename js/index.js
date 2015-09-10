$(document).ready(function(){
    var friendshipDays = getFriendshipDays(); 
    $('footer p b').html(friendshipDays);
}); 

function getFriendshipDays(){
    var oneDay = 86400000; //one day in milliseconds bro
    var firstDate = new Date(2010,08,05);
    var secondDate = new Date();

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
}