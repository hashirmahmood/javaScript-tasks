console.log("i can only invite two people");
const guest = ["Faraz", "Rizwan", "Hashir", "Umair"];
console.log(guest[1] + " will not be able to join the dinner");
guest[1] = "Ahmed";

console.log("\nI've found a bigger dinner table\n");
//adding in the start
guest.unshift("Farhan");
//adding in between
guest.splice(2, 0, "Akhtar");
//adding in the last
guest.push("Haris");

console.log(guest);
for (let i = guest.length - 3; i >= 0; i--) {
  console.log(`Sorry ${guest[i]}, i can't invite you to the dinner`);
  guest.pop();
}
console.log(guest);
