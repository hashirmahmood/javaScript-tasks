let magicians = ["david", "peter", "adam", "parker"];
function make_great(array) {
  let temp = array;
  for (let i = 0; i < temp.length; i++) {
    temp[i] = "the Great " + temp[i];
  }
  return temp;
}
magicians = make_great(magicians);

const show_magicians = (array) => {
  array.forEach((x) => {
    console.log(x);
  });
};
show_magicians(magicians);
