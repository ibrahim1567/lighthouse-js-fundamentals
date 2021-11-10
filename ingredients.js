const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('\nHere are all the ingredients, in reverse order:');

for (let r = ingredients.length - 1; r >= 0; r--) {
  console.log(ingredients[r]);
}