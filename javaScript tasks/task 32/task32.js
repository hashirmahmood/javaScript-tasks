let current_users = ["john", "Peter", "parker", "david", "adam"];
let new_users = ["Parker", "mahmood", "PETER", "anderson", "harry"];

for (let i = 0; i < current_users.length; i++) {
  for (let j = 0; j < new_users.length; j++) {
    if (
      new_users[j] == current_users[i] ||
      new_users[j].toLowerCase() == current_users[i].toLowerCase()
    ) {
      console.log("Person will need to enter a new username");
    }
  }
}
