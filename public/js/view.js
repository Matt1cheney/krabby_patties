$(document).ready(() => {
  // creating a reference to burger input.
  let id = $(this).data("id");

  $(".eatMe").on("click", function(event) {

    let burgerEaten = {
      eaten: hasBeenEaten
    };

    $.ajax(`/burger${id}`, {
      type: "POST",
      data: eaten
    }).then(() => {
      console.log("this burger was eaten", burgerEaten);

      location.reload();
    });
  });

  $(".create-form").on("click", (event) => {
    const newBurgerReq = {
      burger_name: $(".burgerReq").val(),
      eaten: false
    };

    $.ajax("/burger", {
      type: "POST",
      data: newBurgerReq
    }).then(() => {
      console.log("created new burger request");

      location.reload();
    });
  });
  $(".delete-burger").on("click", function(event) {
    $.ajax(`/burger${id}`, {
      type: "DESTROY"
    }).then(function() {
      console.log("we will not proceed with the order..", id)
    })
  })
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
