const fs = require("fs/promises");
// async function mian() {
//   try {
//     const jsonData = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await jsonData.json();
//     const usersArr = [];
//     data.forEach((item) => {
//       const user = {
//         id: item.id,
//         name: item.name,
//         username: item.username,
//         email: item.email,
//       };
//       usersArr.push(user);
//     });

//     await fs.writeFile("users.json", JSON.stringify(usersArr));
//   } catch (error) {
//     console.log(error);
//   }
// }
// mian();

// async function main() {
//   try {
//     const gela = (await fs.readFile("gela.txt", "utf8")).split(" ").length;
//     console.log(gela);
//   } catch (error) {
//     console.log(error);
//   }
// }

// main()

async function main() {
  try {
    const jsonData = await fs.readFile("user.json", "utf-8");
    const data = JSON.parse(jsonData);
    const result = data.filter((item) => item.age > 18);
    await fs.writeFile("user.json", JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
}
main();
