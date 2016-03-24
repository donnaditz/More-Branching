$(document).ready(function(){
  //Celebrity Dating Project ------------------------
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

  //Political View Project ------------------------
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

  //Triangle Tracker Project ------------------------
  $("form#triangle").submit(function(event){
    var length1 = parseInt($("input#length1").val());
    var length2 = parseInt($("input#length2").val());
    var length3 = parseInt($("input#length3").val());

    if(length1 && length2 && length3){
      if (length1 + length2 <= length3 || length1 + length3 <= length2 || length2 + length3 <= length1) {
        $("#triangle-answer").empty().append("Not a triangle").show();

      } else if (length1 === length2 && length1 === length3 && length2 === length3) {
        $("#triangle-answer").empty().append("Equilateral").show();

      } else if (length1 === length2 && length1 !== length3 && length2 !== length3) {
        $("#triangle-answer").empty().append("Isosceles");

      } else if (length1 !== length2 && length1 !== length3 && length2 === length3) {
        $("#triangle-answer").empty().append("Isosceles");

      } else if (length1 !== length2 && length1 === length3 && length2 !== length3) {
        $("#triangle-answer").empty().append("Isosceles");

      } else if (length1 !== length2 && length1 !== length3 && length2 !== length3) {
        $("#triangle-answer").empty().append("Scalene");
      }

    } else {
      $("#triangle-answer").empty().append("Try again");
    }

    event.preventDefault();
  });
});
