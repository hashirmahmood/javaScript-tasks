function sandwichItems(...items) {
  console.log("The sandwich must include the following items: ");
  for (let i of items) {
    console.log(i);
  }
}
sandwichItems("tomato", "onion", "cheese slice");
console.log("\n");
sandwichItems("tomato", "onion", "cheese slice", "mushrooms");
console.log("\n");
sandwichItems("tomato", "onion", "cheese slice", "cucumber", "sauce");
