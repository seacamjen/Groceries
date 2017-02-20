$(function(){
  var faces=["clubs", "hearts", "diamonds", "spades"];
  var elements = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

  faces.forEach(function(face){
    elements.forEach(function(element){
      $("#cardList").append("<li>" + element + " of " + face + "</li>");
    });
  });

});
