$(document).ready(() => {
  // creating a reference to burger input.


  $(".change-eaten").on("click", function(event) {
    let burgerEaten = {
      eaten: $(this).attr("data-burgerEaten")
    };
    let id = $(this).attr("data-id");
    $.ajax(`/api/burger/${id}`, {
      type: "PUT",
      data: burgerEaten
    }).then(() => {
      console.log("this burger was eaten", burgerEaten);

      location.reload();
    });
  });

  $(".burgerBtn").on("click", (event) => {
    const newBurgerReq = {
      burger_name: $("#burgerReq").val().trim(),
    };
console.log(newBurgerReq)
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurgerReq
    }).then(() => {
      console.log("created new burger request");

      location.reload();
    });
  });

  $(".delete-burger").on("click", function(event) {
    let id = $(this).attr("data-id");
    $.ajax( {
      method: "DELETE",
      url: `/api/Burger/${id}`
    }).then(function() {
      console.log("we will not proceed with the order..", id);
    });
  });
});

//   const $newBurgerInput = $("input.burgerReq");

//   const $toBeEaten = $(".toBeEaten");

//   let burgerBtn = $(document).on("click", ".burgerBtn");
//   let burger = $(".burgerReq");

//   const burgersToEat = [];
//   const burgersEaten = [];
//     burgersToEat
//       .push(burger)
//       .val()
//       .on(burgerBtn);

//   burgersToEat.forEach((burger) => {
//     $(burger).append("<button/>")
//       .addClass("fas fa-hamburger material-icons left")
//       .text("Eat Me!");
//   });
// });
