//Business logic
function Pizza(size, crust, sauce, cheese, meat, nonMeat) {
  debugger;
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.nonMeat = nonMeat;
}

Pizza.prototype.Price = function() {
  debugger;
  var pizzaSize = this.size;
  var pizzaCrust = this.crust;
  var pizzaSauce = this.sauce;
  var pizzaCheese = this.cheese.length;
  var pizzaMeat = this.meat.length;
  var pizzaNonMeat = this.nonMeat.length;

  if (pizzaSize === "Personal") {
    return 8+(pizzaCheese*3)+(pizzaMeat*2)+(pizzaNonMeat*1.50)
  } else if (pizzaSize === "Small") {
    return 10+(pizzaCheese*3)+(pizzaMeat*2)+(pizzaNonMeat*1.50)
  } else if (pizzaSize === "Medium") {
    return 12+(pizzaCheese*3)+(pizzaMeat*2)+(pizzaNonMeat*1.50)
  } else if (pizzaSize === "Large") {
    return 14+(pizzaCheese*3)+(pizzaMeat*2)+(pizzaNonMeat*1.50)
  } else if (pizzaSize === "Jumbo") {
    return 16+(pizzaCheese*3)+(pizzaMeat*2)+(pizzaNonMeat*1.50)
  } else {
    alert("Please select a pizza size");
  }
};
//UI logic
$(document).ready(function() {
  $("form#pizza-order").submit(function() {
    event.preventDefault();
    debugger;
    var userCheese = [];
    var userMeat = [];
    var userNonMeat = [];
    var userSize = $("#pizza-size").val();
    var userCrust = $("#pizza-crust").val();
    var userSauce = $("#pizza-sauce").val();
    $("input:checkbox[name=pizza-cheese]:checked").each(function () {
      userCheese.push($(this).val());
    });
    $("input:checkbox[name=meat-toppings]:checked").each(function () {
      userMeat.push($(this).val());
    });
    $("input:checkbox[name=non-meat-toppings]:checked").each(function () {
      userNonMeat.push($(this).val());
    });
    var userPizza = new Pizza (userSize, userCrust, userSauce, userCheese, userMeat, userNonMeat);
    var price = userPizza.Price().toFixed(2);
    $("#order-summary").show();ad
    $("#pizza-order").hide();
    $("#user-size").text(userPizza.size);
    $("#user-crust").text(userPizza.crust);
    $("#user-sauce").text(userPizza.sauce);
    $("#user-cheese").text(userPizza.cheese);
    $("#user-meat").text(userPizza.meat);
    $("#user-non-meat").text(userPizza.nonMeat);
    $("#user-balance").text(price);
  });
});
