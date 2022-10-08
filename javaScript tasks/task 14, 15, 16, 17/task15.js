const guest = ["Faraz", "Rizwan", "Hashir", "Umair"];
console.log(guest[1] + " will not be able to join the dinner");
guest[1] = "Ahmed";

guest.forEach((a) => {
  console.log(`Dear ${a}, i've invited you to dinner at my house`);
});
