$(function(){
  $("#formOne").submit(function(){
    event.preventDefault();

    var arrayOfStrings= [], formattedArray = [];
    var stringArray = $("#question1").val();


    arrayOfStrings = stringArray.split(" ");


    arrayOfStrings.forEach(function(string){
      if(string.length >= 3){
        formattedArray.push(string);
      }
    });

    var formattedString = formattedArray.reverse().join(" ");

    alert(formattedString);
  });
});
