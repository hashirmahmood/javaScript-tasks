const users = ["ahmed", "ali", "admin", "usman", "habib", "omar"];
users.forEach((user) => {
  if (user == "admin") {
    console.log("\nHello admin, would you like to see a status report?");
  } else {
    console.log(`\nHello ${user}, thank you for logging in again.`);
  }
});
