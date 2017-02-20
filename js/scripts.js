$(function(){
  $("#formOne").submit(function() {
    event.preventDefault();
    var foods = [];

    var questions = ["question1", "question2", "question3", "question4", "question5"]
    questions.forEach(function(question){
      foods.push($("#" + question).val());
    })


    var newFoods = foods.sort().map(function(food){
      return food.toUpperCase();
    });

    $("#formOne").hide();
    $("#results").show();

    newFoods.forEach(function(newFood){
      $("#results").append("<li>" + newFood + "</li>");
    });

  });
});
