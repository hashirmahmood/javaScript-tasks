let magicians = ["david", "peter", "adam", "parker"];
let magicians_copy = [];
for (let x = 0; x < magicians.length; x++) {
  magicians_copy[x] = magicians[x];
}
console.log(magicians_copy);

function make_great(array) {
  let temp = array;
  for (let i = 0; i < temp.length; i++) {
    temp[i] = "the Great " + temp[i];
  }
  return temp;
}
magicians_copy = make_great(magicians_copy);
const show_magicians = (array) => {
  array.forEach((x) => {
    console.log(x);
  });
};
show_magicians(magicians);
show_magicians(magicians_copy);
