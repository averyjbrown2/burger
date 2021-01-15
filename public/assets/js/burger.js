$(".change-devoured").on("click", function () {
  var id = $(this).data("id");
  console.log(id);


  $.ajax({
    url: "/api/burgers/" + id,
    type: "PUT",
    data: {
      devoured: 1
    }
  }).then(
    function () {
      console.log("Success");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
$(".create-form").on("submit", function () {
  $.ajax({
    url: "/api/burgers",
    type: "POST",
    data: {
      devoured: 0,
      burger_name: $("#ca").val()
    }
  }).then(
    function () {
      console.log("Success");
      // Reload the page to get the updated list
      location.reload();

    }

  );
});







//auto refresh
//css
//get rid of checkbox






//auto refresh
//css
//get rid of checkbox