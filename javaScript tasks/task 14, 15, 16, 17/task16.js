const guest = ["Faraz", "Rizwan", "Hashir", "Umair"];
console.log(guest[1] + " will not be able to join the dinner");
guest[1] = "Ahmed";

guest.forEach((a) => {
  console.log(`Dear ${a}, i've invited you to dinner at my house`);
});

console.log("\nI've found a bigger dinner table\n");
//adding in the start
guest.unshift("Farhan");
//adding in between
guest.splice(2, 0, "Akhtar");
//adding in the last
guest.push("Haris");

guest.forEach((a) => {
  console.log(`Dear ${a}, i've invited you to dinner at my house`);
});
