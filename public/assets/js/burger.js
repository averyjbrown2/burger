$(".change-devoured").on("click", function() {
    var id = $(this).data("id");
    console.log(id);
    var devoured = $(this).data("newdevoured");
    console.log(devoured);
    $.ajax({
        url: "/api/burgers/" + id,
        type: "PUT",
        data: {
          devoured: devoured  
        }
    })
})

//auto refresh
//css
//get rid of checkbox