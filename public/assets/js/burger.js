$(".change-devoured").on("click", function () {
  var id = $(this).data("id");
  console.log(id);
  var devoured = $(this).data("newdevoured");

  console.log(devoured);
  $.ajax({
    url: "/api/burgers/" + id,
    type: "PUT",
    data: {
      devoured: newdevoured
    }
  }).then(
    function () {
      console.log("changed burger to", newdevoured);
      // Reload the page to get the updated list
      location.reload();

    }

  );
});







//auto refresh
//css
//get rid of checkbox