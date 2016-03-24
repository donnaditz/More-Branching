$(document).ready(function(){
  //Celebrity Dating Project
  $("form#about-you").submit(function(event){
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age > 35 && gender === "male") {
        var name = "date Jessica Alba";

      $("#celebrity").empty().append(name);
      $("#your-date").show();
    } else if (age > 35 && gender === "female") {
        var name = "date Channing Tatum";

      $("#celebrity").empty().append(name);
      $("#your-date").show();

    } else if (age > 35 && gender === "other") {
          var name = "date Jessica Alba and Channing Tatum";

        $("#celebrity").empty().append(name);
        $("#your-date").show();

    } else {
      alert("Too young to date");
    }

    event.preventDefault();
  });

  //Political View Project
  $("form#political-view").submit(function(event){
    var answer1 = $("select#question1").val();
    var answer2 = $("select#question2").val();

    if (answer1 === "yes" && answer2 === "yes") {

      $("#political-answer").empty().append("Pirate");
      $("#political-result").show();

    } else if (answer1 === "yes" && answer2 === "no") {

      $("#political-answer").empty().append("Conservative");
      $("#political-result").show();

    } else if (answer1 === "no" && answer2 === "yes") {

      $("#political-answer").empty().append("Liberal");
      $("#political-result").show();

    } else {
      $("#political-answer").empty().append("going to need a little marijuana and answer the questions later");
      $("#political-result").show();

    }

    event.preventDefault();
  });
});
