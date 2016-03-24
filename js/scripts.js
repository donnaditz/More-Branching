$(document).ready(function(){
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
});
