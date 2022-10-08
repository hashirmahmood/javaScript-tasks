function make_album(name, title) {
  return (object = {
    albumName: name,
    albumTitle: title,
  });
}
let album1 = make_album("atif aslam", "wo lmhay");
let album2 = make_album("arijit singh", "khamoshiyan");
let album3 = make_album("The weekend", "Star boy");

console.log(album1);
console.log(album2);
console.log(album3);
