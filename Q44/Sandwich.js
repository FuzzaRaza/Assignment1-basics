function order_sandwich(ingredients) {
    if (ingredients === void 0) { ingredients = new Array(); }
    console.log("Your sandwich order consists of:");
    for (var n = 0; n < ingredients.length; n++) {
        console.log(n, ingredients[n]);
    }
    console.log("Hope you enjoy it.");
}
var ingredients = new Array('Mayonaise', 'Ketchup', 'Kabab');
order_sandwich(ingredients);
var ingredients = new Array('Mayonaise', 'Cheese', 'Lettuce', 'Kabab');
order_sandwich(ingredients);
var ingredients = new Array('Mayonaise', 'Cheese', 'Lettuce', 'Zinger', 'onion', 'Mushrooms');
order_sandwich(ingredients);
